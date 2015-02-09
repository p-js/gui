/* exported BaseView */
/* global Backbone, _*/
/**
 * @ignore
 * Hide and show functionality is in almost every view.
 */
var BaseView = Backbone.View.extend({
	css: {},
	isShowing: function() {
		return !this.$el.hasClass(this.css.hide);
	},
	hide: function() {
		this.$el.addClass(this.css.hide);
	},
	show: function() {
		this.$el.removeClass(this.css.hide);
	},
	sendEvent: function(event) {
		if (_.isString(event)) {
			event = {
				type: event
			};
		}
		event.target = this;
		this.trigger(event.type, event);
	}
});
