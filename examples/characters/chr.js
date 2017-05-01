var gVars = {};

function SGXPrepare_OS() {
	gVars.scale = 2;
	gVars.mainSurface = sgxskeleton.init(320*gVars.scale, 240*gVars.scale);
}

function SGXinit() {}
function SGXstart(){
	new zx.spectrum(gVars.mainSurface, gVars.scale);
}

function SGXdraw() {
	// We draw zx.system first, which is primarily the border, although it's not strictly necessary
	zx.system.draw();

	zx.system.screen.cls();
	zx.system.screen.border(zx.spectrum.CYAN);
	zx.system.screen.paper(zx.spectrum.WHITE).ink(zx.spectrum.BLACK);

	zx.system.screen.bright(1).printAt(2,8, "The character set");
	zx.system.screen.bright(0).print();

	for(var i=0;i<255;++i) {
		zx.system.screen.print(zx.chr$(i) + " ", zx.SEMICOLON);
	}
}

function SGXupdate(telaps) {
	zx.system.update(telaps);
}
