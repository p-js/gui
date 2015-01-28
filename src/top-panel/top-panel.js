/* global Backbone, Templates, $, TopPanelModel, TimeDisplay, _, Events*/
/* exported TopPanel */
var TopPanel = Backbone.View.extend({
	template: Templates["src/top-panel/top-panel.html"],
	tagName: "div",
	className: "pjs-info",
	events: {
		"click .pjs-controls-share": "showShare",
		"touchstart .pjs-controls-share": "showShare",
		"click .pjs-controls-center": "onShare",
		"touchstart .pjs-controls-center": "onShare",
		"click .pjs-controls-fullscreen": "onFullscreen",
		"touchstart .pjs-controls-fullscreen": "onFullscreen"
	},
	initialize: function(options) {
		this.options = TopPanelModel.validate(options || {});
		this.render();
		this.timeDisplay = new TimeDisplay(_.extend(options, {
			el: this.$(".pjs-info-time-display")
		}));
		this.$sharePanel = this.$(".pjs-controls-center");
		this.$sharePanel.hide();
	},
	setMetadata: function(html) {
		this.$(".pjs-info-metadata").html(html);
	},
	setPlayhead: function(playhead) {
		this.playhead = playhead;
	},
	render: function() {
		this.$el.html($(this.template(this.options)));
		if (this.timeDisplay) {
			this.timeDisplay.render();
		}
		return this;
	},
	hide: function() {
		this.$el.addClass("pjs-info-panel-hidden");
	},
	show: function() {
		this.$el.removeClass("pjs-info-panel-hidden");
	},
	showShare: function(event) {
		event.preventDefault();
		this.$(".pjs-controls-center").show();
	},
	onShare: function(event) {
		event.preventDefault();
		this.trigger(Events.SHARE, {
			type: Events.SHARE,
			data: $(event.target).data("share-id")
		});
	},
	onFullscreen: function(event) {
		event.preventDefault();
		this.trigger(Events.FULLSCREEN, {
			target: this,
			type: Events.FULLSCREEN
		});
	}
});
