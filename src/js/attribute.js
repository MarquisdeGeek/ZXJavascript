
function zxAttribute(attr) {
	this.ink = attr & 0x07;
	this.paper = (attr & 0x38) >> 3;
	this.bright = (attr & 0x40) ? 1 : 0;
	this.flash = attr & 0x80;
	this.inverse = false;
	//
	this.inkColor = new sgxColorRGBA();
	this.paperColor = new sgxColorRGBA();
	//
	this.recompute();
}

zxAttribute.prototype.setBright = function(state) {
	this.bright = state ? 1 : 0;
	this.recompute();
}

zxAttribute.prototype.setInk = function(color) {
	this.ink = color & 0x07;
	this.recompute();
}

zxAttribute.prototype.setPaper = function(color) {
	this.paper = color & 0x07;
	this.recompute();
}

zxAttribute.prototype.setFlash = function(flash) {
	this.flash = flash ? true : false;
}

zxAttribute.prototype.recompute = function() {
	this.inkColor = new sgxColorRGBA(zx.system.palette[this.ink][this.bright]);
	this.paperColor = new sgxColorRGBA(zx.system.palette[this.paper][this.bright]);
}
	
