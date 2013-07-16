/* exported GUI */
/* global MTVNPlayer*/
var GUI = function(require) {
	// Handlebars is provided in the mtvn-util package.
	// GUI is loaded in to the page separately, so we have to go 
	// through a package manager.
	// If we compile it in, we could use a scoped var. 
	/* jshint unused:false */
	var Handlebars = require("Handlebars"),
		$ = require("$"),
		_ = require("_"),
		Backbone = require("Backbone");
	//= template.js
	//= ad-display.js
	//= controls
	/* global AdDisplay, Controls, Events */
	return {
		AdDisplay: AdDisplay,
		Controls: Controls,
		Events: Events,
		version: "<%=version%>",
		build: "<%=build%>"
	};
}(MTVNPlayer.require);