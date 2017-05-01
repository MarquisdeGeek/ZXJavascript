/**

ZX Javascript

Copyright 2017.
Steven Goodwin. 

This file is released under the GNU General Public License Version 3.

Please see the licensing conditions for details.

The latest version is generally available at:
	https://github.com/marquisdegeek/zxjavascript

See it at:
	https://marquisdegeek.com/code_zxjavascript
*/

var gVars = {};


function SGXPrepare_OS() {
	gVars.scale = 2;

    sgxskeleton.PrepareLoadingPage();

	new sgx.main.System();
	sgx.graphics.Engine.create(320*gVars.scale, 240*gVars.scale);	// the size of the draw area we (as programmers) will use

	sgx.main.System.writePage();
	sgx.main.System.initialize();	// optionally pass the 'loading_screen' ID here, to hide the contents once loaded

	gVars.mainSurface = sgx.graphics.DrawSurfaceManager.get().getDisplaySurface();

	$( document ).ready(function() {      
	    var isMobile = window.matchMedia("only screen and (max-width: 760px)");

	    if (isMobile.matches) {
	        gVars.bUseFade = false;
	    }
	 });

	if (!gVars.bUseFade)
	{
		gVars.tFadeIntraMenu =
		gVars.tFadeToMenu = 
		gVars.tFadeToGameOver =
		gVars.tFadeToNextLevel = 0.0001;
	}

	writeLoadingProcess('loading_tracker', 5);	// MainSettings.loadingProgressSize
	//sgx.text.processTextData(gLanguageData);
	
	gVars.settings = new sgxDebugOptions();
//	populateSettings(gVars.settings);

	if (gVars.settings.getOption('main.fps')) {
		gVars.fpsMeter = new FPSMeter({theme: 'colorful', graph: 1, history: 20});
	}

	// capture all exceptions so the game doesn't fail too hard in production
	//Main.enable(Main.STATE_SAFEMODE_UPDATE);
	//Main.enable(Main.STATE_SAFEMODE_DRAW);
}


function writeLoadingProcess(id, count) {
var parent = $('#' + id);
var id = "loading_screen_process_"+i;

	for(var i=0;i<count;++i) {
		var myImage = $('<img/>');
        myImage.attr('id', 'loading_screen_process_' + i);
        myImage.attr('src', 'white.gif');
		
		parent.after(myImage);
	}
}


function SGXinit()		 {}
function SGXstart() 	 {
	
	var speccy = new zx.spectrum(gVars.mainSurface, gVars.scale);

	gVars.jsw = new JSWGame();
	gVars.jsw.switchTo(0);//35);


	gVars.attr = new zxAttribute();
	gVars.attr.setPaper(zx.spectrum.BLACK);
	gVars.attr.setInk(zx.spectrum.WHITE);
	gVars.gfx = zx.udg(
		zx.bin("%11111111"),
		zx.bin("%10000001"),
		zx.bin("%10011001"),
		zx.bin("%10011001"),
		zx.bin("%11111111"),
		zx.bin("%10111101"),
		zx.bin("%10011001"),
		zx.bin("%11111111")
		);

	zx.system.updateCharacter(0x90, gVars.gfx);

	zx.poke(zx.usr("A") + 0, zx.bin("%11101111"));
	zx.poke(zx.usr("A") + 1, zx.bin("%00000000"));
	zx.poke(zx.usr("A") + 2, zx.bin("%00000000"));
	zx.poke(zx.usr("A") + 3, zx.bin("%00000000"));
	zx.poke(zx.usr("A") + 4, zx.bin("%00000000"));
	zx.poke(zx.usr("A") + 5, zx.bin("%00000000"));
	zx.poke(zx.usr("A") + 6, zx.bin("%00000000"));
	zx.poke(zx.usr("A") + 7, zx.bin("%00000000"));

	
}

