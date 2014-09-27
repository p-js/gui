/* global GUI, $ */
var AdDisplay = GUI.AdDisplay;
$("#ad-gui").append((new AdDisplay()).$el);
$("#ad-gui-2").append((new AdDisplay({
	time: 30
})).$el);
$("#ad-gui-3").append((new AdDisplay({
	time: 30,
	buttonLink: "http://google.com"
})).$el);
$("#ad-gui-4").append((new AdDisplay({
	time: 30,
	isAdClickable: true,
	countdownText: "Other message about ad resuming in {{time}}",
	buttonText: "Aprende mas",
	buttonLink: "http://google.com"
})).$el);
$("#ad-gui-5").append((new AdDisplay({
	buttonLink: "http://google.com",
	messageText: "Other message about ad with no time."
})).$el);
var adDisplay = new AdDisplay({
	buttonLink: "event",
	messageText: "learn more should trigger an event"
});
adDisplay.on(AdDisplay.Events.LEARN_MORE, function() {
	/* jshint devel:true */
	alert("learn more event");
});
$("#ad-gui-6").append(adDisplay.$el);
