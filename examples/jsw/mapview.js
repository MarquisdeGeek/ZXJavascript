var gVars = {};

// http://steevs.minervahome.net/clients/self/code/html5/zxjavascript/examples/jsw/

function SGXPrepare_OS() {
	gVars.scale = 2;

    sgxskeleton.PrepareLoadingPage();

	new sgx.main.System();
	sgx.graphics.Engine.create(640,480);	// the size of the draw area we (as programmers) will use

	sgx.main.System.writePage();
	sgx.main.System.initialize();	// optionally pass the 'loading_screen' ID here, to hide the contents once loaded

	gVars.mainSurface = sgx.graphics.DrawSurfaceManager.get().getDisplaySurface();
}


function SGXinit() {}
function SGXstart(){
	
	gVars.speccy = new zx.spectrum(gVars.mainSurface, gVars.scale);

	gVars.jsw = new JSWGame();
	gVars.jsw.switchTo(0);//35);
}

function SGXdraw() {
	gVars.jsw.draw(gVars.mainSurface, 0, 0);
}

function SGXupdate(telaps) {

	zx.system.update(telaps);
	gVars.jsw.update(telaps);

	if (sgx.input.Engine.get().isKeyboardKeyPressed(SGX_KEY_LEFT)) {
		changeRoom(JSWGame.LEFT);
	} else if (sgx.input.Engine.get().isKeyboardKeyPressed(SGX_KEY_RIGHT)) {
		changeRoom(JSWGame.RIGHT);
	} else if (sgx.input.Engine.get().isKeyboardKeyPressed(SGX_KEY_UP)) {
		changeRoom(JSWGame.ABOVE);
	} else if (sgx.input.Engine.get().isKeyboardKeyPressed(SGX_KEY_DOWN)) {
		changeRoom(JSWGame.BELOW);
	} else if (sgx.input.Engine.get().isKeyboardKeyPressed(SGX_KEY_ESCAPE)) {
		gVars.jsw.pauseToggle();
	} else if (sgx.input.Engine.get().isKeyboardKeyPressed(SGX_KEY_SPACE)) {
		gVars.jsw.stepAdvance();
	}
}

function changeRoom(in_direction) {
	gVars.jsw.switchTo(in_direction);
}
