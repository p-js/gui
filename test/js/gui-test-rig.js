/* global GUI, $, _, FullScreen */
/* jshint devel:true */
var gui = new GUI({
		playing: false,
		ccEnabled: true,
		adView: {
			buttonLink: "#",
			time: 30
		},
		topView: {
			metadata: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
		},
		share: ["facebook", "twitter", "email"],
		durations: [60, 30, 60, 30, 30]
	}),
	buffer = 0,
	bufferInterval = setInterval(function() {
		buffer += 1;
		var newBuff = gui.bottomView.getPlayhead() + buffer;
		gui.setBuffered(newBuff);
	}, 250),
	goFullScreen = function($el) {
		$el.css({
			position: "fixed",
			left: 0,
			top: 0,
			zIndex: 2147483645,
			width: window.innerWidth,
			height: window.innerHeight
		});
	},
	exitFullScreen = function($el) {
		$el.css({
			position: "relative",
			zIndex: "auto"
		}).width(640).height(420);
	};
_.each(GUI.Events, function(eventType) {
	gui.on(eventType, function(event) {
		switch (event.type) {
			case "seek":
				buffer = 0;
				break;
			default:
				break;
		}
		console.log("on:" + event.type, event.data);
	});
});
FullScreen.on(FullScreen.Events.FULL_SCREEN_CHANGE, function(event) {
	var $gui = $("#gui");
	if (event.data) {
		$gui.width("100%").height("100%");
	} else {
		$gui.width(640).height(420);
	}
});
gui.on(GUI.Events.FULLSCREEN, function() {
	var $gui = $("#gui");
	if (!FullScreen.requestFullScreen($gui[0])) {
		if ($gui.width() === 640) {
			goFullScreen($gui);
		} else {
			exitFullScreen($gui);
		}
	}
});
$("#gui").click(function() {
	gui.show();
});
gui.$el.appendTo($("#gui"));
_.delay(function() {
	gui.setDurations([60, 90, 60, 30]);
}, 3200);
$("#hide").click(function() {
	gui.hide();
});
$("#show").click(function() {
	gui.show();
});
$("#killbuffer").click(function() {
	clearInterval(bufferInterval);
});
$("#seekTo").click(function() {
	buffer = 0;
	gui.setPlayhead(parseFloat($("#seek-value").val(), 10));
});
$("#setDuration").click(function() {
	buffer = 0;
	var durations = _.map($("#duration-value").val().split(","), function(duration) {
		return parseInt(duration, 10);
	});
	gui.setDurations(durations);
});
