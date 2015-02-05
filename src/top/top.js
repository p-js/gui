/* global BaseView, Templates, $, TopPanelModel, ToggleableButton, Events*/
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
		this.cc = new ToggleableButton({
			el: this.$(".pjs-gui-controls-cc"),
			on: this.options.ccEnabled,
			css: {
				on: "pjs-gui-controls-cc-on",
				off: "pjs-gui-controls-cc"
			},
			eventType: Events.CC
		});
		this.fullScreen = new ToggleableButton({
			el: this.$(".pjs-gui-controls-fullscreen"),
			on: !this.options.isFullscreen,
			css: {
				on: "pjs-gui-controls-fullscreen",
				off: "pjs-gui-controls-fullscreen-minimize"
			},
			eventType: Events.FULLSCREEN
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
