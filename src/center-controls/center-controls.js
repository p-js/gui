/* exported CenterView */
/* global BaseView, $, ToggleableButton, Templates, Events*/
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
		this.playPause = new ToggleableButton({
			el: this.$(".pjs-gui-controls-play-pause"),
			on: options.paused,
			eventType: {
				on: Events.PLAY,
				off: Events.PAUSE
			},
			css: {
				on: "pjs-gui-controls-play",
				off: "pjs-gui-controls-pause"
			}
		});
	},
	setPaused: function(paused) {
		this.playPause.setStyle(paused);
	}
});
