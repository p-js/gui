/* exported Controls */
/* global _, Backbone, $, Events, Slider, PlayPauseButton, Time, ClosedCaptionButton, Templates*/
var Controls = (function() {
	//= slider/slider.js
	var CONTROLS_TEMPLATE = Templates["src/bottom/template.html"],
		css = {
			hide: "pjs-controls-hidden",
			slider: "pjs-controls-slider",
			playPause: "pjs-controls-play-pause",
			volume: "pjs-controls-volume",
			cc: "pjs-controls-cc"
		},
		addEvents = function(listener, dispatcher, events, cb) {
			_.each(events, function(eventName) {
				listener.listenTo(dispatcher, eventName, cb);
			});
		};
	return Backbone.View.extend({
		tagName: "div",
		className: "pjs-controls",
		events: {
			"click .pjs-controls-fullscreen": "onFullscreen",
			"touchstart .pjs-controls-fullscreen": "onFullscreen",
			"click .pjs-controls-rewind": "onRewind",
			"touchstart .pjs-controls-rewind": "onRewind"
		},
		initialize: function(options) {
			this.options = options;
			_.bindAll(this, "sendEvent", "setPlayheadOnDrag");
			_.extend(this.options, {
				slider: css.slider
			});
			this.render();
		},
		render: function() {
			var options = this.options;
			this.$el.html($(CONTROLS_TEMPLATE(options)));
			this.$currentTime = this.$(".pjs-info-current-time")
				.html(Time.format(options.playhead));
			this.$duration = this.$(".pjs-info-duration");
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
			this.setDurations(options.durations);
			// Seek Event
			this.listenTo(this.slider, Events.SEEK, this.sendEvent);
			this.listenTo(this.slider, Slider.Events.THUMB_DRAG, this.setPlayheadOnDrag);
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
		},
		show: function() {
			this.$el.removeClass(css.hide);
		},
		setVolume: function() {
			// N/A until desktop
		},
		setPaused: function(paused) {
			this.playPauseButton.setPaused(paused);
		},
		getPlayhead: function() {
			// used for testing.
			return this.slider.playhead;
		},
		setPlayheadOnDrag: function(playhead) {
			this.$currentTime.html(Time.format(playhead));
		},
		setPlayhead: function(playhead) {
			this.slider.setPlayhead(playhead);
		},
		setBuffered: function(buffered) {
			this.slider.setBuffered(buffered);
		},
		setDurations: function(durations) {
			this.totalDuration = _.reduce(durations, function(memo, duration) {
				return memo + duration;
			}, 0);
			this.$duration.html(Time.format(this.totalDuration));
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
