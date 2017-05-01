

zx.abs = function(v) {
	return sgxAbs(v);
}

zx.acs = function(v) {
	return sgxACos(v);
}

zx.asn = function(v) {
	return sgxASin(v);
}

zx.atn = function(v) {
	return sgxAtan(v);
}


// Spectrum only!?
zx.code = function(v) {
	if (v === undefined || v == '') {
		return 0;
	}
	return sgxASCII(v[0]);
}

zx.cos = function(v) {
	return sgxCos(v);
}


zx.ln = function(v) {
// @todo
	return sgxLn(v);
}

zx.randomize = function(v) {
// @todo
	sgxRand(v === undefined ? 0:v);
}

zx.rnd = function() {
	return sgxRand();
}

zx.sgn = function(v) {
	return sgxSgn(v);
}

zx.sqr = function(v) {
	return sgxSqr(v);
}

zx.sin = function(v) {
	return sgxSin(v);
}

zx.pi = function() {
	return SGX_PI;
}

zx.int = function(v) {
	return sgxFloor(v);
}

zx.exp = function(v) {
	// @todo : calculate e ^ v
   return sgxExp(v);
}


