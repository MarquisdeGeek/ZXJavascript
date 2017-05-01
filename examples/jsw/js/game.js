function JSWGame()
{


	this.isRunning = true;
	//
	this.data = jswraw;
	this.rom = zx.rom;	// TODO: Move to zx.spectrum
	this.currentRoom = undefined;

	this.gfx = zx.udg(
		zx.bin("%11111111"),
		zx.bin("%10000001"),
		zx.bin("%10011001"),
		zx.bin("%10011001"),
		zx.bin("%11111111"),
		zx.bin("%10111101"),
		zx.bin("%10011001"),
		zx.bin("%11111111")
		);
}

JSWGame.prototype.getByte = function(idx) {
	var offset = this.getOffset(idx);
	return this.data[offset];
}

JSWGame.prototype.getOffset = function(offset) {
	return offset - 16354;
}

JSWGame.prototype.pause = function() {
	this.isRunning = false;
}

JSWGame.prototype.resume = function() {
	this.isRunning = this;
}

JSWGame.prototype.pauseToggle = function() {
	if (this.isRunning) {
		this.pause();
	} else {
		this.resume();
	}
}



JSWGame.prototype.stepAdvance = function() {
	this.currentRoom.update(1/60);
}

JSWGame.prototype.update = function(t) {
	if (this.isRunning) {
		this.currentRoom.update(t);	
	}
	
}



JSWGame.prototype.draw = function(surface, ox, oy) {
	this.currentRoom.draw(surface, ox, oy);
}

JSWGame.prototype.getRoom = function(idx) {
	/*
	192	0	49152	Room 0: The Off Licence (teleport: 9)
	193	0	49408	Room 1: The Bridge (teleport: 19)
	*/

	var offset = this.getOffset(49152 + idx*(49408-49152));
	return new jswRoom(idx, this.data, offset);
};
JSWGame.ABOVE = 1;
JSWGame.BELOW = 2;
JSWGame.RIGHT = 3;
JSWGame.LEFT  = 4;
//@todo use this in enable/disable buttons
//@todo make buttons zxpstrm colours (with bright/normal as enable/disable)

JSWGame.prototype.getNeighbouringRoom = function(direction) {
	if (this.currentRoom) {
		return this.currentRoom.rooms[direction];
	}
	return undefined;
}

JSWGame.prototype.switchTo = function(room_idx) {
	if (this.currentRoom) {
		var idx = this.currentRoom.rooms[room_idx];

		if (idx === undefined) {
			return;	// invalid
		}
		room_idx = idx;
	}

	gVars.jswMap = gVars.jsw.getRoom(room_idx);
	this.currentRoom = gVars.jswMap;
}
	

