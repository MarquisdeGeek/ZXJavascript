
function jswItem(gfx, x, y, collected)
{
	this.x = x;
	this.y = y;
	this.gfx = gfx;
}

jswItem.prototype.draw = function(surface, ox, oy) {
	// Q. attributes of item?
	surface.setFillColor(sgxColorRGBA.White);
	var attr = new zxAttribute(0x07);
	//this.gfx.drawAt(surface, attr, this.x, this.y);
	zx.system.drawWith(this.gfx, attr, this.x+ox, this.y+oy);
}

jswItem.prototype.update = function(telaps) {
}

