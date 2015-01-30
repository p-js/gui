/* exported GUI, Templates */
// Handlebars is provided the pjs/player project.
// GUI is loaded in to the page separately, so we have to go 
// through a package manager.
// templates are written to "this", here we're scoping it.
var Templates = (function() {
	//= ../compiled-templates
	return this.Templates;
}).apply({});
//= events.js
//= time.js
//= buttons
//= base-view.js
//= ad-display
//= top
//= center-controls
//= share
//= bottom
//= main.js
/* global Main, AdDisplay, Time, BottomView, Events, TopView */
var GUI = Main;
GUI.version = "@@version";
GUI.build = "@@timestamp";
GUI.Time = Time;
GUI.AdDisplay = AdDisplay;
GUI.BottomView = BottomView;
GUI.TopView = TopView;

GUI.Events = Events;
