/* exported GUI */
/* global _, $, Handlebars, Backbone*/
var GUI = {
	version: "@@version",
	build: "@@timestamp"
};
// Handlebars is provided in the mtvn-util package.
// GUI is loaded in to the page separately, so we have to go 
// through a package manager.
// If we compile it in, we could use a scoped var. 
/* jshint unused:false */
// templates are written to "this", here we're scoping it.
var Templates = (function() {
	//= ../compiled-templates
	return this.Templates;
}).apply({});
//= ad-display
//= top-panel
//= controls
/* global AdDisplay, Controls, Events, TopPanel */
GUI.AdDisplay = AdDisplay;
GUI.Controls = Controls;
GUI.TopPanel = TopPanel;
GUI.Events = Events;

