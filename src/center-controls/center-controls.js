/* exported CenterView */
/* global Backbone, $, PlayPauseButton, Templates*/
var CenterView = Backbone.View.extend({
	template: Templates["src/center-controls/template.html"],
	className: "pjs-gui-center-controls",
	initialize: function(options) {
		this.options = options;
		this.render();
	},
	render: function() {
		var options = this.options;
		this.$el.html($(this.template(options)));
		// PLAY PAUSE 
		this.playPauseButton = new PlayPauseButton({
			el: this.$(".pjs-controls-play-pause"),
			paused: options.paused
		});
	},
	isShowing: function() {
		return !this.$el.hasClass("pjs-controls-hidden");
	},
	hide: function() {
		this.$el.addClass("pjs-controls-hidden");
	},
	show: function() {
		this.$el.removeClass("pjs-controls-hidden");
	}
});
