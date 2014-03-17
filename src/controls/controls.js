/* exported Controls */
/* global _, Backbone, $, Events, Slider, PlayPauseButton, VolumeButton, ClosedCaptionButton, Templates*/
var Controls = (function() {
	var CONTROLS_TEMPLATE = Templates["src/controls/template.html"],
		css = {
			slider: "mtvn-controls-slider",
			playPause: "mtvn-controls-play-pause",
			volume: "mtvn-controls-volume",
			cc: "mtvn-controls-cc"
		};
	return Backbone.View.extend({
		tagName: "div",
		className: "mtvn-controls",
		events: {
			"click .mtvn-controls-fullscreen": "onFullscreen"
		},
		initialize: function(options) {
			this.options = options;
			_.bindAll(this, "sendEvent");
			_.extend(this.options, {
				slider: css.slider
			});
			this.render();
		},
		render: function() {
			var options = this.options;
			this.$el.html($(CONTROLS_TEMPLATE(options)));
			// PLAY PAUSE
			this.playPauseButton = new PlayPauseButton({
				el: this.$("." + css.playPause),
				paused: options.paused
			});
			this.listenTo(this.playPauseButton, Events.PLAY, this.sendEvent);
			this.listenTo(this.playPauseButton, Events.PAUSE, this.sendEvent);
			// SLIDER
			this.slider = new Slider({
				el: this.$("." + css.slider),
				playhead: options.playhead,
				durations: options.durations
			});
			this.listenTo(this.slider, Events.SEEK, this.sendEvent);
			// VOLUME
			this.volumeButton = new VolumeButton({
				volume: options.volume,
				el: this.$("." + css.volume)
			});
			this.listenTo(this.volumeButton, Events.MUTE, this.sendEvent);
			this.listenTo(this.volumeButton, Events.UNMUTE, this.sendEvent);
			// CC
			this.closedCaptionButton = new ClosedCaptionButton({
				ccEnabled: options.ccEnabled,
				el: this.$("." + css.cc)
			});
			this.listenTo(this.closedCaptionButton, Events.CC, this.sendEvent);
		},
		setVolume: function(volume) {
			this.volumeButton.setVolume(volume);
		},
		setPaused: function(paused) {
			this.playPauseButton.setPaused(paused);
		},
		getPlayhead: function() {
			return this.slider.playhead;
		},
		setPlayhead: function(playhead) {
			this.slider.setPlayhead(playhead);
		},
		setBuffered: function(buffered) {
			this.slider.setBuffered(buffered);
		},
		setDurations: function(durations) {
			this.slider.setDurations(durations);
		},
		sendEvent: function(event) {
			event.target = this;
			this.trigger(event.type, event);
		},
		onFullscreen: function() {
			this.sendEvent({
				type: Events.FULLSCREEN
			});
		}
	});
})();