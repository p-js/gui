/* global MTVNPlayer, $, _*/
/* jshint devel:true */
function createGUI(options, target, GUI) {
	var controls = new(GUI.Controls)(options),
		Events = GUI.Events,
		buffer = 0,
		bufferInterval = setInterval(function() {
			buffer += 1;
			var newBuff = controls.getPlayhead() + buffer;
			controls.setBuffered(newBuff);
		}, 250),
		playheadInterval;
	controls.$el.appendTo($(target));
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
	controls.on(Events.REWIND, function() {
		console.log("on rewind");
	});
	controls.on(Events.VOLUME, function(event) {
		console.log("on volume", event.data);
	});
	controls.on(Events.MUTE, function() {
		console.log("on mute");
	});
	controls.on(Events.GO_LIVE, function() {
		console.log("go live");
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
}
MTVNPlayer.loadPackages({
	"pjs-gui": {
		url: "../mtvn.js"
	}
}, _.partial(createGUI, {
	playing: false,
	isDVR: true,
	ccEnabled: true
}, "#controls"));

// MTVNPlayer.loadPackages({
// 	"pjs-gui": {
// 		url: "../mtvn.js"
// 	}
// }, _.partial(createGUI, {
// 	playing: false,
// 	isDVR: true,
// 	showVolume: true,
// 	showVolumeSlider: true,
// 	ccEnabled: true
// }, "#controls2"));

// MTVNPlayer.loadPackages({
// 	"pjs-gui": {
// 		url: "../mtvn.js"
// 	}
// }, _.partial(createGUI, {
// 	playing: false,
// 	showVolume: true,
// 	showVolumeSlider: true,
// 	ccEnabled: true,
// 	isLive: true
// }, "#controls3"));

// MTVNPlayer.loadPackages({
// 	"pjs-gui": {
// 		url: "../mtvn.js"
// 	}
// }, _.partial(createGUI, {
// 	playing: false,
// 	showVolumeSlider: true,
// }, "#controls4"));
