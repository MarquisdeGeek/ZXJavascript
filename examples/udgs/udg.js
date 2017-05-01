var gVars = {};

function SGXPrepare_OS() {
	gVars.scale = 2;
	gVars.mainSurface = sgxskeleton.init(320*gVars.scale, 240*gVars.scale);
}

function SGXinit() {}
function SGXstart(){
	new zx.spectrum(gVars.mainSurface, gVars.scale);

	// The usual way
	var gfx = zx.udg(
                zx.bin("%00111100"),
                zx.bin("%01000010"),
                zx.bin("%10100101"),
                zx.bin("%10000001"),
                zx.bin("%10100101"),
                zx.bin("%10011001"),
                zx.bin("%01000010"),
                zx.bin("%00111100")
                );

	zx.system.updateCharacter(0x90, gfx);

	// The hard way
	zx.poke(zx.usr("B") + 0, zx.bin("%00000000"));
	zx.poke(zx.usr("B") + 1, zx.bin("%00000000"));
	zx.poke(zx.usr("B") + 2, zx.bin("%00000010"));
	zx.poke(zx.usr("B") + 3, zx.bin("%00111100"));
	zx.poke(zx.usr("B") + 4, zx.bin("%01010100"));
	zx.poke(zx.usr("B") + 5, zx.bin("%00010100"));
	zx.poke(zx.usr("B") + 6, zx.bin("%00010100"));
	zx.poke(zx.usr("B") + 7, zx.bin("%00000000"));

	// We also supprt zx.hex and natural decimal
}

function SGXdraw() {
	// We draw zx.system first, which is primarily the border, although it's not strictly necessary
	zx.system.draw();
	zx.system.screen.paper(zx.spectrum.WHITE);

	zx.system.screen.ink(zx.spectrum.BLUE).printAt(10,15, zx.chr$(0x90));
	zx.system.screen.ink(zx.spectrum.CYAN).printAt(10,17, zx.chr$(0x91));
}

function SGXupdate(telaps) {
	// This is the code which, ultimately, controls the flash attribute
	zx.system.update(telaps);
}
