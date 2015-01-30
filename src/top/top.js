/* global BaseView, Templates, $, TopPanelModel*/
/* exported TopView */
var TopView = BaseView.extend({
	template: Templates["src/top/template.html"],
	className: "pjs-info",
	css: {
		hide: "pjs-info-panel-hidden"
	},
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
	}
});
