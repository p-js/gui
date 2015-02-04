/* exported ClosedCaptionButton */
/* global Backbone, Events*/
var ClosedCaptionButton = Backbone.View.extend({
	css: {
		cc: "pjs-gui-controls-cc",
		ccOn: "pjs-gui-controls-cc-on"
	},
	events: {
		click: "toggle",
		touchstart: "toggle"
	},
	initialize: function(options) {
		this.setStyle(options.ccOn);
	},
	toggle: function(event) {
		event.preventDefault();
		var ccOn = !this.$el.hasClass(this.css.ccOn);
		this.setStyle(ccOn);
		this.trigger(Events.CC, {
			type: Events.CC,
			data: {
				ccOn: ccOn
			}
		});
	},
	setStyle: function(ccOn) {
		if (ccOn) {
			this.$el.addClass(this.css.ccOn);
			this.$el.removeClass(this.css.cc);
		} else {
			this.$el.addClass(this.css.cc);
			this.$el.removeClass(this.css.ccOn);
		}
	}
});
