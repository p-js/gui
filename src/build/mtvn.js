(function(root, factory) {
	/* global MTVNPlayer*/
	if (typeof MTVNPlayer === "object") {
		MTVNPlayer.require(["_", "$", "handlebars", "backbone", "pjs-logger"], function() {
			MTVNPlayer.provide("@@package-name", factory.apply(null, arguments));
		});
	}
}(this, function(_, $, Handlebars, Backbone, Logger) {
	/* jshint unused:false */
	/* global GUI */
	//= ../gui.js
	return GUI;
}));
