/* global _, Backbone, $*/
/* exported Button */
var Button = Backbone.View.extend({
	tagName:"div",
	initialize:function() {
		this.$el.addClass("mtvn-controls-button");
	}
});