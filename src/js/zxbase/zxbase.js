/**
 * 
 * @constructor
 */
zx.zxbase = function(surface, scale, rom, ram_size) {

	zx.system = this;
	zx.system.surface = surface;

	this.memory = Array.apply(null, Array(ram_size)).map(function (x, i) { return 0; })
	this.rom = rom;
	this.mosaic = zx.mosaic;

	zx.peek = function(addr) {
		addr = addr & 0xffff;
		if (addr < this.rom.length) {
			return this.rom[addr];
		}
		return this.memory[addr - this.rom.length];
	}.bind(this);

	zx.poke = function(addr, value) {
		var ram_at = this.rom.length;
		addr = addr & 0xffff;
		if (addr >= ram_at) {
			this.memory[addr - ram_at] = value;
			// @TODO: If in the screen area
			// @TODO : if 118 do a CR
		}
	}.bind(this);

	zx.usr = function(value) {};

	zx.code = function(character) {
		return sgxASCII(character);
	}.bind(this);

	zx.chr$ = function(code) {
		return sgxToCharacter(code);
	};

	zx.inverse = function(text) {
		return text;
	}.bind(this);


	this.scale = scale || 1;
	this.timecum = 0;

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
}

Inheritance_Manager.extend(zx.zxbase, zx.zxbase);

zx.zxbase.prototype.cls = function() {
	this.surface.setFillColor(sgxColorRGBA.White);
	this.surface.setFillTexture(NULL);
	this.surface.fillRect(this.screenRC);
}

zx.zxbase.prototype.updateCharacter = function(chr, udg) {
}

zx.zxbase.prototype.getCharacterWidth = function(chr) {
	var t = this.getCharacterTexture(chr);
	return t ? t.getWidth() : 0;
}

zx.zxbase.prototype.getCharacterHeight = function(chr) {
	var t = this.getCharacterTexture(chr);
	return t ? t.getHeight() : 0;
}


zx.zxbase.prototype.getCharacterTexture = function(chr) {
	return this.font[chr];
}


zx.zxbase.prototype.drawCharacter = function(chr, attr, x, y) {
	return this.drawWith(this.getCharacterTexture(chr), attr, x, y);
}



zx.zxbase.prototype.drawWith = function(gfx, attr, x, y) {
	if (gfx === undefined || attr === undefined) {
		return;
	}
	
	var switch_colours = attr.flash && (this.flashPulse != attr.inverse);
	var width = gfx.paper.getWidth();
	var height = gfx.paper.getHeight();
	var rc = new sgxRect2f(this.screenRC.left + x*this.scale, this.screenRC.top + y*this.scale, width*this.scale, height*this.scale);

	this.surface.setClipRect(this.screenRC);
	this.surface.setFillColor(sgxColorRGBA.Black);
	this.surface.setFillTexture(gfx.ink);
	this.surface.fillRect(rc);
}
// @todo recomputeSurface(surface);
// @todo use surface

zx.zxbase.prototype.draw = function(surface) {
	this.surface.setFillColor(sgxColorRGBA.White);
	this.surface.setFillTexture(NULL);
	
	this.surface.setClipRect(NULL);
	for(var i=0;i<4;++i) {
		this.surface.fillRect(this.border[i]);
	}
}

// http://www.worldofzx80.org/ZXBasicManual/zxmanchap17.html
zx.zxbase.prototype.plot = function(x, y) {
	this.surface.setClipRect(this.screenRC);

	if (x >= 0 && y >= 0 && x < 64 && y < 44) {
		var rc = new sgxRect2f();
		rc.left = this.toX(sgxFloor(x)*4);
		rc.top = this.toY(sgxFloor(44-y)*4);

		rc.right = rc.left + 4*this.scale;
		rc.bottom = rc.top + 4*this.scale;

		this.surface.setFillTexture(this.font[64].ink);
		this.surface.fillRect(rc);
	}
}

zx.zxbase.prototype.drawPoint = function(x, y) {
}

zx.zxbase.prototype.toX = function(x) {
	return this.screenRC.left + x*this.scale;
}

zx.zxbase.prototype.toY = function(y) {
	return this.screenRC.top + y*this.scale;
}

zx.zxbase.prototype.drawLineWith = function(attr, x1, y1, x2, y2) {
}

zx.zxbase.prototype.drawLine = function(x1, y1, x2, y2) {
}

zx.zxbase.prototype.circle = function(x, y, r) {
}


zx.zxbase.prototype.update = function(telaps) {
	zx.lastInkey = undefined;
	for(var k=8;k<128;++k) {
   		if (sgx.input.Engine.get().isKeyboardKeyPressed(k)) {
   			zx.lastInkey = k;
		}
	}
}

zx.zxbase.prototype.getRGB = function(index, bright) {}

zx.zxbase.prototype.setBorderColor = function(colour) {}
zx.zxbase.prototype.setInkColor = function(colour) {}
zx.zxbase.prototype.setPaperColor = function(colour) {}
zx.zxbase.prototype.setBright = function(bright) {}
zx.zxbase.prototype.setFlash = function(flash) {}
