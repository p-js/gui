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
		options = this.options = _.defaults(options || {}, AdDisplay.DEFAULT_COPY);
		var template = options.template || this.template;
		this.$el.html($(template(options)));
		this.delegateEvents();
		this.$countdown = this.$(".mtvn-ad-gui-countdown");
		this.renderMessage(options.time);
		return this.$el;
	},
	renderMessage: function(options) {
		_.extend(this.options, options);
		var messageTempate = this.getTemplate(this.options),
			countdown = _.template(messageTempate, this.options, {
				interpolate: /\{\{(.+?)\}\}/g
			});
		this.$countdown.text(countdown);
	},
	getTemplate: function(options) {
		var text = options.messageText;
		if (options.time) {
			text = options.countdownText;
		}
		if (options.index >= 0 && options.total > 1) {
			return options.countdownTextWithPosition + " " + text;
		}
		return text;
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
		countdownTextWithPosition: "Ad {{index + 1}} of {{total}}.",
		messageText: "Your content will resume shortly.",
		buttonText: "Learn More",
		buttonTarget: "_blank"
	}
});
