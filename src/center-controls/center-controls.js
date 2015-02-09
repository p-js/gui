/* exported CenterView */
/* global BaseView, _, $, ToggleableButton, Templates, Events*/
var CenterView = BaseView.extend({
	template: Templates["src/center-controls/template.html"],
	css: {
		hide: "pjs-gui-center-controls-hidden"
	},
	className: "pjs-gui-center-controls",
	initialize: function(options) {
		this.options = _.clone(options);
		this.render();
	},
	render: function(options) {
		options = this.options = _.extend(this.options, options);
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
		this.listenTo(this.playPause, Events.PLAY, this.sendEvent);
		this.listenTo(this.playPause, Events.PAUSE, this.sendEvent);
		this.$rewind = this.$(".pjs-gui-controls-rewind");
	},
	setPaused: function(paused) {
		this.playPause.setStyle(paused);
		this.options.paused = paused;
	}
});
