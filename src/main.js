/* exported Main */
/* global _, Backbone, Logger, Events, TopView, CenterView, BottomView, ShareView, PlayPauseButton, $*/
var Main = Backbone.View.extend({
	tagName: "div",
	className: "pjs-gui",
	isShown: false,
	logger: new Logger("GUI"),
	events: {
		"click": "show",
		"touchstart": "show",
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
		_.bindAll(this, "onSeek");
		this.render();
	},
	render: function() {
		var options = this.options;
		// Center, should be behind Top and Bottom
		this.$background = $("<div/>").addClass("pjs-gui-background").appendTo(this.$el);
		this.centerView = new CenterView(options);
		this.centerView.$el.appendTo(this.$el);
		this.shareView = new ShareView(options);
		this.shareView.$el.appendTo(this.$el);
		this.shareView.hide();
		// Top
		this.topView = new TopView(options);
		// this.listenTo(this.topView, TopView.Events.SHARE, this.showShare);
		this.topView.$el.appendTo(this.$el);
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
		if (!this.isActive) {
			this.isActive = true;
			this.logger.info("show");
			this.centerView.show();
			this.$background.show();
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
	onSeek: function() {
		this.logger.info("onSeek");
		this.isActive = false;
	},
	showShare: function() {
		this.logger.info("show share");
		event.preventDefault();
		event.stopPropagation();
		if (this.centerView.isShowing()) {
			this.centerView.hide();
			this.shareView.show();
		} else {
			this.centerView.show();
			this.shareView.hide();
		}
	},
	getPlayhead: function() {
		// used for testing.
		return this.bottomView.getPlayhead();
	},
	setPlayhead: function(playhead) {
		this.bottomView.setPlayhead(playhead);
	},
	setBuffered: function(buffered) {
		this.bottomView.setBuffered(buffered);
	},
	setDurations: function(durations) {
		this.bottomView.setDurations(durations);
	},
	onScrubberClick: function() {
		event.preventDefault();
		this.centerView.hide();
		this.$background.hide();
		this.topView.hide();
	},
	onFullscreen: function() {
		event.preventDefault();
		this.sendEvent({
			type: Events.FULLSCREEN
		});
	},
	onRewind: function() {
		event.preventDefault();
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
