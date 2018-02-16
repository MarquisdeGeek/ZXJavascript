
zx.code = function(character) {
	return sgxASCII(character);
}

zx.chr$ = function(code) {
	return sgxToCharacter(code);
}

zx.inkey = function() {
	return zx.lastInkey;
}

zx.inkey$ = function() {
	return zx.chr$(zx.lastInkey);
}

zx.len = function(v) {
	return sgxStrlen(v);
}


zx.val = function(v) {
	return sgxAtoi(v);
}

zx.val$ = function(v) {
	return "" + sgxAtoi(v);
}

zx.str$ = function(v) {
	return sgxToCharacter(v);
}



zx.$ = function(value, a, b, c) {
	// An equivalent to RESULT = VAR$(x TO y) where x and y are optional
	
	// If only the var is given, we probably want to just return the var
	// as it doesn't make sense
	if (a === undefined) {
		return value;
	}


	// First param is TO, so this means 'start from the beginning'
	if (a === zx.TO) {
		first = 0;
		if (b === undefined) {		// $(v,TO) - i.e. all of it
			return value;
		} else {					// $(v,TO,4) - LEFT$
			return value.substr(0, b);
		}
	} else {
		if (b === undefined) {		// $(v,1) - single character
			return value.substr(a, 1);
		} else if (b != zx.TO) {	// $(v,1,3) - non-standard, but assume range
			return value.substr(a, b-a);
		} else if (c === undefined) {	// $(v,1,TO)	- 1st character given
			return value.substr(a);
		} else {					// $(v,1,TO,3)	- 1st & last characters given
			return value.substr(a, c-a);
		}
	}

	// assert
	return "";
}

