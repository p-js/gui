/* exported GUI */
/* global MTVNPlayer*/
var GUI = function(require) {
	// Handlebars is provided in the mtvn-util package.
	// GUI is loaded in to the page separately, so we have to go 
	// through a package manager.
	// If we compile it in, we could use a scoped var. 
	/* jshint unused:false */
	var Handlebars = require("Handlebars"),
		$ = require("$"),
		_ = require("_");
	//= template.js
	var DEFAULT_TEMPLATE = this.Templates["src/template.html"];

	function AdDisplay(options) {
		this.options = _.defaults(options || {}, {
			countdownText: "Your content will resume in {{time}}.",
			messageText: "Your content will resume shortly.",
			buttonText: "Learn More"
		});
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
	return {
		AdDisplay: AdDisplay
	};
}(MTVNPlayer.require);