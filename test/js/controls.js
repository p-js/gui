/* global MTVNPlayer, $, _*/
/* jshint devel:true */
MTVNPlayer.loadPackages({
	"GUI": {
		url: "/dist/amd.mtvn.js",
		shim: true,
		exports: "GUI"
	}
}, function(GUI) {
	var controls = new(GUI.Controls)({
		playing: false,
		showVolume: true,
		ccEnabled: true
	}),
		Events = GUI.Events,
		buffer = 0,
		bufferInterval = setInterval(function() {
			buffer += 1;
			var newBuff = controls.getPlayhead() + buffer;
			controls.setBuffered(newBuff);
		}, 250),
		playheadInterval;
	controls.$el.appendTo($("#controls"));
	controls.on(Events.PLAY, function() {
		console.log("on play");
		playheadInterval = setInterval(function() {
			var currentPlayhead = controls.getPlayhead();
			controls.setPlayhead(currentPlayhead += 1);
		}, 333);
	});
	controls.on(Events.PAUSE, function() {
		clearInterval(playheadInterval);
		console.log("on pause");
	});
	controls.on(Events.FULLSCREEN, function() {
		console.log("on fullscreen");
	});
	controls.on(Events.MUTE, function() {
		console.log("on mute");
	});
	controls.on(Events.UNMUTE, function() {
		console.log("on unmute");
	});
	controls.on(Events.SEEK, function(event) {
		console.log("on seek", event);
		buffer = 0;
	});
	controls.on(Events.CC, function() {
		console.log("toggle CC");
	});
	_.delay(function() {
		controls.setDurations([1000]);
	}, 1200);
	$("#hide").click(function() {
		controls.hide();
	});
	$("#show").click(function() {
		controls.show();
	});
	$("#killbuffer").click(function() {
		clearInterval(bufferInterval);
	});
	$("#seekTo").click(function() {
		buffer = 0;
		controls.setPlayhead(parseFloat($("#seek-value").val(), 10));
	});
	$("#setDuration").click(function() {
		buffer = 0;
		controls.setDuration(parseFloat($("#duration-value").val(), 10));
	});
});