var gVars = {};

function SGXPrepare_OS() {
	gVars.scale = 2;
	gVars.mainSurface = sgxskeleton.init(320*gVars.scale, 240*gVars.scale);
}

function SGXinit() {}
function SGXstart(){
	new zx.spectrum(gVars.mainSurface, gVars.scale);

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

	gVars.message_time = 0;
	gVars.message = "...While this is not an attempt to emulate or simulate the ZX Spectrum display, it is a library which can be used to make games in a similar visual style to those retro classics. With or without the attribute clash.   ";
}

function SGXdraw() {
	// We draw zx.system first, which is primarily the border, although it's not strictly necessary
	zx.system.draw();

	// General code, redraw in full each frame
	zx.system.screen.cls();
	zx.system.screen.border(zx.spectrum.GREEN);
	zx.system.screen.paper(zx.spectrum.WHITE).ink(zx.spectrum.BLACK);

	// Basic text rendering
	// Note that screen commands can be chained
	zx.system.screen.bright(1).printAt(2,4, "Welcome to ZX Javascript");
	zx.system.screen.print();
	zx.system.screen.bright(0).tab(7).ink(zx.spectrum.BLUE).print("By Steven ", zx.SEMICOLON).print("Goodwin");

	// Render the UDGs
	for(var x=0;x<32;x+=2) {
		zx.system.screen.paper(zx.spectrum.YELLOW).ink(zx.int(zx.rnd()*8)).printAt(10, x, zx.chr$(0x90));
	}

	// The flashing is handled automatically by the system
	zx.system.screen.flash(1).paper(zx.spectrum.WHITE).ink(zx.spectrum.MAGENTA).printAt(16,13,"Ready!");
	zx.system.screen.flash(0);

	// The text scroll. The string itself is changed in the update method below
	zx.system.screen.paper(zx.spectrum.WHITE).ink(zx.spectrum.MAGENTA).printAt(21, 1, zx.$(gVars.message, zx.TO, 30));

	// A box drawn with mosiac/block graphics
	zx.system.screen.printAt(20,0, zx.chr$(139));
	zx.system.screen.printAt(20,31, zx.chr$(135));
	for(var i=0;i<30;++i) {
		zx.system.screen.printAt(20, i+1, zx.chr$(131));
		zx.system.screen.printAt(22, i+1, zx.chr$(140));
	}
	zx.system.screen.printAt(21,0, zx.chr$(138));
	zx.system.screen.printAt(21,31, zx.chr$(133));
	zx.system.screen.printAt(22,0, zx.chr$(142));
	zx.system.screen.printAt(22,31, zx.chr$(141));
}

function SGXupdate(telaps) {
	// This is the code which, ultimately, controls the flash attribute
	zx.system.update(telaps);

	// The SGXupdate method gets called above 30 times per second. We don't want
	// to scroll that fast, so use this code.
	gVars.message_time += telaps;

	if (gVars.message_time > 0.1) {
		gVars.message_time = 0;
		gVars.message = zx.$(gVars.message, 1, zx.TO) + zx.$(gVars.message, 0);
	}
}

