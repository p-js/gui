/* global _, $ */
var DEFAULT_TEMPLATE = this.Templates["src/ad-display/template.html"],
	DEFAULT_COPY = {
		countdownText: "Your content will resume in {{time}}.",
		messageText: "Your content will resume shortly.",
		buttonText: "Learn More",
		buttonTarget: "_blank"
	};

function AdDisplay(options) {
	this.options = _.defaults(options || {}, DEFAULT_COPY);
	this.render(this.options);
}

AdDisplay.prototype = {
	render: function(options) {
		var template = options.template || DEFAULT_TEMPLATE,
			$el = this.$el = $(template(options));
		this.$countdown = $el.find(".mtvn-ad-gui-countdown");
		this.renderMessage(options.time);
		return $el;
	},
	renderMessage: function(time) {
		var messageTempate = this.options[_.isUndefined(time) ? "messageText" : "countdownText"],
			countdown = _.template(messageTempate, {
				time: time
			}, {
				interpolate: /\{\{(.+?)\}\}/g
			});
		this.$countdown.text(countdown);
	}
};