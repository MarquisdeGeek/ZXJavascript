/**
 * 
 * @constructor
 */
zx.audio = function(system) {
	this.system = system;
    this.audioCtx = new(window.AudioContext || window.audioContext || window.webkitAudioContext);

    zx.beep = this.beep.bind(this);
}

zx.audio.prototype.beep = function(duration, pitch) {
    // The duration is given in seconds, and the pitch is given in semitones above middle C using negative numbers for notes below middle C.

	var oscillator = this.audioCtx.createOscillator();
    var gainNode = this.audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioCtx.destination);

	var key = pitch + 60;
	var frequency = 440 * Math.pow(2, (key-69) / 12);
    var volume = undefined;
    var callback = undefined;
    var type;

    if (volume){gainNode.gain.value = volume;};
    if (frequency){oscillator.frequency.value = frequency;}
    if (type){oscillator.type = type;}
    if (callback){oscillator.onended = callback;}

    oscillator.start();
    zx.pause(duration * 0.9);
    oscillator.stop();

    zx.pause(duration * 0.1);

    return this;
}
