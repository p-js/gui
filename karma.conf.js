/* jshint node:true */
module.exports = function(config) {
	config.set({
		// very project specific
		files: [
			"node_modules/chai/chai.js",
			"test/js/zepto.js",
			"components/underscore/underscore.js",
			"components/backbone/backbone.js",
			"components/handlebars/handlebars.runtime.js",
			"dist/gui.js",
			"test/test-time-display.js"
		]
	});
};
