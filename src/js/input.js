/**
 * 
 * @constructor
 */
zx.input = function(y, x, placeholder) {
	this.x = x;
	this.y = y;
	this.text = "";
	this.maxlength = 12;
	this.focused = false;
	this.password = false;
	this.surround = true;
	this.cursor = this.text.length;	// indicates the character index after the cursor
	this.placeholder = placeholder || "";
}

zx.input.prototype.setPassword = function(ispassword) {
	this.password = (ispassword == undefined) ? true : ispassword;
}

zx.input.prototype.setSurround = function(showit) {
	this.surround = (showit == undefined) ? true : showit;
}

zx.input.prototype.focus = function() {
	this.focused = true;
}

zx.input.prototype.unfocus = function() {
	this.focused = false;
}

zx.input.prototype.onClick = function(mx, my) {
	var pos = this.getTextPosition(mx, my);
	if (pos.inside) {
		this.focus();
		this.cursor = pos.xpos;
	} else {
		this.unfocus();
	}
}

zx.input.prototype.inject = function(keypress) {
	switch(keypress) {
		case SGX_KEY_BACKSPACE:
			if (this.cursor) {
				var before = this.text.substr(0, this.cursor);
				var after = this.text.substr(this.cursor);
				if (before.length) {
					before = before.substr(0, before.length-1);
				}
				this.text = before + after;
				this.cursor = before.length;
			}
			return;

		case SGX_KEY_DELETE:
			var before = this.text.substr(0, this.cursor);
			var after = this.text.substr(this.cursor);
			after = after.substr(1);
			this.text = before + after;
			return;

		case SGX_KEY_LEFT:
			if (this.cursor) {
				--this.cursor;
			}
			return;

		case SGX_KEY_RIGHT:
			if (this.cursor < this.text.length) {
				++this.cursor;
			}
			return;

		case SGX_KEY_TAB:
			this.unfocus();
			$(this).trigger('tab',  [this.text]);
			return;

		case SGX_KEY_RETURN:
			this.unfocus();
			$(this).trigger('enter',  [this.text]);
			return;
	}

	if (keypress < SGX_KEY_SPACE || keypress > SGX_KEY_z) {
		return;
	}

	if (this.text.length == this.maxlength) {
		return;
	}

	var before = this.text.substr(0, this.cursor);
	var after = this.text.substr(this.cursor);
	
	this.text = before + zx.chr$(keypress) + after;
	this.cursor++;
}

zx.input.prototype.updateKeyscan = function() {
	if (!this.focused) {
		return;
	}

	for(var k=8;k<128;++k) {
   		if (sgx.input.Engine.get().isKeyboardKeyPressed(k)) {
    		this.inject(k);
    		// Flush the keyboard/mouse buffers so that the same key can't trigger two things
    		// e.g. the enter doesn't trigger two input boxes in succession.
    		sgx.input.Engine.get().postUpdate(0);
   		}
	}
	
}


zx.input.prototype.draw = function() {
	this.drawText();

	if (this.surround) {
		this.drawSurround();
	}
}

zx.input.prototype.drawText = function() {
	zx.system.screen.bright(false).flash(false)	;

	if (this.text.length == 0) {
		zx.system.screen.paper(zx.spectrum.WHITE).ink(zx.spectrum.BLUE);
		zx.system.screen.printAt(this.y, this.x, this.placeholder);
	} else {
		zx.system.screen.paper(zx.spectrum.WHITE).ink(zx.spectrum.BLACK);
		var before = this.text.substr(0, this.cursor);
		var after = this.text.substr(this.cursor);

		if (this.password) {
			before = new Array(1+before.length).join("*");
			after = new Array(1+after.length).join("*");
		}

		zx.system.screen.printAt(this.y, this.x, before);
		zx.system.screen.printAt(this.y, this.x + before.length + (this.focused?1:0), after);

		if (this.focused) {
			zx.system.screen.paper(zx.spectrum.BLACK).ink(zx.spectrum.WHITE);
			zx.system.screen.printAt(this.y, this.x + before.length, "L");
		}
	}
}

zx.input.prototype.drawSurround = function() {
	// A box drawn with mosiac/block graphics
	var x = this.x;
	var y = this.y;
	var x2 = x + this.maxlength + 1;

	zx.system.screen.paper(zx.spectrum.WHITE).ink(zx.spectrum.RED);
	zx.system.screen.bright(this.focused);

	zx.system.screen.printAt(y-1, x-1, zx.chr$(139));
	zx.system.screen.printAt(y, x-1, zx.chr$(138));
	zx.system.screen.printAt(y-1, x2, zx.chr$(135));
	for(var i=0;i<this.maxlength+1;++i) {
		zx.system.screen.printAt(y-1, i+x, zx.chr$(131));
		zx.system.screen.printAt(y+1, i+x, zx.chr$(140));
	}
	zx.system.screen.printAt(y+1, x-1, zx.chr$(142));
	zx.system.screen.printAt(y, x2, zx.chr$(133));
	zx.system.screen.printAt(y+1, x2, zx.chr$(141));
}

zx.input.prototype.getTextPosition = function(screenx, screeny) {
	var sx1 = zx.system.toX((this.x - 1) * 8);
	var sx2 = zx.system.toX((this.x + this.maxlength + 2) * 8);
	var sy1 = zx.system.toY((this.y - 1) * 8);
	var sy2 = zx.system.toY((this.y + 2) * 8);

	if (screenx >= sx1 && screenx < sx2 && screeny >= sy1 && screeny < sy2) {
		var tx = (screenx - sx1) / (8 * zx.system.scale);
		tx = sgxFloor(tx) - 1;	// to avoid the left edge
		tx = sgxRange(tx, 0, this.text.length);
		return {inside:true, xpos:tx};
	}

	return {inside:false};
}

zx.input.prototype.isInside = function(screenx, screeny) {
	return this.getTextPosition(screenx, screeny).inside;
}


zx.input.prototype.update = function(telaps) {
	if (sgx.input.Engine.get().mouseLeft.m_bPressed) {
		this.onClick(sgx.input.Engine.get().getMouseX(), sgx.input.Engine.get().getMouseY());
	}

	// Note: keys are only processed by focused input widgets
	this.updateKeyscan();
}
