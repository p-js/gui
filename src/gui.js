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
//= states.js
//= util
//= ad-view
//= top
//= center-controls
//= share
//= bottom
//= main.js
/* global Main, AdView, Time, States, BottomView, Events, TopView, ToggleableButton */
var GUI = Main;
GUI.version = "@@version";
GUI.build = "@@timestamp";
GUI.Time = Time;
GUI.AdView = AdView;
GUI.BottomView = BottomView;
GUI.TopView = TopView;
GUI.ToggleableButton = ToggleableButton;
GUI.Events = Events;
GUI.States = States;
