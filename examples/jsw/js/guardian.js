

function jswGuardian(number, base_sprite, position) {
	this.pointer = 40960 + number * 8;

	var idx = this.pointer;
	var attributes = gVars.jsw.getByte(idx + 1);
	this.anim_frame_mask = (attributes >> 5) & 0x7;

	this.bidirectional = this.anim_frame_mask == 7;
	
	var page = gVars.jsw.getByte(idx + 5);
	var offset = 256 * page;
	offset += base_sprite * 32;
	offset = gVars.jsw.getOffset(offset);

	//           0,1,2,3,4,5,6,7
	var frames= [1,2,2,4,4,4,4,8];
	this.num_frames = frames[this.anim_frame_mask];
	this.texture = [];
	for(var i=0;i<frames[this.anim_frame_mask];++i) {
		this.texture[i] = zx.Texture.create16x16(gVars.jsw.data, offset);
		offset += 32;
	}
	

	this.attr = new zxAttribute();
	this.attr.setBright(attributes & 0x04);
	this.attr.setInk(attributes & 0x07);
}

jswGuardian.HORIZONTAL = 1;
jswGuardian.VERTICAL = 2;
jswGuardian.ROPE = 3;

jswGuardian.create = function(number, base_sprite, position) {
	var idx = 40960 + number * 8;
	var type = (gVars.jsw.getByte(idx) & 0x03);

	switch(type) {		
		case 0x01:
			return new jswGuardianHorizontal(number, base_sprite, position);
		case 0x02:
			return new jswGuardianVertical(number, base_sprite, position);
		case 0x03:
			return new jswGuardianRope(number, base_sprite, position);
	}
	// (technically assertion)
	return new jswGuardian(number, base_sprite, position);
}

jswGuardian.prototype.draw = function(surface, ox, oy) {
	zx.system.drawWith(this.texture[this.frame], this.attr, this.x + ox, this.y + oy);
}

jswGuardian.prototype.update = function(telaps) {
}

