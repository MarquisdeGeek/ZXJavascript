
/**
 * 
 * @constructor
 */
zx.screen = function(system) {
	this.system = system;

	this.afile = [];
	this.scrfile = [];
	for(var i=0;i<32*24;++i) {
		this.afile.push(0);//todo new zx.attribute());
		this.scrfile.push("");
	}

	this.state = {};
	this.currentAttribute = new zxAttribute(0x7);

	this.ink(zx.WHITE);
	this.paper(zx.BLACK);

	this.cls();
}

zx.screen.prototype.drawWith = function(gfx, attr, x, y) {
	this.system.drawWith(gfx, attr, x, y);
};

zx.screen.prototype.setAttribute = function(attr, x, y) {
	if (typeof (attr) === 'zx.attribute') {
		this.afile[x + y*32] = attr;
	} else {
		this.afile[x + y*32] = new zxAttribute(attr);
	}
}

zx.screen.prototype.setScreen = function(chr, x, y) {
	this.scrfile[x + y*32] = chr;
}


zx.screen.prototype.cls = function() {
	this.system.cls();

	var a = new zxAttribute();
	a.setPaper(this.currentAttribute.paper);

	for(var y=0;y<24;++y) {
		for(var x=0;x<32;++x) {
			this.setAttribute(a, x, y);
			this.setScreen(' ', x, y);
			this.system.drawCharacter(32, a, x*8, y*8);
		}
	}

	this.lastX = this.lastY = 0;
	this.lastPrintX = this.lastPrintY = 0;
}


// ink 8 and paper 8 are transparent : i.e. don't change the attrMap when writing text/plotting
// these are part of the screen state

// TODO: http://www.worldofspectrum.org/ZXBasicManual/zxmanchap16.html

zx.screen.prototype.border = function(colour) {
	this.system.setBorderColor(colour);
	return this;
}

zx.screen.prototype.ink = function(ink) {
	this.system.setInkColor(ink);
	// TODO remove current, and getInk
	this.currentAttribute.setInk(ink);
	return this;
}

zx.screen.prototype.paper = function(paper) {
	this.system.setPaperColor(paper);
	this.currentAttribute.setPaper(paper);
	return this;
}

zx.screen.prototype.bright = function(bright) {
	this.system.setBright(bright);
	this.currentAttribute.setBright(bright);
	return this;
}

zx.screen.prototype.flash = function(flash) {
	this.system.setFlash(flash);
	this.currentAttribute.setFlash(flash);
	return this;
}

zx.screen.prototype.plot = function(x, y) {
	// 0,0 is bottom left
	// draw in ink/paper with inverse/over
	// http://www.worldofspectrum.org/ZXBasicManual/zxmanchap17.html

	// @todo also on circle/draw
	var nx = sgxFloor(x/8);
	var ny = sgxFloor(y/8);
	this.setScreen('', nx, ny);

	this.system.plot(x, y);

	this.lastX = x;
	this.lastY = y;
}

zx.screen.prototype.draw = function(x, y) {
	// 0,0 is bottom left. 
	// Draws relative to last position
	this.system.drawLineWith(this.currentAttribute, this.lastX, this.lastY, this.lastX+x, this.lastY+y);
	this.lastX += x;
	this.lastY += y;
}

zx.screen.prototype.circle = function(x, y, r) {
	// 0,0 is bottom left
	this.system.drawCircle(x, y, r);

	this.lastX = x;
	this.lastY = y;
}



zx.screen.prototype.print = function(text, flags) {
	this.printAt(this.lastPrintY/8, this.lastPrintX/8, text, flags);
	return this;
}

zx.screen.prototype.printAt = function(y, x, text, flags) {
	// Lines are numbered from 0 (at the top) to 21, and columns from 0 (on the left) to 31.
	this.printFineAt(y * 8, x * 8, text);

	if (flags != zx.SEMICOLON) {
		this.lastPrintX = 0;
		this.lastPrintY += 8;
	}
	return this;
}

zx.screen.prototype.printFineAt = function(ypos, xpos, text) {
	if (!text) {	// blank line
		return;
	}

	var length = text.length;
	var x = xpos;
	var y = ypos;
// todo: setclip to non-border
	for(var i=0;i<text.length;++i) {
// NOTE: These characters are drawn in the current ink/paper settings
// NOTE: TODO: Add screen.paper(7) methods to change current state
// TODO: Each character written affects the attrmap
		var chr = zx.code(text[i]);
		this.system.drawCharacter(chr, this.currentAttribute, x, y);
		var width = this.system.getCharacterWidth(chr);
		x += width;	

		if (x >= 256) {
			x -= 256;
			y += this.system.getCharacterHeight(chr);

			// Re-draw if there's any overlap from RHS to LHS
			if (x && x < width) {
				this.system.drawCharacter(chr, this.currentAttribute, x-width, y);
			}			
		}
		
	}

	this.lastPrintX = x;
	this.lastPrintY = y;

	return this;
}


zx.screen.prototype.tab = function(column) {
	if (column*8 < this.lastPrintX) {
		this.lastPrintX = 0;
		this.lastPrintY += 8;
	}
	var spacing = (column % 31) - this.lastPrintX/8;
	// prints enough spaces to move the PRINT position to the column specified. 
	// It stays on the same line. or, if this would involve backspacing, moves on to 
	// the next one. Note that the computer reduces the column number 'modulo 32' 
	// (it divides by 32 and takes the remainder); so TAB 33 means the same as TAB 1.

	var spaces = " ".repeat(spacing);
	this.print(spaces, zx.SEMICOLON);
	return this;
}


