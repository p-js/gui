/* exported Controls */
/* global _, Backbone, $, Button, Events, Slider*/
var CONTROLS_TEMPLATE = this.Templates["src/controls/template.html"];
var Controls = Backbone.View.extend({
	tagName: "div",
	className: "mtvn-controls",
	events: {
		"click .mtvn-controls-play": "play",
		"click .mtvn-controls-pause": "pause"
	},
	initialize: function() {
		_.bindAll(this, "play");
		this.render();
	},
	render: function() {
		this.$el.html($(CONTROLS_TEMPLATE()));
	},
	createSlider: function() {
		this.slider = new Slider({
			el: this.$el.find(".mtvn-controls-slider")
		});
	},
	play: function() {
		var $el = this.$el.find(".mtvn-controls-play");
		$el.removeClass("mtvn-controls-play");
		$el.addClass("mtvn-controls-pause");
		this.trigger(Events.PLAY);
	},
	pause: function() {
		var $el = this.$el.find(".mtvn-controls-pause");
		$el.removeClass("mtvn-controls-pause");
		$el.addClass("mtvn-controls-play");
		this.trigger(Events.PAUSE);
	}
});