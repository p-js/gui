/* global GUI, $ */
var AdView = GUI.AdView;
$("body").append((new AdView()).$el);
$("body").append((new AdView({
	time: 30
})).$el);
$("body").append((new AdView({
	time: 30,
	buttonLink: "http://google.com"
})).$el);
$("body").append((new AdView({
	time: 30,
	isAdClickable: true,
	countdownText: "Other message about ad resuming in {{time}}",
	buttonText: "Aprende mas",
	buttonLink: "http://google.com"
})).$el);
$("body").append((new AdView({
	buttonLink: "http://google.com",
	messageText: "Other message about ad with no time."
})).$el);
var adDisplay = new AdView({
	buttonLink: "event",
	messageText: "learn more should trigger an event"
});
adDisplay.on(AdView.Events.LEARN_MORE, function() {
	/* jshint devel:true */
	alert("learn more event");
});
$("body").append(adDisplay.$el);
$("body").append((new AdView({
	time: 30,
	buttonLink: "http://google.com",
	index: 1,
	total: 3
})).$el);
$("body").append((new AdView({
	buttonLink: "http://google.com",
	index: 1,
	total: 3
})).$el);
$("body").append((new AdView({
	buttonLink: "http://google.com",
	index: 0,
	total: 3
})).$el);
$(".pjs-ad-gui").wrap("<div class=\"gui-wrapper\"></div>");
