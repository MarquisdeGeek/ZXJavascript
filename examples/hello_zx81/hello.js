var gVars = {};

function SGXPrepare_OS() {
	gVars.scale = 2;
	gVars.mainSurface = sgxskeleton.init(320*gVars.scale, 240*gVars.scale);
}

function SGXinit() {}
function SGXstart(){
	new zx.zx81(gVars.mainSurface, gVars.scale);

	gVars.message_time = 0;
	gVars.message = "...While this is not an attempt to emulate or simulate the ZX81 display, it is a library which can be used to make games in a similar visual style to those retro classics.     ";

	gVars.invertText = false;
	gVars.ready = "ready?";
	gVars.readyInverse = zx.inverse(gVars.ready);
}

function SGXdraw() {

	// We draw zx.system first, which is primarily the border, although it's not strictly necessary
	zx.system.draw();

	// General code, redraw in full each frame
	zx.system.screen.cls();
	// Basic text rendering
	// Note that screen commands can be chained
	zx.system.screen.printAt(2,4, "Welcome to ZX Javascript");
	zx.system.screen.print();
	zx.system.screen.tab(7).print("By Steven ", zx.SEMICOLON).print("Goodwin");

	zx.system.screen.print();
	for(var i=0;i<64;++i) {
		zx.system.screen.print(zx.chr$(i) + " ", zx.SEMICOLON);
	}
	zx.system.screen.print();
	for(var i=0;i<64;++i) {
		zx.system.screen.print(zx.chr$(i+64) + " ", zx.SEMICOLON);
	}

	// The flashing is handled automatically by the system
	zx.system.screen.printAt(16,13, gVars.invertText ? gVars.readyInverse : gVars.ready );

	// The text scroll. The string itself is changed in the update method below
	zx.system.screen.printAt(20, 1, zx.$(gVars.message, zx.TO, 30));

	// A box drawn with mosiac/block graphics
	zx.system.screen.printAt(19,0, zx.chr$(7));
	zx.system.screen.printAt(19,31, zx.chr$(68));
	for(var i=0;i<30;++i) {
		zx.system.screen.printAt(19, i+1, zx.chr$(3));
		zx.system.screen.printAt(21, i+1, zx.chr$(67));
	}
	zx.system.screen.printAt(20,0, zx.chr$(5));
	zx.system.screen.printAt(20,31, zx.chr$(69));
	zx.system.screen.printAt(21,0, zx.chr$(66));
	zx.system.screen.printAt(21,31, zx.chr$(65));
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
		gVars.invertText = !gVars.invertText;
	}
}

