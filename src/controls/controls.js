/* exported Controls */
/* global _, Backbone, $, Events, Slider, PlayPauseButton, 
  LiveButton, VolumeButton, ClosedCaptionButton, Templates*/
var Controls = (function() {
	//= slider/slider.js
	var CONTROLS_TEMPLATE = Templates["src/controls/template.html"],

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
			"touchstart .mtvn-controls-fullscreen": "onFullscreen",
			"click .mtvn-controls-rewind": "onRewind",
			"touchstart .mtvn-controls-rewind": "onRewind"
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
			// SLIDER
			this.slider = new Slider({
				el: this.$("." + css.slider),
				playhead: options.playhead,
				isLive: options.isLive,
				isDVR: options.isDVR,
				durations: options.durations
			});
			// Seek Event
			this.listenTo(this.slider, Events.SEEK, this.sendEvent);
			// LIVE
			if (options.isLive) {
				this.liveButton = new LiveButton({
					el: this.$("." + css.live),
					isLive: options.isLive
				});
				if (options.isDVR) {
					// Live Event
					this.listenTo(this.liveButton, Events.GO_LIVE, this.sendEvent);
					// Handle IS_LIVE Event
					this.liveButton.listenTo(this.slider, Events.IS_LIVE, this.liveButton.onLiveChange);
				}
			}
			// VOLUME
			if (options.showVolume) {
				this.volumeButton = new VolumeButton({
					volume: options.volume,
					muted: options.muted,
					showVolumeSlider: options.showVolumeSlider,
					el: this.$("." + css.volume)
				});
				// Volume Events
				addEvents(this, this.volumeButton, [Events.VOLUME, Events.MUTE, Events.UNMUTE], this.sendEvent);
			}
			// CC
			this.closedCaptionButton = new ClosedCaptionButton({
				ccEnabled: options.ccEnabled,
				el: this.$("." + css.cc)
			});
			// CC Event
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
		getPlayhead: function() {
			// used for testing.
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
		onRewind: function() {
			event.preventDefault();
			this.sendEvent({
				type: Events.REWIND
			});
		},
		onFullscreen: function(event) {
			event.preventDefault();
			this.sendEvent({
				type: Events.FULLSCREEN
			});
		}
	});
})();

