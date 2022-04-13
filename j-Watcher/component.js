COMPONENT('watcher', 'delay:0', function(self, config) {

	var fn = NOOP;
	var delay = null;
	var datasource = null;

	var exec = function(path, type) {
		delay = null;
		fn.call(self, self.get(), path, type, self.element, self, datasource);
	};

	self.readonly();

	self.make = function() {
		var scr = self.find('scri' + 'pt').eq(0);
		var js = scr.html();
		if (js) {

			if (self.scope) {
				js = js.replace(/\?(.|\/)+/g, function(val) {
					return val.replace(/\?/g, self.scope.path);
				});
			}

			fn = new Function('value', 'path', 'type', 'element', 'component', 'datasource', js);
			scr.remove();
		}

		config.datasource && self.datasource(config.datasource, function(path, value) {
			datasource = value;
			if (config.delay) {
				delay && clearTimeout(delay);
				delay = setTimeout(exec, config.delay, '', -1);
			} else
				exec('', -1);

		});
	};

	self.destroy = function() {
		fn = null;
		datasource = null;
	};

	self.setter = function(value, path, type) {
		if (config.delay) {
			delay && clearTimeout(delay);
			delay = setTimeout(exec, config.delay, value, path, type);
		} else
			fn.call(self, value, path, type, self.element, self, datasource);
	};

});