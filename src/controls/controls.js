/* exported Controls */
/* global _, Backbone, $, Events, Slider, PlayPauseButton, VolumeButton*/
var Controls = function() {
	var CONTROLS_TEMPLATE = this.Templates["src/controls/template.html"],
		css = {
			slider: "mtvn-controls-slider",
			playPause: "mtvn-controls-play-pause",
			volume: "mtvn-controls-volume"

		};
	return Backbone.View.extend({
		tagName: "div",
		className: "mtvn-controls",
		events: {
			"click .mtvn-controls-fullscreen": "onFullscreen"
		},
		initialize: function() {
			_.bindAll(this, "onSeek", "sendEvent");
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
				el: this.$el.find("." + css.playPause),
				paused: options.paused
			});
			this.listenTo(this.playPauseButton, Events.PLAY, this.sendEvent);
			this.listenTo(this.playPauseButton, Events.PAUSE, this.sendEvent);
			// SLIDER
			this.slider = new Slider({
				el: this.$el.find("." + css.slider),
				playhead: options.playhead,
				duration: options.duration
			});
			this.listenTo(this.slider, Events.SEEK, this.onSeek);
			// VOLUME
			this.volumeButton = new VolumeButton({
				volume: options.volume,
				el: this.$el.find("." + css.volume)
			});
			this.listenTo(this.volumeButton, Events.MUTE, this.sendEvent);
			this.listenTo(this.volumeButton, Events.UNMUTE, this.sendEvent);
		},
		setVolume:function(volume) {
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
		setDuration: function(duration) {
			this.slider.setDuration(duration);
		},
		sendEvent: function(type, data) {
			this.trigger(type, {
				type: type,
				target: this,
				data: data
			});
		},
		onSeek: function(event) {
			this.sendEvent(Events.SEEK, event);
		},
		onFullscreen: function() {
			this.sendEvent(Events.FULLSCREEN);
		}
	});
}();