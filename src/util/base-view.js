/* exported BaseView */
/* global Backbone*/
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
	}
});
