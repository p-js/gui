/* exported CenterView */
/* global BaseView, $, PlayPauseButton, Templates*/
var CenterView = BaseView.extend({
	template: Templates["src/center-controls/template.html"],
	css: {
		hide: "pjs-gui-center-controls-hidden"
	},
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
	}
});
