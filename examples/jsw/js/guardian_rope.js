
function jswGuardianRope(number, base_sprite, position) {
	jswGuardian.prototype.constructor.call(this, number, base_sprite, position);
}

Inheritance_Manager.extend(jswGuardianRope, jswGuardian);

