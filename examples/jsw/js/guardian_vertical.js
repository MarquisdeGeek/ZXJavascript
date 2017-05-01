
function jswGuardianVertical(number, base_sprite, position) {
	jswGuardian.prototype.constructor.call(this, number, base_sprite, position);

	var idx = this.pointer;

	this.direction = (gVars.jsw.getByte(idx) & 0x03);

	this.initial_frame = (gVars.jsw.getByte(idx) & 0x60) >> 5;
	this.increment_anim_each_frame = (gVars.jsw.getByte(idx) & 0x10) ? true : false;

	this.ink = gVars.jsw.getByte(idx+1) & 0x07;

	this.min_pos = gVars.jsw.getByte(idx + 6);
	this.max_pos = gVars.jsw.getByte(idx + 7);

	this.initial_position = position*8;// on other axis

	this.init_x = position * 8;
	this.init_y = gVars.jsw.getByte(idx + 3) / 2;

	this.increment = gVars.jsw.getByte(idx + 4);
	if (this.increment >= 128) {	// 2s C. -ve = up
		this.increment = -(256 - this.increment) / 2;
	} else {
		this.increment /= 2;
	}

	this.min_pos /= 2;
	this.max_pos /= 2;

	this.initRoom();
}
Inheritance_Manager.extend(jswGuardianVertical, jswGuardian);

jswGuardianVertical.prototype.update = function(telaps) {

	this.y += this.move_direction;
	if (this.y > this.max_pos) {
		this.move_direction = -this.move_direction;
		this.y += 2*this.move_direction;
	} else if (this.y < this.min_pos) {
		this.move_direction = -this.move_direction;
		this.y += 2*this.move_direction;
	}
	//
	if (this.increment_anim_each_frame) {
		++this.frame;

	} else if (this.anim_pass == 1) {
		++this.frame;
		this.anim_pass = 0;
	} else {
		this.anim_pass = 1;
	}

	if (this.frame >= this.num_frames) {
		this.frame = 0;
	}

}

jswGuardianVertical.prototype.initRoom = function() {
	this.x = this.init_x;
	this.y = this.init_y;
	this.frame = this.initial_frame;

	this.move_direction = this.increment;
	this.anim_pass = 0;
}


