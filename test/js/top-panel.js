/* global GUI, $ */
/* jshint devel:true */
var TopView = GUI.TopView;
var tp = new TopView({
	metadata: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
	share: ["facebook", "twitter", "email"]
});
tp.on(GUI.Events.SHARE, function(event) {
	console.log("top panel 1 share", event.data);
});
tp.on(GUI.Events.FULLSCREEN, function() {
	console.log("top panel 1 fullscreen");
});
$("#top-panel").append(tp.$el);
var tp = new TopView({
	metadata: "Lorem ipsum dolor sit amet.",
	share: ["facebook", "twitter", "email", "made up value"],
	playhead: 5,
	duration: 360
});
tp.on(GUI.Events.SHARE, function(event) {
	console.log("top panel 2 share", event.data);
});
tp.on(GUI.Events.FULLSCREEN, function() {
	console.log("top panel 2 fullscreen");
});
$("#top-panel2").append(tp.$el);
