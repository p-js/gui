/* exported BottomView */
/* global _, BaseView, $, Events, Slider, Time, Templates*/
var BottomView = (function() {
	//= slider/slider.js
	return BaseView.extend({
		template: Templates["src/bottom/template.html"],
		className: "pjs-controls",
		css: {
			hide: "pjs-gui-controls-hidden",
			slider: "pjs-gui-controls-slider",
			currentTime: "pjs-gui-current-time",

			duration: "pjs-gui-duration"
		},
		initialize: function(options) {
			this.options = options;
			_.bindAll(this, "sendEvent", "setPlayheadOnDrag");
			_.extend(this.options, {
				slider: this.css.slider
			});
			this.render();
		},
		render: function() {
			var options = this.options;
			this.$el.html($(this.template(options)));
			this.$currentTime = this.$("." + this.css.currentTime)
				.html(Time.format(options.playhead));
			this.$duration = this.$("." + this.css.duration);
			// SLIDER
			this.slider = new Slider({
				el: this.$("." + this.css.slider),
				playhead: options.playhead,
				isLive: options.isLive,
				isDVR: options.isDVR,
				durations: options.durations
			});
			this.setDurations(options.durations);
			// Seek Event
			this.listenTo(this.slider, Events.SEEK, this.sendEvent);
			this.listenTo(this.slider, Slider.Events.THUMB_DRAG, this.setPlayheadOnDrag);
		},
		getPlayhead: function() {
			// used for testing.
			return this.slider.playhead;
		},
		setPlayheadOnDrag: function(playhead) {
			this.$currentTime.text(Time.format(playhead));
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
		}
	});
})();
