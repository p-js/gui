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