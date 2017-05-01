

function jswRoom(roomIndex, data, base) {
	
	this.roomIndex = roomIndex;

	this.speed = 0.01;
	this.timecum = 0;

	/*
	The first 128 bytes are copied to 32768 and define the room layout. 
	Each bit-pair (bits 7 and 6, 5 and 4, 3 and 2, or 1 and 0 of each 
	byte) determines the type of tile (background, floor, wall or nasty) 
	that will be drawn at the corresponding location.
	*/
	this.tiles = [];
	var idx = base - 1;
	var shift = 0;
	var mask;
	for(var y=0;y<16;++y) {
		for(var x=0;x<32;++x) {
			if (shift == 0) {
				shift = 6;
				++idx;
			} else {
				shift -= 2;
			}
			//
			this.tiles.push((data[idx]>>shift) & 0x3);
		}
	}
	++idx;	// because we don't capture this on the final loop iteration

	// The next 32 bytes are copied to 32896 and specify the room name.
	this.name = "";
	for(var i=0;i<32;++i) {
		this.name += sgxToCharacter(data[idx]);
		++idx;
	}

	/*
	The next 54 bytes are copied to 32928 and contain the attributes 
	and graphic data for the tiles used to build the room.
	(54 = 8 bytes per gfx, 6 gfx)
	*/
	this.textures = [];
	this.textureAttributes = [];
	for(var textureIndex = 0;textureIndex<6;++textureIndex) {

		var texture = zx.Texture.create8x8(data, idx+1);
		this.textures.push(texture);
		this.textureAttributes.push(new zxAttribute(data[idx]));

		idx += 9;
	}	

	this.conveyor = new jswConveyor(data, idx);
	this.ramp = new jswRamp(data, idx+4);
	this.border = data[idx+8];

	idx += 8 + 1 + 2;

	this.itemGfx = zx.Texture.create8x8(data, idx);
	idx += 8;

	this.rooms = [];
	this.rooms[JSWGame.LEFT] = data[idx++];
	this.rooms[JSWGame.RIGHT] = data[idx++];
	this.rooms[JSWGame.ABOVE] = data[idx++];
	this.rooms[JSWGame.BELOW] = data[idx++];

	if (this.roomIndex == 1) {	// the only room that legimately joins onto 0
		this.rooms[JSWGame.ABOVE] = this.rooms[JSWGame.BELOW] = undefined;
	} else {
		this.rooms[JSWGame.LEFT] = this.rooms[JSWGame.LEFT] || undefined;
		this.rooms[JSWGame.RIGHT] = this.rooms[JSWGame.RIGHT] || undefined;
		this.rooms[JSWGame.ABOVE] = this.rooms[JSWGame.ABOVE] || undefined;
		this.rooms[JSWGame.BELOW] = this.rooms[JSWGame.BELOW] || undefined;
	}


	// The next three bytes are copied to 33005, but are not used.
	idx += 3;

	/*
	The next eight pairs of bytes are copied to 33008 and specify 
	the entities (ropes, arrows, guardians) in this room.
	*/
	this.guardians = [];
	for(var i=0;i<8;++i) {
		var type = data[idx];
		var param = data[idx+1];

		switch(type) {

			default:
				this.guardians.push(jswGuardian.create(type, param>>5, (param&0x1f)));
				break;

			case 0:
			case 3:
			case 255:
				break;
		}

		idx += 2;
	}

	// Iterate the item table, to find ours
	/*
	The location of item N (173<=N<=255) is defined by the pair of 
	bytes at addresses 41984+N and 42240+N. The meaning of the bits 
	in each byte-pair is as follows:
	Bit(s)	Meaning
	15	Most significant bit of the y-coordinate
	14	Collection flag (reset=collected, set=uncollected)
	8-13	Room number
	5-7	Least significant bits of the y-coordinate
	0-4	x-coordinate*/
	this.itemList = [];

	for(var n=173;n<=255;++n) {
		var addr1 = 41984 + n;
		var addr2 = 42240 + n;
		var item1 = gVars.jsw.getByte(addr1);
		var item2 = gVars.jsw.getByte(addr2);

		var collected = item1 & 0x40;
		var room = (item1 & 0x3f);
		var y = (((item1 & 0x80)>>4) + (item2>>5)) * 8;
		var x = (item2 & 0x1f) * 8;

		if (room == roomIndex) {
			this.itemList.push(new jswItem(this.itemGfx, x, y, collected));
		}
	}
}

jswRoom.prototype.draw = function(surface, ox, oy) {
	zx.system.setBorderColor(this.border);
	this.drawMap(surface, ox, oy);
	this.drawItems(surface, ox, oy);
	this.drawName(surface, ox, oy);
}

jswRoom.prototype.drawMap = function(surface, ox, oy) {

	for(var y=0;y<16;++y) {
		for(var x=0;x<32;++x) {
			var idx = this.tiles[x + y*32];

			zx.system.drawWith(this.textures[idx], this.textureAttributes[idx], ox + x*8, oy + y*8);
		}
	}
}

jswRoom.prototype.blank = function(surface, x, y) {
return;
	zx.system.screen.ink(zx.spectrum.WHITE).paper(zx.spectrum.BLACK).printAt(y/8, x/8, "  ");
	zx.system.screen.ink(zx.spectrum.WHITE).paper(zx.spectrum.BLACK).printAt(y/8+8, x/8, "  ");
return;
	surface.setFillTexture(gVars.speccy.getCharacterTexture(32).paper);
	surface.setFillColour(sgxColorRGBA.Black);
	surface.setFillColour(sgxColorRGBA.White);
	surface.fillRect(x, y, x+16, y+16);
zx.system.drawWith(gVars.speccy.getCharacterTexture(32), this.attr, x, y);
}


jswRoom.prototype.eraseItems = function(surface, ox, oy) {
	for(var i=0;i<this.itemList.length;++i) {
		this.blank(surface, this.itemList[i].x + ox, this.itemList[i].y + oy);
	}

	// Dynamics
	//this.conveyor.draw(surface, this.textures[5], ox, oy);
	//this.ramp.draw(surface, this.textures[4], ox, oy);

	// Guardians
	for(var i=0;i<this.guardians.length;++i) {
		this.blank(surface, this.guardians[i].x + ox, this.guardians[i].y + oy);
	}
}

jswRoom.prototype.drawItems = function(surface, ox, oy) {
	// Items
	for(var i=0;i<this.itemList.length;++i) {
		this.itemList[i].draw(surface, ox, oy);
	}

	// Dynamics
	this.conveyor.draw(surface, this.textures[5], ox, oy);
	this.ramp.draw(surface, this.textures[4], ox, oy);

	// Guardians
	for(var i=0;i<this.guardians.length;++i) {
		this.guardians[i].draw(surface, ox, oy);
	}
}

jswRoom.prototype.drawName = function(surface, ox, oy) {
	zx.system.screen.ink(zx.spectrum.WHITE).paper(zx.spectrum.BLACK).printAt(16+oy/8, 0+ox/8, this.name);
}

jswRoom.prototype.update = function(telaps) {
	this.timecum += telaps;
	if (this.timecum < this.speed) {
		return;
	}
	this.timecum = 0;

	for(var i=0;i<this.guardians.length;++i) {
		this.guardians[i].update(telaps);
	}
}

