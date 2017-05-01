
zx.udg = function(a,b,c,d,e,f,g,h) {
	if( Object.prototype.toString.call( a ) === '[object Array]' ) {
		if (b === undefined) {
			b = 0;
		}
		return zx.Texture.create8x8(a, b);
	} else {
		return zx.Texture.create8x8([a,b,c,d,e,f,g,h], 0);
	}
}


