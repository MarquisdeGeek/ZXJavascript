var gVars = {};

function SGXPrepare_OS() {
	gVars.scale = 1;
	gVars.mainSurface = sgxskeleton.init(320*gVars.scale, 240*gVars.scale);
}

function SGXinit() {

}

function SGXstart(){
	new zx.spectrum(gVars.mainSurface, gVars.scale);

	zx.system.screen.paper(zx.spectrum.WHITE).ink(zx.spectrum.BLUE).printAt(1, 10, "Frere Jacques");

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
}

function SGXdraw() {
}

function SGXupdate(telaps) {
	zx.system.update(telaps);

	if (!gVars.playedYet) {
		// Note: this is not a good way to write music, since the beep command was (and is)
		// synchronous, and blocks all other code until it is complete.
		zx.beep(1,0).beep(1,2).beep(0.5,3).beep(0.5,2).beep(1,0);
		zx.beep(1,0).beep(1,2).beep(0.5,3).beep(0.5,2).beep(1,0);
		zx.beep(1,3).beep(1,5).beep(2,7);
		zx.beep(1,3).beep(1,5).beep(2,7);
		zx.beep(0.75,7).beep(0.25,8).beep(0.5,7).beep(0.5,5).beep(0.5,3).beep(0.5,2).beep(1,0);
		zx.beep(0.75,7).beep(0.25,8).beep(0.5,7).beep(0.5,5).beep(0.5,3).beep(0.5,2).beep(1,0);
		zx.beep(1,0).beep(1,-5).beep(2,0);
		zx.beep(1,0).beep(1,-5).beep(2,0);

		gVars.playedYet = true;
	}
}
