/**
 * 
 * @constructor
 */
zx.zx80 = function(surface, scale) {
	zx.zxbase.prototype.constructor.call(this, surface, scale, zx.rom, 16*1024);


	this.mosaic = zx.mosaic;

	// Conceptually, any character >= 256 is a treated as a zx80-specific one while
	// anything lower is ASCII. This allows us to use normal javascript,
	// e.g. var s = "hello" + zx.chr$(7)
	// with both JS-friendly stuff, and zx-specifics without them colliding
	zx.code = function(character) {
		var ascii = sgxASCII(character);
		if (ascii >= 256) {	// already in ZX
			return ascii;
		}

		ascii -= 32;

		if (ascii < 0 || ascii >= this.mapASCII2ZX.length) {
			ascii = 15;	// map to ?
		}
		var chr = this.mapASCII2ZX[ascii];
		return chr | 256;
	}.bind(this);

	// As a consequence of creating the ZX/non-ZX division, we have everything from chr$
	// as a ZX-character
	zx.chr$ = function(code) {
		return sgxToCharacter(code | 256);
	};

	zx.inverse = function(text) {
		var output = "";
		for(var i=0;i<text.length;++i) {
			output += zx.chr$(zx.code(text[i]) + 128);
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
		0, NIL, 1,12,13,NIL,NIL,NIL,16,17,20,19,26,18,27,21,
		28,29,30,31,32,33,34,35,36,37,
		14,25,24,22,23,15,NIL,
		38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,
		NIL,NIL,NIL,NIL,NIL,NIL,
		38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,
		NIL,NIL,NIL,NIL,NIL,		
	];

	this.palette = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];

	this.font = [];
	for(var i=0;i<64;++i) {
		this.font[i] = zx.Texture.create8x8(this.rom, 0xe00 + i*8);
		this.font[i+128] = zx.Texture.create8x8(this.rom, 0xe00 + i*8, true);
	}
	
	this.screen = new zx.screen(this);
	this.audio = new zx.audio(this);
}
Inheritance_Manager.extend(zx.zx80, zx.zxbase);

zx.zx80.prototype.getCharacterTexture = function(chr) {

	if (chr < 256) {
		// Map ASCII to our font
		// e.g. space = asc:32 = 0, " = asc 34 : 11
		chr = this.mapASCII2ZX[chr - 32];

	} else {	// we're in ZX-format
		chr = chr - 256;
	}

	var texture =  this.font[chr];

	if (chr < 0 | chr >= this.font.length || !this.font[chr]) {
		return this.font[15];	// The ? symbol
	}

	return this.font[chr];
}
