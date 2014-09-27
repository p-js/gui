(function(root, factory) {
	/* global MTVNPlayer*/
	if (typeof MTVNPlayer === "object") {
		MTVNPlayer.require(["_", "$", "handlebars", "backbone"], function() {
			MTVNPlayer.provide("@@package-name", factory.apply(null, arguments));
		});
	}
}(this, function(_, $, Handlebars, Backbone) {
	/* jshint unused:false */
	/* global GUI */
	//= ../gui.js
	return GUI;
}));
