COMPONENT('typed', 'typespeed:0;startdelay:0;backspeed:0;smartbackspace:true;shuffle:false;backdelay:700;fadeout:false;fadeoutclass:typed-fade-out;fadeoutdelay:500;loop:false;loopcount:Infinity;showcursor:true;cursorchar:|;autoinsertcss:true;contenttype:html', function(self, config) {

	var typed;

	self.setter = function(value) {

		if (!value.length)
			return;

		if (!(value instanceof Array))
			value = [value];

		typed && typed.destroy();

		var node = config.selector ? self.find(config.selector)[0] : self.dom;

		typed = new Typed(node, {
			strings: value,
			typeSpeed: config.typespeed,
			startDelay: config.startdelay,
			backSpeed: config.backspeed,
			smartBackspace: config.smartbackspace,
			shuffle: config.shuffle,
			backDelay: config.backdelay,
			fadeOut: config.fadeout,
			fadeOutClass: config.fadeoutclass,
			fadeOutDelay: config.fadeoutdelay,
			loop: config.loop,
			loopCount: config.loopcount,
			showCursor: config.showcursor,
			cursorChar: config.cursorchar,
			autoInsertCss: config.autoinsertcss,
			contentType: config.contenttype,
			onComplete: function(typed) {
				self.emit('typed.onComplete', typed, self);
			},
			preStringTyped: function(pos, typed) {
				self.emit('typed.preStringTyped', pos, typed, self);
			},
			onStringTyped: function(pos, typed) {
				self.emit('typed.onStringTyped', pos, typed, self);
			},
			onLastStringBackspaced: function(typed) {
				self.emit('typed.onLastStringBackspaced', typed, self);
			},
			onTypingPaused: function(pos, typed) {
				self.emit('typed.onTypingPaused', pos, typed, self);
			},
			onTypingResumed: function(pos, typed) {
				self.emit('typed.onTypingResumed', pos, typed, self);
			},
			onReset: function(typed) {
				self.emit('typed.onReset', typed, self);
			},
			onStop: function(pos, typed) {
				self.emit('typed.onStop', pos, typed, self);
			},
			onStart: function(pos, typed) {
				self.emit('typed.onStart', pos, typed, self);
			},
			onDestroy: function(typed) {
				self.emit('typed.onDestroy', typed, self);
			}
		});
	};

}, ['https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js']);
