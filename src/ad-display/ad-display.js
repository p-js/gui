/* global _, $, Templates, Backbone*/
/* exported AdDisplay */
var AdDisplay = Backbone.View.extend({
	template: Templates["src/ad-display/template.html"],
	tagName: "div",
	className: "mtvn-ad-gui",
	events: function() {
		if (this.options.buttonLink === AdDisplay.LEARN_MORE_EVENT_ONLY) {
			return {
				"click .mtvn-ad-gui-learn-more": "onLearnMore",
				"touchstart .mtvn-ad-gui-learn-more": "onLearnMore",
			};
		}
	},
	initialize: function(options) {
		this.render(options);
	},
	render: function(options) {
		this.options = _.defaults(options || {}, AdDisplay.DEFAULT_COPY);
		var template = options.template || this.template;
		this.$el.html($(template(options)));
		this.delegateEvents();
		this.$countdown = this.$el.find(".mtvn-ad-gui-countdown");
		this.renderMessage(options.time);
		return this.$el;
	},
	renderMessage: function(time) {
		var messageTempate = this.options[_.isUndefined(time) ? "messageText" : "countdownText"],
			countdown = _.template(messageTempate, {
				time: time
			}, {
				interpolate: /\{\{(.+?)\}\}/g
			});
		this.$countdown.text(countdown);
	},
	onLearnMore: function(event) {
		if (this.options.buttonLink === AdDisplay.LEARN_MORE_EVENT_ONLY) {
			event.preventDefault();
			this.trigger(AdDisplay.Events.LEARN_MORE);
		}
	}
}, {
	Events: {
		LEARN_MORE: "learn:more"
	},
	LEARN_MORE_EVENT_ONLY: "#",
	DEFAULT_COPY: {
		countdownText: "Your content will resume in {{time}}.",
		messageText: "Your content will resume shortly.",
		buttonText: "Learn More",
		buttonTarget: "_blank"
	}
});
