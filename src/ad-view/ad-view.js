/* global _, $, Templates, BaseView, Events*/
/* exported AdView */
var AdView = BaseView.extend({
	template: Templates["src/ad-view/template.html"],
	className: "pjs-ad-gui",
	css: {
		hide: "pjs-ad-gui-hidden"
	},
	events: function() {
		if (this.options.buttonLink === AdView.LEARN_MORE_EVENT_ONLY) {
			return {
				"click .pjs-ad-gui-learn-more": "onLearnMore",
				"touchstart .pjs-ad-gui-learn-more": "onLearnMore",
			};
		}
	},
	initialize: function(options) {
		this.render(options);
	},
	render: function(options) {
		options = this.options = _.defaults(options || {}, AdView.DEFAULT_COPY);
		var template = options.template || this.template;
		this.$el.html($(template(options)));
		this.delegateEvents();
		this.$countdown = this.$(".pjs-ad-gui-countdown");
		this.renderMessage(options);
		return this;
	},
	renderMessage: function(options) {
		_.extend(this.options, options);
		var messageTempate = this.getTemplate(this.options),
			countdownText = _.template(messageTempate)(this.options);
		this.$countdown.text(countdownText);
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
		if (this.options.buttonLink === AdView.LEARN_MORE_EVENT_ONLY) {
			event.preventDefault();
			event.stopPropagation();
			this.trigger(Events.LEARN_MORE, {
				type: Events.LEARN_MORE
			});
		}
	}
}, {
	LEARN_MORE_EVENT_ONLY: "#",
	DEFAULT_COPY: {
		countdownText: "Your content will resume in <%=time%>.",
		countdownTextWithPosition: "Ad <%=index + 1%> of <%=total%>.",
		messageText: "Your content will resume shortly.",
		buttonText: "Learn More",
		buttonTarget: "_blank"
	}
});
