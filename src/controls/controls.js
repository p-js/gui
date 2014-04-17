/* exported Controls */
/* global _, Backbone, $, Events, Slider, PlayPauseButton, 
  LiveButton, VolumeButton, ClosedCaptionButton, Templates*/
var Controls = (function() {
	var CONTROLS_TEMPLATE = Templates["src/controls/template.html"],
		IS_LIVE_THRESHOLD = 3,
		css = {
			hide: "mtvn-controls-hidden",
			slider: "mtvn-controls-slider",
			playPause: "mtvn-controls-play-pause",
			live: "mtvn-controls-live",
			volume: "mtvn-controls-volume",
			cc: "mtvn-controls-cc"
		},
		addEvents = function(listener, dispatcher, events, cb) {
			_.each(events, function(eventName) {
				listener.listenTo(dispatcher, eventName, cb);
			});
		};
	return Backbone.View.extend({
		tagName: "div",
		className: "mtvn-controls",
		events: {
			"click .mtvn-controls-fullscreen": "onFullscreen",
			"click .mtvn-controls-rewind": "onRewind"
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
			addEvents(this, this.playPauseButton, [Events.PLAY, Events.PAUSE], this.sendEvent);
			if (options.live) {
				this.liveButton = new LiveButton({
					el: this.$("." + css.live),
					isLive: options.live
				});
				this.listenTo(this.liveButton, Events.GO_LIVE, this.sendEvent);
			}
			// SLIDER
			this.slider = new Slider({
				el: this.$("." + css.slider),
				playhead: options.playhead,
				isLive: options.live,
				durations: options.durations
			});
			this.listenTo(this.slider, Events.SEEK, this.sendEvent);
			// VOLUME
			if (options.showVolume) {
				this.volumeButton = new VolumeButton({
					volume: options.volume,
					showVolumeSlider: options.showVolumeSlider,
					el: this.$("." + css.volume)
				});
				addEvents(this, this.volumeButton, [Events.VOLUME, Events.MUTE, Events.UNMUTE], this.sendEvent);
			}
			// CC
			this.closedCaptionButton = new ClosedCaptionButton({
				ccEnabled: options.ccEnabled,
				el: this.$("." + css.cc)
			});
			this.listenTo(this.closedCaptionButton, Events.CC, this.sendEvent);
		},
		hide: function() {
			this.$el.addClass(css.hide);
			if (this.volumeButton) {
				this.volumeButton.setEnabled(false);
			}
		},
		show: function() {
			this.$el.removeClass(css.hide);
			if (this.volumeButton) {
				this.volumeButton.setEnabled(true);
			}
		},
		setVolume: function(volume) {
			if (!this.volumeButton) {
				return;
			}
			this.volumeButton.setVolume(volume);
		},
		setPaused: function(paused) {
			this.playPauseButton.setPaused(paused);
		},
		setLive: function(live) {
			if (this.liveButton) {
				this.liveButton.setLive(live);
			}
			if (this.slider) {
				this.slider.setLive(live);
			}
		},
		getPlayhead: function() {
			// used for testing.
			return this.slider.playhead;
		},
		setPlayhead: function(playhead) {
			this.slider.setPlayhead(playhead);
			if (this.options.live) {
				this.setLive(this.slider.duration - playhead < IS_LIVE_THRESHOLD);
			}
		},
		setBuffered: function(buffered) {
			this.slider.setBuffered(buffered);
		},
		setDurations: function(durations) {
			this.slider.setDurations(durations);
			if (this.options.live) {
				this.setLive(this.slider.duration - this.slider.playhead < IS_LIVE_THRESHOLD);
			}
		},
		sendEvent: function(event) {
			event.target = this;
			this.trigger(event.type, event);
		},
		onRewind: function() {
			this.sendEvent({
				type: Events.REWIND
			});
		},
		onFullscreen: function() {
			this.sendEvent({
				type: Events.FULLSCREEN
			});
		}
	});
})();