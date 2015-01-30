/* global GUI, $, _, FullScreen */
/* jshint devel:true */
var gui = new GUI({
	playing: false,
	showVolume: true,
	ccEnabled: true,
	metadata: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
	share: ["facebook", "twitter", "email"],
	durations: [60, 30, 60, 30, 30]
});
_.each(GUI.Events, function(eventType) {
	gui.on(eventType, function(event) {
		console.log("on:" + event.type, event.data);
	});
});
FullScreen.on(FullScreen.Events.FULL_SCREEN_CHANGE, function(event) {
	console.debug("gui.js:17 ");
	var $gui = $("#gui");
	if (event.data) {
		$gui.width("100%").height("100%");
	} else {
		$gui.width(640).height(420);
	}
});
gui.on(GUI.Events.FULLSCREEN, function() {
	var $gui = $("#gui");
	FullScreen.requestFullScreen($gui[0]);
});
gui.$el.appendTo($("#gui"));
