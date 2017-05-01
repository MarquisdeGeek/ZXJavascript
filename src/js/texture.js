
zx.Texture = function(width, height, data, offset, inverse) {
	this.ink = this.createtexture(width, height, 1, data, offset, inverse);
	this.paper = this.createtexture(width, height, 0, data, offset, inverse);
}

zx.Texture.create8x8 = function(data, offset, inverse) {
	return new zx.Texture(8, 8, data, offset, inverse);
}

zx.Texture.create16x16 = function(data, offset, inverse) {
	return new zx.Texture(16, 16, data, offset, inverse);
}


zx.Texture.prototype.getWidth = function() {
	return this.ink.getWidth();
}

zx.Texture.prototype.getHeight = function() {
	return this.ink.getHeight();
}

zx.Texture.prototype.createtexture = function(width, height, ink_not_paper, data, offset, inverse) {
	var texture = sgx.graphics.TextureManager.get().create("", width, height);
	var imageData = [];
	texture.lock(imageData);
	var bitmap = imageData.pBitmap_;

	var bit = 0;
	var shift = 7;
	var xpos = 0;
	var pi = 0;
	var setbit = inverse ? 0 : 1;
	var clrbit = inverse ? 1 : 0;

	var idx = offset - 1;
	for(var i=0;i<width*height;++i) {
		bit >>= 1;
		if (bit == 0) {
			bit = 0x80;
			++idx;
		}

		var isset = (data[idx] & bit) ? setbit : clrbit;

		bitmap[pi + 0] = bitmap[pi + 1] = bitmap[pi + 2] = isset==ink_not_paper?0xff:0;
		bitmap[pi + 3] = isset==ink_not_paper ? 0xff : 0;
		pi += 4;
	}

	texture.unlock(imageData);

	texture.clearRegions();
	texture.addPixelRegion(0,0,width,height);

	return texture;
}
