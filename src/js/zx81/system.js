/**
 * 
 * @constructor
 */
zx.zx81 = function(surface, scale) {
	zx.zxbase.prototype.constructor.call(this, surface, scale, zx.rom, 16*1024);

	var d = [];
	for(var i=0;i<16*1024;++i) {
		d[i] = sgxAtox(zx.rom[i*2] + zx.rom[i*2+1]);
	}
	this.rom = d;
	this.mosaic = zx.mosaic;

	// Conceptually, any character >= 128 is a treated as a ZX81-specific one while
	// anything lower is ASCII. This allows us to use normal javascript,
	// e.g. var s = "hello" + zx.chr$(7)
	// with both JS-friendly stuff, and zx-specifics without them colliding
	zx.code = function(character) {
		var ascii = sgxASCII(character);
		if (ascii >= 128) {	// already in ZX
			return ascii;
		}

		ascii -= 32;

		if (ascii < 0 || ascii >= this.mapASCII2ZX.length) {
			ascii = 15;	// map to ?
		}
		var chr = this.mapASCII2ZX[ascii];
		return chr | 128;
	}.bind(this);

	// As a consequence of creating the ZX/non-ZX division, we have everything from chr$
	// as a ZX-character
	zx.chr$ = function(code) {
		return sgxToCharacter(code | 128);
	};

	zx.inverse = function(text) {
		var output = "";
		for(var i=0;i<text.length;++i) {
			output += zx.chr$(zx.code(text[i]) + 64);
		}
		return output;
	}.bind(this);

	// !"#$%&'()*+,-./
	//0123456789
	//:;<=>?@
	//AB...
	//[\]^_`
	//abcde..
	//{|}~
	var NIL=15;
	this.mapASCII2ZX = [
		0, NIL, 11,12,13,NIL,NIL,11,16,17,23,21,26,22,27,24,
		28,29,30,31,32,33,34,35,36,37,
		14,25,19,20,18,15,NIL,
		38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,
		NIL,NIL,NIL,NIL,NIL,NIL,
		38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,
		NIL,NIL,NIL,NIL,NIL,		
	];
	// A = zx.38 = asc.65
	// a = zx.38+64 = asc.102
	for(var i=0;i<64;++i) {
		//this.mapASCII2ZX[i] = this.mapASCII2ZX[i-97+38] + 64;
		//this.mapASCII2ZX[i+102-38-32] = this.mapASCII2ZX[i+38] + 64;
	}

	this.palette = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];

	this.font = [];
	for(var i=32;i<128;++i) {
		this.font[i-64] = zx.Texture.create8x8(this.rom, 0x1d00 + (i-32)*8);
		this.font[i] = zx.Texture.create8x8(this.rom, 0x1d00 + (i-32)*8, true);
	}

	for(var i=0;i<11;++i) {
		this.font[i] = zx.Texture.create8x8(this.mosaic, i*8);
		this.font[i+64] = zx.Texture.create8x8(this.mosaic, i*8, true);
	}

	this.screen = new zx.screen(this);
	this.audio = new zx.audio(this);
}
Inheritance_Manager.extend(zx.zx80, zx.zxbase);

zx.zx81.prototype.getCharacterTexture = function(chr) {

	if (chr < 128) {
		// Map ASCII to our font
		// e.g. space = asc:32 = 0, " = asc 34 : 11
		chr = this.mapASCII2ZX[chr - 32];

	} else {	// we're in ZX-format
		chr = chr - 128;
	}

	var texture =  this.font[chr];

	if (chr < 0 | chr >= this.font.length || !this.font[chr]) {
		return this.font[15];	// The ? symbol
	}

	return this.font[chr];
}
