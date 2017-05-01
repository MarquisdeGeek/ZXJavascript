zx.TO = "TO";
zx.SEMICOLON = ';';

zx.bin = function(binary) {
	if (binary.substring(0,1) == "%") {
		binary = binary.substring(1);
	}
	return parseInt(binary, 2);
}

zx.hex = function(hex) {
	if (hex.substring(0,2) == "0x" || hex.substring(0,2) == "0X") {
		hex = hex.substring(2);
	} else if (hex.substring(0,1) == "$" || hex.substring(0,1) == "#") {
		hex = hex.substring(1);
	}
	return parseInt(binary, 16);
}

zx.pause = function(seconds) {
// was 'number of frames of TV signal'
	var currentTime = new Date().getTime();

	while (currentTime + 1000*seconds >= new Date().getTime()) {
		// nop
	}
}

zx.inkey$ = function() {
// @todo
	return "";
}

zx.copy = function() {
	// @TODO Grab surface and upload to imgur
}


