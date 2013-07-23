/* exported PlayPauseButton */
/* global Backbone, Events*/
var PlayPauseButton = function() {
	var css = {
		play: "mtvn-controls-play",
		pause: "mtvn-controls-pause"
	};
	return Backbone.View.extend({
		initialize: function() {
			this.$el.addClass(this.options.paused ? css.play : css.pause);
		},
		events: {
			"click": "toggle"
		},
		setPaused: function(isPaused) {
			var $el = this.$el;
			$el.toggleClass(css.play, isPaused);
			$el.toggleClass(css.pause, !isPaused);
		},
		toggle: function() {
			var $el = this.$el,
				showPlay = $el.hasClass(css.pause),
				eventName = !showPlay ? Events.PLAY : Events.PAUSE;
			$el.toggleClass(css.play, showPlay);
			$el.toggleClass(css.pause, !showPlay);
			this.trigger(eventName, eventName);
		}
	});
}();