/* exported LiveButton */
/* global Backbone, Events*/
var LiveButton = (function() {
	var css = {
		live: "mtvn-controls-is-live",
		golive: "mtvn-controls-go-live"
	};
	return Backbone.View.extend({
		initialize: function(options) {
			this.options = options;
			this.setLive(options.isLive);
		},
		events: {
			"click": "toggle"
		},
		setLive: function(isLive) {
			var $el = this.$el;
			$el.toggleClass(css.live, isLive);
			$el.toggleClass(css.golive, !isLive);
		},
		toggle: function() {
			if (this.$el.hasClass(css.golive)) {
				this.trigger(Events.GO_LIVE, {
					type: Events.GO_LIVE
				});
			}
		}
	});
})();