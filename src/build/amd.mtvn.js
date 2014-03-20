(function(root, factory) {
	/* global exports, module, define, require, MTVNPlayer*/
	if (typeof MTVNPlayer === "object") {
		// GUI is loaded in to the page separately, so we have to go 
		// through a package manager.
		var r = MTVNPlayer.require;
		root.GUI = factory(r("_"), r("$"), r("Handlebars"), r("Backbone"));
	} else if (typeof exports === "object") {
		module.exports = factory(require("lodash"), require("$"), require("Handlebars"), require("Backbone"));
	} else if (typeof define === "function" && define.amd) {
		define(["lodash", "$", "Handlebars", "Backbone"], factory);
	}
}(this, function(_, $, Handlebars, Backbone) {
	/* jshint unused:false */
	/* global GUI */
	//= ../gui.js
	return GUI;
}));