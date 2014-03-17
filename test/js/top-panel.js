/* global GUI, $ */
/* jshint devel:true */
var TopPanel = GUI.TopPanel;
var tp = new TopPanel({
	metadata: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
	share: ["facebook", "twitter", "email"]
});
tp.on(TopPanel.Events.SHARE, function(id) {
	console.log("top panel 1 share", id);
});
$("#top-panel").append(tp.$el);
var tp = new TopPanel({
	metadata: "Lorem ipsum dolor sit amet.",
	share: ["facebook", "twitter", "email", "made up value"]
});
tp.on(TopPanel.Events.SHARE, function(id) {
	console.log("top panel 2 share", id);
});
$("#top-panel2").append(tp.$el);