
function jswGuardianHorizontal(number, base_sprite, position) {
	jswGuardian.prototype.constructor.call(this, number, base_sprite, position);

	var idx = this.pointer;

	this.direction = (gVars.jsw.getByte(idx) & 0x03);

	this.initial_frame = (gVars.jsw.getByte(idx) & 0x60) >> 5;
	this.increment_anim_each_frame = (gVars.jsw.getByte(idx) & 0x10) ? true : false;

	this.ink = gVars.jsw.getByte(idx+1) & 0x07;

	this.min_pos = gVars.jsw.getByte(idx + 6);
	this.max_pos = gVars.jsw.getByte(idx + 7);

	this.initial_position = position;// on other axis
	this.increment = gVars.jsw.getByte(idx) & 0x80 ? 1 : -1;

	this.init_x = position * 8;
	this.init_y = gVars.jsw.getByte(idx + 3) / 2;

	this.min_pos *= 8;
	this.max_pos *= 8;

	this.initRoom();
}

Inheritance_Manager.extend(jswGuardianHorizontal, jswGuardian);

jswGuardianHorizontal.prototype.update = function(telaps) {
	this.x += this.move_direction;
	//
	//
	var new_frame = false;
	if (this.increment_anim_each_frame) {
		new_frame = true;
	} else if (this.anim_pass == 1) {
		new_frame = true;
		this.anim_pass = 0;
	} else {
		this.anim_pass = 1;
	}
	//
	if (new_frame) {
		if (this.move_direction < 0) {// right to left
			++this.x;
			if (--this.frame < 0) {
				this.frame = 3;
				this.x -= 8;
			}

		} else { //left to right
			this.frame = (this.frame & 3) + 1;
			this.frame &= 3;

			if (this.frame == 0) {
				this.x += 6;
			} else {
				this.x -= 1;
			}
			if (this.bidirectional){
				this.frame += 4;
			}
		}
	}
	//
	if (this.x > this.max_pos) {
		this.move_direction = -this.move_direction;
		this.x = this.max_pos;
	} else if (this.x < this.min_pos) {
		this.move_direction = -this.move_direction;
		this.x = this.min_pos;
	}
}

jswGuardianHorizontal.prototype.initRoom = function() {
	this.x = this.init_x;
	this.y = this.init_y;
	this.frame = this.initial_frame;

	this.move_direction = this.increment;
	this.anim_pass = 0;
}


