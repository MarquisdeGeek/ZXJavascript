/**
 * 
 * @constructor
 */
zx.spectrum = function(surface, scale) {
	zx.system = this;
	zx.system.surface = surface;

	this.memory = Array.apply(null, Array(48 * 1024)).map(function (x, i) { return 0; })
	this.rom = zx.rom;
	this.mosaic = zx.mosaic;

	zx.peek = function(addr) {
		addr = addr & 0xffff;
		if (addr < 16 * 1024) {
			return this.rom[addr];
		}
		return this.memory[addr - 16 * 1024];
	}.bind(this);

	zx.poke = function(addr, value) {
		var ram_at = 16 * 1024;
		addr = addr & 0xffff;
		if (addr < ram_at) {
			return;
		}
		this.memory[addr - ram_at] = value;

		// The UDG area if from ff58-ffff and holds 21 UDGS in the 
		// character set between $90-$A4
		if (addr >= ram_at) {
			var udg = 0xff58 - ram_at;
			var lower = sgxFloor((addr - 0xff58) / 8);
			this.font[lower + 0x90] = zx.Texture.create8x8(this.memory, 0xff58 - ram_at + lower*8);
		}
	}.bind(this);

	zx.usr = function(value) {
		if (typeof value === 'string' || value instanceof String) {
			value = sgxToUpper(value);
			value = sgxASCII(value) - 65;
			if (value >= 0 && value < 21) {
				return 0xff58 + value * 8;
			}
		}
		return 0;
	}
		
	zx.code = function(character) {
		return sgxASCII(character);
	}

	zx.chr$ = function(code) {
		return sgxToCharacter(code);
	}

	this.scale = scale || 1;
	this.timecum = 0;
	this.flashPulse = false;

	this.zxWidth = 32;
	this.zxHeight = 24;
	this.zxWidthPixels = 32*8;
	this.zxHeightPixels = 24*8;
	var zxwidth = this.zxWidth * 8 * this.scale;
	var zxheight = this.zxHeight * 8 * this.scale;

	this.screenRC = new sgxRect2f();
	this.screenRC.top = (surface.getHeight() - zxheight) / 2;
	this.screenRC.left = (surface.getWidth() - zxwidth) / 2;
	this.screenRC.right = this.screenRC.left + zxwidth;
	this.screenRC.bottom = this.screenRC.top + zxheight;

	this.border = [];
	this.border[0] = new sgxRect2f(0,0, surface.getWidth(), this.screenRC.top);// top
	this.border[1] = new sgxRect2f(0,this.screenRC.top, this.screenRC.left, surface.getHeight()-this.screenRC.top);// left
	this.border[2] = new sgxRect2f(this.screenRC.left+zxwidth,this.screenRC.top, surface.getWidth()-(this.screenRC.left+zxwidth), surface.getHeight()-this.screenRC.top);//right
	this.border[3] = new sgxRect2f(this.screenRC.left,this.screenRC.top+zxheight, zxwidth, surface.getHeight()-(this.screenRC.top+zxheight));

	this.gfxBlack = zx.udg([0,0,0,0,0,0,0,0]);

	this.palette = [
		["000000", "000000"],	// black
		["0000D7", "0000FF"],	// blue
		["D70000", "FF0000"],	// red
		["D700D7", "FF00FF"],	// magenta
		["00D700", "00FF00"],	// green
		["00D7D7", "00FFFF"],	// cyan
		["D7D700", "FFFF00"],	// yellow
		["D7D7D7", "FFFFFF"],	// white
	];

	for(var i=0;i<8;++i) {
		for(var b=0;b<2;++b) {
			var col = new sgxColorRGBA();
			sgxColorRGBA.fromHex(col, this.palette[i][b]+"FF");
			this.palette[i][b] = col;
		}
	}

   this.font = [];
   for(var i=32;i<128;++i) {
      this.font[i] = zx.Texture.create8x8(this.rom, 0x3d00 + (i-32)*8);
   }

   for(var i=0;i<16;++i) {
      this.font[i + 0x80] = zx.Texture.create8x8(this.mosaic, i*8);
   }

   // Copy the A-U characters from ROM to RAM
   for(var i=0;i<21*8;++i) {
   	this.memory[0xff58 + i] = this.rom[0x3d00 + 65*8 + i];
   }

   // And use this as the base data for the UDGs
	for(var udg=0;udg<21;++udg) {
		this.font[udg + 0x90] = zx.Texture.create8x8(this.memory, 0xff58 + udg*8);
	}

	this.setBorderColor(zx.spectrum.BLACK);
	this.setInkColor(zx.spectrum.WHITE);
	this.setPaperColor(zx.spectrum.BLACK);
	this.setBright(false);


	this.screen = new zx.screen(this);
	this.audio = new zx.audio(this);

}

zx.spectrum.prototype.cls = function() {
	this.surface.setFillColor(this.getRGB(zx.spectrum.WHITE));
	this.surface.setFillTexture(NULL);
	this.surface.fillRect(this.screenRC);
}

zx.spectrum.prototype.updateCharacter = function(chr, udg) {
	if (chr >= 0x90 && chr <= 0x90+21) {
		this.font[chr] = udg;
	}
}

