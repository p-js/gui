/* exported PlayPauseButton */
/* global Backbone*/
var PlayPauseButton = Backbone.View.extend({
	css: {
		play: "pjs-gui-controls-play",
		pause: "pjs-gui-controls-pause"
	},
	initialize: function(options) {
		this.options = options;
		this.$el.addClass(this.options.paused ? this.css.play : this.css.pause);
	},
	events: {
		click: "toggle",
		touchstart: "toggle"
	},
	setPaused: function(isPaused) {
		var $el = this.$el;
		$el.toggleClass(this.css.play, isPaused);
		$el.toggleClass(this.css.pause, !isPaused);
	},
	toggle: function(event) {
		event.preventDefault();
		var $el = this.$el,
			showPlay = $el.hasClass(this.css.pause);
		$el.toggleClass(this.css.play, showPlay);
		$el.toggleClass(this.css.pause, !showPlay);
	}
}, {
	isPlayEvent: function($el) {
		return $el.hasClass("pjs-gui-controls-pause");
	}
});
