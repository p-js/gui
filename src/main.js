/* exported Main */
/* global $, _, Backbone, Logger, Events, TopView, CenterView, 
	States, BottomView, ShareView, AdView*/
var Main = Backbone.View.extend({
	className: "pjs-gui",
	logger: new Logger("PJS-GUI"),
	events: {
		"click .pjs-gui-share-item": "onShare",
		"touchstart .pjs-gui-share-item": "onShare",
		"click .pjs-gui-controls-share": "shareButtonClick",
		"touchstart .pjs-gui-controls-share": "shareButtonClick",
		"click .pjs-gui-controls-rewind": "onRewind",
		"touchstart .pjs-gui-controls-rewind": "onRewind"
	},
	initialize: function(options) {
		this.options = options;
		_.bindAll(this, "sendEvent", "hide");
		this.render();
	},
	render: function() {
		var options = this.options || {};
		// Backgorund
		this.$background = $("<div/>").addClass("pjs-gui-background").appendTo(this.$el);
		// Center, should be behind Top and Bottom
		this.centerView = new CenterView(options);
		this.centerView.$el.appendTo(this.$el);
		this.listenTo(this.centerView.playPause, Events.PLAY, this.hide);
		this.listenTo(this.centerView.playPause, Events.PLAY, this.sendEvent);
		this.listenTo(this.centerView.playPause, Events.PAUSE, this.sendEvent);
		// Share
		this.shareView = new ShareView(options);
		this.shareView.$el.appendTo(this.$el);
		this.shareView.hide();
		// Top
		this.topView = new TopView(options);
		this.topView.$el.appendTo(this.$el);
		// Top CC
		this.listenTo(this.topView.cc, Events.CC, this.sendEvent);
		// Top Fullscreen
		this.listenTo(this.topView.fullScreen, Events.FULLSCREEN, this.sendEvent);
		// Ad View
		this.adView = new AdView(options.adView);
		this.adView.$el.appendTo(this.$el);
		// Ad Learn more
		this.listenTo(this.adView, Events.LEARN_MORE, this.sendEvent);
		this.adView.hide();
		// Bottom
		this.bottomView = new BottomView(options);
		this.bottomView.$el.appendTo(this.$el);
		this.listenTo(this.bottomView, Events.SEEK, this.hide);
		this.listenTo(this.bottomView, Events.SCRUB_START, this.onScrubbing);
		this.listenTo(this.bottomView, Events.SEEK, this.sendEvent);
		this.allViews = [this.centerView, this.$background, this.bottomView, this.topView, this.shareView];
		this.hide();
		return this;
	},
	show: function() {
		this.setState(States.ACTIVE);
	},
	hide: function() {
		this.setState(States.HIDDEN);
	},
	sendEvent: function(event) {
		if (_.isString(event)) {
			event = {
				type: event
			};
		}
		event.target = this;
		this.trigger(event.type, event);
	},
	setPaused: function(paused) {
		this.centerView.setPaused(paused);
	},
	isDragging: function() {
		return this.bottomView.slider.dragging;
	},
	setState: function(state, options) {
		this.state = state;
		this.logger.info("state:", state);
		switch (state) {
			case States.ACTIVE:
				this.bottomView.slider.setEnabled(true);
				_.invoke([this.shareView, this.adView], "hide");
				_.invoke(_.without(this.allViews, this.shareView), "show");
				break;
			case States.SHARE:
				this.logger.info("show share panel");
				this.centerView.hide();
				this.shareView.show();
				this.sendEvent(Events.SHOW_SHARE);
				break;
			case States.SCRUBBING:
				_.invoke(_.without(this.allViews, this.bottomView), "hide");
				break;
			case States.HIDDEN:
				_.invoke(this.allViews, "hide");
				break;
			case States.AD:
				this.logger.info("ad state options:", options);
				_.invoke(this.allViews, "hide");
				this.bottomView.slider.setEnabled(false);
				this.adView.render(_.extend(this.adView.options, options));
				this.adView.show();
				break;
			default:
				this.logger.error("Unrecognized state", state);
				break;
		}
	},
	shareButtonClick: function(event) {
		event.preventDefault();
		event.stopPropagation();
		if (this.centerView.isShowing()) {
			this.setState(States.SHARE);
		} else {
			this.setState(States.ACTIVE);
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
	onScrubbing: function() {
		this.setState(States.SCRUBBING);
	},
	onFullscreen: function(event) {
		event.preventDefault();
		event.stopPropagation();
		this.sendEvent(Events.FULLSCREEN);
	},
	showFullscreenButton: function(showFullscreenButton) {
		this.topView.fullScreen.setStyle(showFullscreenButton);
	},
	onRewind: function(event) {
		event.preventDefault();
		event.stopPropagation();
		this.sendEvent({
			type: Events.REWIND,
			data: 10
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
