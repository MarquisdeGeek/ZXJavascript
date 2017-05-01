var gVars = {};

function SGXPrepare_OS() {
	gVars.scale = 2;
	gVars.mainSurface = sgxskeleton.init(320*gVars.scale, 240*gVars.scale);
}

function SGXinit() {}
function SGXstart(){
	new zx.spectrum(gVars.mainSurface, gVars.scale);
}

//
// Original Spectrum BASIC version from the manual...
//
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


//
// ZX Javascript version
//
gVars.c = 1;
gVars.x1 = gVars.y1 = 0;

function SGXdraw() {
	// Always draw zx.system
	zx.system.draw();

	// Then draw our stuff (note the screen doesn't clear each frame)
	gVars.x2 = zx.int(zx.rnd() * 256);
	gVars.y2 = zx.int(zx.rnd() * 176);

	zx.system.screen.ink(gVars.c).draw(gVars.x2-gVars.x1, gVars.y2-gVars.y1);

	if (++gVars.c == 8) {
		gVars.c = 1;
	}
	gVars.x1 = gVars.x2;
	gVars.y1 = gVars.y2;
}

function SGXupdate(telaps) {
	zx.system.update(telaps);
}

