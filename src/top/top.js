/* global BaseView, Templates, $, TopPanelModel, ClosedCaptionButton*/
/* exported TopView */
var TopView = BaseView.extend({
	template: Templates["src/top/template.html"],
	className: "pjs-gui-top",
	css: {
		hide: "pjs-gui-top-hidden"
	},
	initialize: function(options) {
		this.options = TopPanelModel.validate(options || {});
		this.render();
		// CC has toggle-able state and dispatches event
		// buttons without state are just handled in main.js
		this.ccButton = new ClosedCaptionButton({
			el: this.$(".pjs-gui-controls-cc")
		});
	},
	setMetadata: function(html) {
		this.$(".pjs-gui-top-metadata").html(html);
	},
	render: function() {
		this.$el.html($(this.template(this.options)));
		return this;
	}
});
