/* global Backbone, Templates, $, TopPanelModel*/
/* exported TopView */
var TopView = Backbone.View.extend({
	template: Templates["src/top/template.html"],
	tagName: "div",
	className: "pjs-info",
	initialize: function(options) {
		this.options = TopPanelModel.validate(options || {});
		this.render();
	},
	setMetadata: function(html) {
		this.$(".pjs-info-metadata").html(html);
	},
	render: function() {
		this.$el.html($(this.template(this.options)));
		return this;
	},
	hide: function() {
		this.$el.addClass("pjs-info-panel-hidden");
	},
	show: function() {
		this.$el.removeClass("pjs-info-panel-hidden");
	}
});
