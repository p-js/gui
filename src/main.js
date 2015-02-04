/* exported Main */
/* global $, _, Backbone, Logger, Events, TopView, CenterView, 
	BottomView, ShareView, PlayPauseButton, AdView*/
var Main = Backbone.View.extend({
	className: "pjs-gui",
	logger: new Logger("PJS-GUI"),
	events: {
		"click .pjs-gui-controls-play-pause": "onPlayPause",
		"touchstart .pjs-gui-controls-play-pause": "onPlayPause",
		"mousedown .pjs-controls": "onScrubberClick",
		"touchstart .pjs-controls": "onScrubberClick",
		"click .pjs-gui-controls-fullscreen": "onFullscreen",
		"touchstart .pjs-gui-controls-fullscreen": "onFullscreen",
		"click .pjs-share-item": "onShare",
		"touchstart .pjs-share-item": "onShare",
		"click .pjs-gui-controls-share": "showShare",
		"touchstart .pjs-gui-controls-share": "showShare",
		"click .pjs-gui-controls-rewind": "onRewind",
		"touchstart .pjs-gui-controls-rewind": "onRewind"
	},
	initialize: function(options) {
		this.options = options;
		_.bindAll(this, "onSeek", "sendEvent");
		this.render();
	},
	render: function() {
		var options = this.options || {};
		// Backgorund
		this.$background = $("<div/>").addClass("pjs-gui-background").appendTo(this.$el);
		// Center, should be behind Top and Bottom
		this.centerView = new CenterView(options);
		this.centerView.$el.appendTo(this.$el);
		// Share
		this.shareView = new ShareView(options.shareView);
		this.shareView.$el.appendTo(this.$el);
		this.shareView.hide();
		// Top
		this.topView = new TopView(options.topView);
		this.topView.$el.appendTo(this.$el);
		// Ad View
		this.adView = new AdView(options.adView);
		this.adView.$el.appendTo(this.$el);
		this.listenTo(this.adView, Events.LEARN_MORE, this.sendEvent);
		this.adView.hide();
		// Bottom
		this.bottomView = new BottomView(options);
		this.bottomView.$el.appendTo(this.$el);
		this.listenTo(this.bottomView, Events.SEEK, this.onSeek);
		this.listenTo(this.bottomView, Events.SEEK, this.sendEvent);
		this.hide();
		return this;
	},
	hide: function() {
		this.centerView.hide();
		this.$background.hide();
		this.bottomView.hide();
		this.topView.hide();
		this.shareView.hide();
		this.isActive = false;
		this.logger.info("hide()");
	},
	sendEvent: function(event) {
		event.target = this;
		this.trigger(event.type, event);
	},
	show: function(event) {
		if (event) {
			event.preventDefault();
		}
		if (!this.isActive && !this.adView.isShowing()) {
			this.isActive = true;
			this.logger.info("show");
			this.centerView.show();
			this.$background.show();
			this.shareView.hide();
			this.bottomView.show();
			this.topView.show();
		}
	},
	onPlayPause: function(event) {
		event.preventDefault();
		var isPlayEvent = PlayPauseButton.isPlayEvent($(event.currentTarget));
		this.sendEvent({
			type: isPlayEvent ? Events.PLAY : Events.PAUSE
		});
		if (isPlayEvent) {
			this.hide();
		}
	},
	setPaused: function(paused) {
		this.centerView.setPaused(paused);
	},
	onSeek: function() {
		this.logger.info("onSeek");
		this.isActive = false;
	},
	isDragging: function() {
		return this.bottomView.slider.dragging;
	},
	showShare: function() {
		event.preventDefault();
		event.stopPropagation();
		if (this.centerView.isShowing()) {
			this.logger.info("show share panel");
			this.centerView.hide();
			this.shareView.show();
			this.sendEvent({
				type: Events.SHOW_SHARE
			});
		} else {
			this.logger.info("hide share panel");
			this.centerView.show();
			this.shareView.hide();
		}
	},
	setAdMode: function(enabled, options) {
		if (enabled) {
			this.hide();
			this.shareView.hide();
			this.setEnabled(false);
			this.adView.render(options);
			this.adView.show();
		} else {
			this.setEnabled(true);
			this.adView.hide();
		}
	},
	setPlayhead: function(playhead) {
		this.bottomView.setPlayhead(playhead);
	},
	setEnabled: function(enabled) {
		this.bottomView.slider.setEnabled(enabled);
	},
	setBuffered: function(buffered) {
		this.bottomView.setBuffered(buffered);
	},
	setDurations: function(durations) {
		this.bottomView.setDurations(durations);
	},
	onScrubberClick: function(event) {
		event.preventDefault();
		this.centerView.hide();
		this.$background.hide();
		this.topView.hide();
	},
	onFullscreen: function(event) {
		event.preventDefault();
		event.stopPropagation();
		this.sendEvent({
			type: Events.FULLSCREEN
		});
	},
	onRewind: function(event) {
		event.preventDefault();
		event.stopPropagation();
		this.sendEvent({
			type: Events.REWIND
		});
	},
	onShare: function(event) {
		this.logger.info("onShare");
		event.preventDefault();
		event.stopPropagation();
		this.sendEvent({
			type: Events.SHARE,
			data: $(event.target).data("share-id")
		});
	}
});
