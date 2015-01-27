/* global _, $, Backbone, Events*/
/* exported Slider */
var Slider = (function() {
	var RESIZE = "slider:resize",
		thumb = "mtvn-controls-slider-thumb",
		thumbActive = "mtvn-controls-slider-thumb-active",
		formatTime = function(sec) {
			if (isNaN(sec)) {
				return "00:00";
			}
			var h = Math.floor(sec / 3600),
				m = Math.floor((sec % 3600) / 60),
				s = Math.floor((sec % 3600) % 60);
			return (h === 0 ? "" : (h < 10 ? "0" + h + ":" : h + ":")) + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
		},
		getPageX = function(event) {
			var pageX = event.pageX;
			if (pageX > 0) {
				return pageX;
			}
			if (event.touches && event.touches.length > 0) {
				return event.touches[0].pageX;
			}
			return 0;
		};
	/* global SliderDVRMixin */
	//= dvr-mixin.js
	/* global SegmentedSlider */
	//= segmented-mixin.js
	return Backbone.View.extend({
		/**
		 * The thumb is visible and the slider is clickable when enabled.
		 */
		enabled: true,
		/**
		 * The thumb is being pressed
		 */
		dragging: false,
		/**
		 * Needs to be updated before the playhead will move
		 */
		duration: 0,
		/**
		 * The position of the slider
		 */
		playhead: 0,
		/**
		 * The width of the slider, cached as to not call offsetWidth repeatedly
		 */
		sliderWidth: 0,
		events: function() {
			return _.extend({
				"click": "onSliderClick",
				"touchstart": "onSliderClick",
				"touchstart .mtvn-controls-slider-thumb-container": "onThumbActive",
				"touchmove .mtvn-controls-slider-thumb-container": "onThumbMove",
				"touchend .mtvn-controls-slider-thumb-container": "onThumbInactive",
				"mousedown .mtvn-controls-slider-thumb-container": "onThumbActive"
			});
		},
		initialize: function(options) {
			this.options = options;
			// handlers in events don't need to be bound.
			_.bindAll(this, "onThumbMove", "onThumbInactive");
			var $document = $(document);
			this.listenTo($document, "mousemove", this.onThumbMove);
			this.listenTo($document, "mouseup", this.onThumbInactive);
			/**
			 * Contains the thumb and the tooltop.
			 */
			this.$thumbContainer = this.$(".mtvn-controls-slider-thumb-container");
			/**
			 * Meets the thumb visually.
			 */
			this.$progress = this.$(".mtvn-controls-slider-progress");
			/**
			 * The amount buffered.
			 */
			this.$buffered = this.$(".mtvn-controls-slider-buffered");
			/**
			 * The time and duration.
			 */
			// this.$timeDisplay = this.$(".mtvn-controls-slider-time-display");
			/**
			 * Tool tip container
			 */
			this.$toolTipContainer = this.$(".mtvn-controls-slider-tool-tip-container");
			this.$toolTipContainer.hide();
			/**
			 * Tool tip time
			 */
			this.$toolTipTime = this.$(".mtvn-controls-slider-tool-tip-time");
			/**
			 * Segment marker container
			 */
			this.$dividerContainer = this.$(".mtvn-controls-slider-segment-container");
			/**
			 * Don't fire measure too often. Perhaps a forced measure can be called from the player code.
			 */
			this.throttledMeasure = _.throttle(this.measure, 1500);
			this.throttledRender = _.throttle(this.render, 250);
			this.setDurations(this.options.durations);
			this.setPlayhead(this.options.playhead);
			if (options.isDVR) {
				_.extend(this, SliderDVRMixin);
			} else if (options.isLive) {
				this.setEnabled(false);
			}
		},
		setPlayhead: function(playhead) {
			if (!this.dragging && !this.seeking) {
				if (isNaN(playhead)) {
					playhead = parseFloat(playhead, 10);
				}
				if (!isNaN(playhead)) {
					playhead = Math.round(playhead * 100) / 100;
					this.playhead = Math.max(0, Math.min(playhead, this.duration));
					this.throttledRender();
				}
			}
		},
		setDurations: function(durations) {
			if (!_.isArray(durations)) {
				return;
			}
			if (!this.options.isLive && durations.length > 1 && !this.isSegmented) {
				_.extend(this, SegmentedSlider);
			}
			var currentDuration = 0;
			this.durations = _.map(durations, function(num) {
				currentDuration += num;
				return currentDuration;
			});
			this.duration = this.durations.pop();
			this.throttledMeasure();
			if (this.isSegmented) {
				this.createDividers();
				this.moveDividers();
				this.$dividerContainer.show();
				this.on(RESIZE, _.bind(this.moveDividers, this));
			} else {
				this.$dividerContainer.hide();
			}
			this.throttledRender();
		},
		render: function() {
			if (this.dragging || this.seeking) {
				return;
			}
			this.checkLive();
			this.throttledMeasure();
			this.moveThumb(this.getLeftFromPlayhead(this.isLive() ? this.duration : this.playhead));
			this.updateTime();
		},
		setBuffered: function(buffered) {
			if (!this.dragging && !this.seeking && this.duration > 1) {
				var left = Math.max(0, this.getLeftFromPlayhead(buffered));
				this.throttledMeasure();
				left = Math.min(left, this.sliderWidth);
				this.$buffered.css({
					width: left
				});
			}
		},
		measure: function() {
			var sliderWidth = this.$el[0].offsetWidth;
			if (sliderWidth !== this.sliderWidth) {
				this.sliderWidth = sliderWidth;
				this.trigger(RESIZE, sliderWidth);
			}
		},
		isLive: function() {
			return false;
		},
		checkLive: function() {},
		setEnabled: function(enabled) {
			if (enabled !== this.enabled) {
				if (enabled) {
					this.$thumbContainer.show();
					// this.$timeDisplay.css({
					// 	visibility: "visible"
					// });
					this.$buffered.show();
					this.$progress.show();
				} else {
					this.$thumbContainer.hide();
					// this.$timeDisplay.css({
					// 	visibility: "hidden"
					// });
					this.$progress.hide();
					this.$buffered.hide();
				}
			}
			this.enabled = enabled;
		},
		onSliderClick: function(event) {
			event.preventDefault();
			if (!this.enabled || $(event.target).hasClass(thumb)) {
				// we don't want this to fire as a click event when you click on the thumb.
				return;
			}
			var moveTo = getPageX(event);
			if (!this.containerOffset) {
				this.containerOffset = this.$el.offset().left;
			}
			this.moveThumb(moveTo - this.containerOffset);
			this.sendSeek();
		},
		onThumbActive: function(event) {
			event.preventDefault();
			var $el = this.$("." + thumb);
			$el.addClass(thumbActive);
			this.dragging = true;
			this.throttledMeasure();
			this.$buffered.css({
				width: 0
			});
			this.$toolTipTime.html(formatTime(this.playhead));
			this.$toolTipContainer.show();
		},
		onThumbMove: function(event) {
			if (this.dragging) {
				event.preventDefault();
				var moveTo = getPageX(event);
				if (!this.containerOffset) {
					this.containerOffset = this.$el.offset().left;
				}
				this.moveThumb(moveTo - this.containerOffset);
			}
		},
		onThumbInactive: function(event) {
			if (this.dragging) {
				event.preventDefault();
				var $el = this.$("." + thumbActive);
				$el.removeClass(thumbActive);
				this.dragging = false;
				this.sendSeek();
				this.$toolTipContainer.hide();
			}
		},
		moveThumb: function(moveTo) {
			var left = Math.max(0, moveTo);
			left = Math.min(left, this.sliderWidth);
			if (isNaN(left)) {
				return;
			}
			if (Math.abs(this.lastLeft - left) < 0.25) {
				return;
			}
			this.$thumbContainer.css({
				left: left
			});
			this.$progress.css({
				width: left
			});
			this.$toolTipTime.html(formatTime(this.getTimeFromThumb(left)));
			this.lastLeft = left;
		},
		getLeftFromPlayhead: function(playhead) {
			if (!playhead) {
				return 0;
			}
			var percent = playhead / Math.max(1, this.duration);
			return percent * this.sliderWidth;
		},
		getTimeFromThumb: function(thumbLeft) {
			if (isNaN(thumbLeft)) {
				thumbLeft = parseFloat(this.$thumbContainer.css("left"), 10);
			}
			var p = thumbLeft / this.sliderWidth;
			return p * this.duration;
		},
		updateTime: function() {
			// this.$timeDisplay.html(this.getTimeDisplayText());
		},
		getTimeDisplayText: function() {
			if (!this.duration) {
				return "";
			}
			if (this.isLive()) {
				return formatTime(this.duration);
			} else {
				return "<span class=\"pjs-info-current-time\">" + formatTime(this.playhead) + "</span> / " + formatTime(this.duration);
			}
		},
		sendSeek: function() {
			this.setPlayhead(this.getTimeFromThumb());
			this.trigger(Events.SEEK, {
				type: Events.SEEK,
				data: this.playhead
			});
		}
	});
})();