function frere() {
	/*
	10 PRINT "Frere Gustav"
	20 BEEP 1,0: BEEP 1,2: BEEP .5,3: BEEP.5,2: BEEP 1,0
	30 BEEP 1,0: BEEP 1,2: BEEP .5,3: BEEP.5,2: BEEP 1,0
	40 BEEP 1,3: BEEP 1,5: BEEP 2,7
	50 BEEP 1,3: BEEP 1,5: BEEP 2,7
	60 BEEP .75,7: BEEP .25,8: BEEP .5,7: BEEP .5,5:BEEP .5,3: 
	       BEEP.5,2: BEEP 1,0
	70 BEEP .75,7: BEEP .25,8: BEEP .5,7: BEEP .5,5: BEEP .5,3: BEEP .5,2: 
	       BEEP 1,0
	80 BEEP 1,0: BEEP 1,-5: BEEP 2,0
	90 BEEP l,0: BEEP 1,-5: BEEP 2,0
	*/
	zx.beep(1,0).beep(1,2).beep(0.5,3).beep(0.5,2).beep(1,0);
	zx.beep(1,0).beep(1,2).beep(0.5,3).beep(0.5,2).beep(1,0);
	zx.beep(1,3).beep(1,5).beep(2,7);
	zx.beep(1,3).beep(1,5).beep(2,7);
	zx.beep(0.75,7).beep(0.25,8).beep(0.5,7).beep(0.5,5).beep(0.5,3).beep(0.5,2).beep(1,0);
	zx.beep(0.75,7).beep(0.25,8).beep(0.5,7).beep(0.5,5).beep(0.5,3).beep(0.5,2).beep(1,0);
	zx.beep(1,0).beep(1,-5).beep(2,0);
	zx.beep(1,0).beep(1,-5).beep(2,0);

}

/*
 5 REM From the ZX Spectrum manual on Drawing primitives
 6 DIM x1, y1, x2, y2, c AS INTEGER
 
10 BORDER 0: PAPER 0: INK 7: CLS: REM turn screen blank
20 LET x1 = 0: LET y1 = 0: REM line start
30 LET c = 1: REM Ink color starting from blue
40 LET x2 = INT(RND * 256): LET y2 = INT(RND * 176): REM Random line end
50 DRAW INK c; x2 - x1, y2 - y1
60 LET x1 = x2: LET y1 = y2: REM Next line starts at current one's ending
70 LET c = c + 1: IF c = 8 THEN LET c = 1: END IF: REM Next color
80 IF INKEY$ = "" THEN GOTO 40: END IF
*/
	gVars.c = 1;
	gVars.x1 = gVars.y1 = 0;

function linedrawing() {

	gVars.x2 = zx.int(zx.rnd() * 256);
	gVars.y2 = zx.int(zx.rnd() * 176);
	zx.system.screen.ink(gVars.c).plot(gVars.x2-gVars.x1, gVars.y2-gVars.y1);
	gVars.c = (gVars.c+1) & 7;
	gVars.x1 = gVars.x2;
	gVars.y1 = gVars.y2;
}
function SGXdraw() {
	zx.system.screen.ink(zx.spectrum.WHITE);
	zx.system.screen.paper(zx.spectrum.BLUE);
	zx.system.screen.printAt(10,16, zx.chr$(0x90));
	zx.system.screen.paper(zx.spectrum.YELLOW);
	zx.system.screen.printAt(12,16, zx.chr$(0x91));
	zx.system.screen.bright(1).printAt(12,18, "  ");
	zx.system.screen.border(zx.spectrum.GREEN);

	// gVars.mainSurface = sgx.graphics.DrawSurfaceManager.get().getDisplaySurface();
	zx.system.draw();
	

	gVars.jsw.draw(gVars.mainSurface);

	linedrawing();
		/*
zx.system.screen.printAt(2,5, "This is a line");
zx.system.screen.print();
zx.system.screen.tab(5);
zx.system.screen.tab(2);
zx.system.screen.print("third", zx.SEMICOLON);
zx.system.screen.print("4");
*/


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
