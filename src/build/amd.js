(function(root, factory) {
	/* global exports, module, define, require*/
	if (typeof exports === "object") {
		module.exports = factory(require("underscore"), require("jquery"), require("handlebars"), require("backbone"));
	} else if (typeof define === "function" && define.amd) {
		define(["underscore", "jquery", "handlebars", "backbone"], factory);
	}
}(this, function(_, $, Handlebars, Backbone) {
	/* jshint unused:false */
	/* global GUI */
	//= ../gui.js
	return GUI;
}));