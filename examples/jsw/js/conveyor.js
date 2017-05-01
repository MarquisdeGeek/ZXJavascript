
function jswConveyor(data, idx) {
	this.isLeft = data[idx] == 0 ? true : false;
	this.length = data[idx+3];

	var offset = (data[idx+2] * 256 + data[idx+1]) - 24064;
	var y = sgxFloor(offset / 32);
	var x = offset - (y * 32);
	
	this.x = x * 8;
	this.y = y * 8;
}

jswConveyor.prototype.draw = function(surface, texture, ox, oy) {
	var x = this.x + ox;
	var y = this.y + oy;

	var attr = new zxAttribute(0x07);
	for(var count=0;count<this.length;++count) {
		zx.system.drawWith(texture, attr, x, y);
		x += 8;
	}
}

jswConveyor.prototype.update = function(telaps) {
//		x += this.isLeft ? 8 : -8;	// isleft *moves* to left, and so extends to the right
}

