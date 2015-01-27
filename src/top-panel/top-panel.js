/* global Backbone, Templates, $, TopPanelModel, TimeDisplay, _*/
/* exported TopPanel */
var TopPanel = Backbone.View.extend({
	template: Templates["src/top-panel/top-panel.html"],
	tagName: "div",
	className: "mtvn-tp",
	events: {
		"click .mtvn-tp-share": "onShare",
		"touchstart .mtvn-tp-share": "onShare"
	},
	initialize: function(options) {
		this.options = TopPanelModel.validate(options || {});
		this.render();
		this.timeDisplay = new TimeDisplay(_.extend(options, {
			el: this.$(".pjs-info-time-display")
		}));
	},
	setMetadata: function(html) {
		this.$(".mtvn-tp-metadata").html(html);
	},
	setPlayhead: function(playhead) {
		this.playhead = playhead;
	},
	render: function() {
		this.$el.html($(this.template(this.options)));
		if (this.timeDisplay) {
			this.timeDisplay.render();
		}
	},
	hide: function() {
		this.$el.addClass("pjs-info-panel-hidden");
	},
	show: function() {
		this.$el.removeClass("pjs-info-panel-hidden");
	},
	onShare: function(event) {
		event.preventDefault();
		this.trigger(TopPanel.Events.SHARE, $(event.target).data("share-id"));
	}
}, {
	Events: {
		SHARE: "share"
	}
});
