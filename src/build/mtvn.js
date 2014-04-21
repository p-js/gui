(function(root, factory) {
	/* global MTVNPlayer*/
	if (typeof MTVNPlayer === "object") {
		// GUI is loaded in to the page separately, so we have to go
		// through a package manager.
		var r = MTVNPlayer.require;
		root.GUI = factory(r("_"), r("$"), r("Handlebars"), r("Backbone"));
	}
}(this, function(_, $, Handlebars, Backbone) {
	/* jshint unused:false */
	/* global GUI */
	//= ../gui.js
	return GUI;
}));