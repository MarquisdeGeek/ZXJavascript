var gVars = {};
var username;

function SGXPrepare_OS() {
	gVars.scale = 2;
	gVars.status = "";
	gVars.mainSurface = sgxskeleton.init(320*gVars.scale, 240*gVars.scale);
}

function SGXinit() {}
function SGXstart(){
	new zx.spectrum(gVars.mainSurface, gVars.scale);

	var username = zx.system.inputAt(8,10,"Username");
	var password = zx.system.inputAt(12,10,"Password");

	username.focus();
	password.setPassword();

	$(username).on('enter', function(e, text) {
		password.focus();
		return false;
	});

	$(password).on('enter', function(e, text) {
		gVars.status = text == "password" ? "Welcome aboard!" : "Access  denied!";
		return false;
	});
}

function SGXdraw() {
	zx.system.screen.border(zx.spectrum.BLUE);
	zx.system.screen.paper(zx.spectrum.YELLOW).cls();
	zx.system.draw();

	zx.system.screen.paper(zx.spectrum.WHITE).ink(zx.spectrum.RED).flash(true);
	zx.system.screen.printAt(15, 9, gVars.status);
}

function SGXupdate(telaps) {
	zx.system.update(telaps);
}