zx.spectrum.prototype.getCharacterWidth = function(chr) {
	var t = this.getCharacterTexture(chr);
	return t ? t.getWidth() : 0;
}

zx.spectrum.prototype.getCharacterHeight = function(chr) {
	var t = this.getCharacterTexture(chr);
	return t ? t.getHeight() : 0;
}


zx.spectrum.prototype.getCharacterTexture = function(chr) {
	if (chr < 0 | chr >= this.font.length || !this.font[chr]) {
		return this.font[63];	// The ? symbol
	}

	return this.font[chr];
}


zx.spectrum.prototype.drawCharacter = function(chr, attr, x, y) {
	return this.drawWith(this.getCharacterTexture(chr), attr, x, y);
}



zx.spectrum.prototype.drawWith = function(gfx, attr, x, y) {
	if (gfx === undefined || attr === undefined) {
		return;
	}
	
	var switch_colours = attr.flash && (this.flashPulse != attr.inverse);
	var width = gfx.paper.getWidth();
	var height = gfx.paper.getHeight();
	var rc = new sgxRect2f(this.screenRC.left + x*this.scale, this.screenRC.top + y*this.scale, width*this.scale, height*this.scale);

	var ink = this.palette[switch_colours ? attr.paper : attr.ink][attr.bright];
	var paper = this.palette[switch_colours ? attr.ink : attr.paper][attr.bright];

	this.surface.setClipRect(this.screenRC);

	this.surface.setFillColor(paper);
	this.surface.setFillTexture(NULL);//gfx.paper);
	this.surface.fillRect(rc);

	this.surface.setFillColor(ink);
	this.surface.setFillTexture(gfx.ink);
	this.surface.fillRect(rc);
}
// @todo recomputeSurface(surface);
// @todo use surface

zx.spectrum.prototype.draw = function(surface) {
	this.surface.setFillColor(this.borderColor);
	this.surface.setFillTexture(NULL);
	
	this.surface.setClipRect(NULL);
	for(var i=0;i<4;++i) {
		this.surface.fillRect(this.border[i]);
	}
}

// http://www.worldofspectrum.org/ZXBasicManual/zxmanchap17.html
zx.spectrum.prototype.plot = function(x, y) {
	this.drawPoint(x,y);
}

zx.spectrum.prototype.drawPoint = function(x, y) {
	this.surface.setClipRect(this.screenRC);
	this.drawLine(x,y,x+1,y);
}

zx.spectrum.prototype.toX = function(x) {
	return this.screenRC.left + x*this.scale;
}

zx.spectrum.prototype.toY = function(y) {
	return this.screenRC.top + y*this.scale;
}

zx.spectrum.prototype.drawLineWith = function(attr, x1, y1, x2, y2) {
	this.surface.setDrawColor(attr.inkColor);
	this.drawLine(x1, y1, x2, y2);
}

zx.spectrum.prototype.drawLine = function(x1, y1, x2, y2) {
	// 0,0 is bottom left. Draws relative to last position
	this.surface.setClipRect(this.screenRC);
	// @TODO see the paper behind it too
	// We -16 here because the bottom line (from 176 to 192 px) is the command area and is not used
	var offset = -16;
	this.surface.drawLine2D(this.toX(x1), this.toY(this.zxHeightPixels-y1+offset), this.toX(x2), this.toY(this.zxHeightPixels-y2+offset));
}

zx.spectrum.prototype.circle = function(x, y, r) {
	this.surface.setClipRect(this.screenRC);
	// 0,0 is bottom left
	// TODO
}



zx.spectrum.prototype.update = function(telaps) {
	var flash_speed = 0.5;
	this.timecum += telaps;
	if (this.timecum > flash_speed) {
		this.timecum -= flash_speed;
		this.flashPulse = !this.flashPulse;
	}
}

zx.spectrum.prototype.getRGB = function(index, bright) {
	if (bright === undefined) {
		bright = 0;
	} else {
		bright = 1;
	}

	return zx.system.palette[index&7][bright];
}

zx.spectrum.prototype.setBorderColor = function(colour) {
	this.borderColor = zx.system.palette[colour&7][zx.spectrum.NORMAL];
	this.draw();
}

zx.spectrum.prototype.setInkColor = function(colour) {
	this.inkColor = colour;
}

zx.spectrum.prototype.setPaperColor = function(colour) {
	this.paperColor = colour;
}

zx.spectrum.prototype.setBright = function(bright) {
	this.bright = bright ? zx.spectrum.BRIGHT : zx.spectrum.NORMAL;
}

zx.spectrum.prototype.setFlash = function(flash) {
	this.flash = flash ? true : false;
}

zx.spectrum.BLACK   = 0;
zx.spectrum.BLUE    = 1;
zx.spectrum.RED     = 2;
zx.spectrum.MAGENTA = 3;
zx.spectrum.GREEN   = 4;
zx.spectrum.CYAN    = 5;
zx.spectrum.YELLOW  = 6;
zx.spectrum.WHITE   = 7;

zx.spectrum.NORMAL  = 0;
zx.spectrum.BRIGHT  = 1;
