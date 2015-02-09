/* global _, Backbone, Templates, $, ToggleableButton, Events, PrefixTransform*/
/* exported TopView */
var TopView = Backbone.View.extend({
	template: Templates["src/top/template.html"],
	height: 0,
	className: "pjs-gui-top",
	initialize: function(options) {
		_.bindAll(this, "hide");
		this.options = options = options || {};
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
		_.delay(this.hide, 10);
	},
	show: function() {
		this.$el.css(PrefixTransform.get("translateY(0)"));
	},
	hide: function() {
		var height = this.getHeight();
		this.$el.css(PrefixTransform.get("translateY(" + -height + "px)"));
	},
	getHeight: function() {
		if (this.height < 50) {
			this.height = this.$el.height();
		}
		return this.height > 50 ? this.height : 300;
	},
	setMetadata: function(html) {
		this.$(".pjs-gui-top-metadata").html(html);
	},
	render: function() {
		this.$el.html($(this.template(this.options)));
		return this;
	}
});
