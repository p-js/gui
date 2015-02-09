(function(root, factory) {
	/* global PJS*/
	if (typeof PJS === "object") {
		PJS.require(["_", "$", "handlebars", "backbone", "pjs-logger"], function() {
			PJS.provide("@@package-name", factory.apply(null, arguments));
		});
	}
}(this, function(_, $, Handlebars, Backbone, Logger) {
	/* jshint unused:false */
	/* global GUI */
	//= ../gui.js
	return GUI;
}));
