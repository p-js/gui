/* global _, $, Backbone, Events, Util*/
/* exported Slider */
var Slider = (function() {
	var RESIZE = "slider:resize",
		thumb = "mtvn-controls-slider-thumb",
		thumbActive = "mtvn-controls-slider-thumb-active",
		// full ep mixin
		segementedScrubber = (function() {
			return {
				isSegmented: true,
				createDividers: function() {
					this.$dividerContainer.empty();
					_.each(this.durations, function() {
						this.$dividerContainer.append($("<div class=\"mtvn-controls-slider-segment\"/>"));
					}, this);
				},
				moveDividers: function() {
					var dividers = this.$dividerContainer.children();
					_.each(this.durations, function(duration, index) {
						$(dividers[index]).css({
							left: this.getLeftFromPlayhead(duration)
						});
					}, this);
				}
			};
		})();
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
					"click": "onSliderClick"
				},
				Util.isTouchDevice ? {
					// TOUCH EVENTS
					"touchstart .mtvn-controls-slider-thumb-container": "onThumbActive",
					"touchmove .mtvn-controls-slider-thumb-container": "onThumbMove",
					"touchend .mtvn-controls-slider-thumb-container": "onThumbInactive"
				} : {
					// MOUSE EVENTS
					"mousedown .mtvn-controls-slider-thumb-container": "onThumbActive"
				});
		},
		initialize: function(options) {
			this.options = options;
			if (!Util.isTouchDevice) {
				// handlers in events don't need to be bound.
				_.bindAll(this, "onThumbMove", "onThumbInactive");
				var $document = $(document);
				this.listenTo($document, "mousemove", this.onThumbMove);
				this.listenTo($document, "mouseup", this.onThumbInactive);
			}
			this.render();
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
			this.$timeDisplay = this.$(".mtvn-controls-slider-time-display");
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
			this.setDurations(this.options.durations);
			this.setPlayhead(this.options.playhead);
		},
		setPlayhead: function(playhead) {
			if (!this.dragging && !this.seeking) {
				if (isNaN(playhead)) {
					playhead = parseFloat(playhead, 10);
				}
				if (!isNaN(playhead)) {
					this.throttledMeasure();
					this.playhead = Math.max(0, Math.min(playhead, this.duration));
					this.moveThumb(this.getLeftFromPlayhead(playhead));
					this.updateTime();
				}
			}
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
		setDurations: function(durations) {
			if (!_.isArray(durations)) {
				return;
			}
			if (durations.length > 1 && !this.isSegmented) {
				_.extend(this, segementedScrubber);
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
			this.updateTime();
		},
		setEnabled: function(enabled) {
			if (enabled !== this.enabled) {
				if (enabled) {
					this.$thumbContainer.show();
					this.$timeDisplay.css({
						visibility: "visible"
					});
					this.$buffered.show();
					this.$progress.show();
				} else {
					this.$thumbContainer.hide();
					this.$timeDisplay.css({
						visibility: "hidden"
					});
					this.$progress.hide();
					this.$buffered.hide();
				}
			}
			this.enabled = enabled;
		},
		onSliderClick: function(event) {
			if (!this.enabled) {
				return;
			}
			var moveTo = event.x;
			if (!this.containerOffset) {
				this.containerOffset = this.$el.offset().left;
			}
			this.moveThumb(moveTo - this.containerOffset);
		},
		onThumbActive: function(event) {
			event.preventDefault();
			var $el = this.$("." + thumb);
			$el.removeClass(thumb);
			$el.addClass(thumbActive);
			this.dragging = true;
			this.throttledMeasure();
			this.$buffered.css({
				width: 0
			});
			this.$toolTipTime.html(Util.formatTime(this.playhead));
			this.$toolTipContainer.show();
		},
		onThumbMove: function(event) {
			if (this.dragging) {
				event.preventDefault();
				var moveTo = Util.getClientX(event);
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
				$el.addClass(thumb);
				this.dragging = false;
				this.sendSeek();
				this.$toolTipContainer.hide();
			}
		},
		moveThumb: function(moveTo) {
			var left = Math.max(0, moveTo);
			left = Math.min(left, this.sliderWidth);
			this.$thumbContainer.css({
				left: left
			});
			this.$progress.css({
				width: left
			});
			this.$toolTipTime.html(Util.formatTime(this.getTimeFromThumb(left)));
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
			this.$timeDisplay.html(this.getTimeDisplayText());
		},
		getTimeDisplayText: function() {
			return "<span class=\"mtvn-controls-slider-current-time\">" + Util.formatTime(this.playhead) + "</span> / " + Util.formatTime(this.duration);
		},
		sendSeek: function() {
			var playhead = this.playhead = this.getTimeFromThumb();
			this.updateTime();
			this.trigger(Events.SEEK, {
				type: Events.SEEK,
				data: playhead
			});
		}
	});
})();