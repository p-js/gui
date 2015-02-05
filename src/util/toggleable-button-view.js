/* exported ToggleableButton */
/* global Backbone*/
var ToggleableButton = Backbone.View.extend({
	events: {
		click: "toggle",
		touchstart: "toggle"
	},
	isOn: false,
	initialize: function(options) {
		options = options || {};
		this.css = options.css;
		if (!this.css) {
			throw "no css specified for button";
		}
		this.eventType = options.eventType;
		if (!this.eventType) {
			throw "no event type specified for button";
		}
		this.setStyle(!!options.on);
	},
	toggle: function(event) {
		event.preventDefault();
		var eventType = this.eventType;
		if (eventType.on || eventType.off) {
			eventType = this.isOn ? eventType.on : eventType.off;
		}
		// send current state
		this.trigger(eventType, {
			target: this,
			type: eventType,
			// the event was for the last state
			data: this.isOn
		});
		// toggle state
		this.setStyle(!this.isOn);
	},
	setStyle: function(on) {
		this.isOn = on;
		if (on) {
			this.$el.addClass(this.css.on);
			this.$el.removeClass(this.css.off);
		} else {
			this.$el.addClass(this.css.off);
			this.$el.removeClass(this.css.on);
		}
	}
});
