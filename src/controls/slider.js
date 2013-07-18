/* global _, $, Backbone, Events, Util*/
/* exported Slider */
var Slider = function() {
	var thumb = "mtvn-controls-slider-thumb",
		thumbActive = "mtvn-controls-slider-thumb-active",
		touchMixin = {
			platformInitialize: function() {},
			events: {
				"touchstart .mtvn-controls-slider-thumb-container": "onThumbActive",
				"touchmove .mtvn-controls-slider-thumb-container": "onThumbMove",
				"touchend .mtvn-controls-slider-thumb-container": "onThumbInactive"
			}
		},
		mouseMixin = {
			platformInitialize: function() {
				_.bindAll(this, "onThumbMove", "onThumbInactive");
				$(document).mousemove(this.onThumbMove);
				$(document).mouseup(this.onThumbInactive);
			},
			events: {
				"mousedown .mtvn-controls-slider-thumb-container": "onThumbActive"
			}
		};
	return Backbone.View.extend({
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
		initialize: function() {
			_.bindAll(this, "setSliderWidth");
			_.extend(this, Util.isTouchDevice ? touchMixin : mouseMixin);
			this.platformInitialize();
			this.render();
			/**
			 * Contains the thumb and the tooltop.
			 */
			this.$thumbContainer = this.$el.find(".mtvn-controls-slider-thumb-container");
			/**
			 * Meets the thumb visually.
			 */
			this.$progress = this.$el.find(".mtvn-controls-slider-progress");
			/**
			 * The amount buffered.
			 */
			this.$buffer = this.$el.find(".mtvn-controls-slider-buffered");
			/**
			 * The time and duration.
			 */
			this.$timeDisplay = this.$el.find(".mtvn-controls-slider-time-display");
			this.setDuration(this.options.duration);
			this.setPlayhead(this.options.playhead);
			_.delay(this.setSliderWidth);
		},
		setPlayhead: function(playhead) {
			if (!this.dragging && !this.seeking) {
				if (isNaN(playhead)) {
					playhead = parseFloat(playhead, 10);
				}
				if (!isNaN(playhead)) {
					this.playhead = Math.max(0, Math.min(playhead, this.duration));
					this.moveThumb(this.getLeftFromPlayhead(playhead));
					this.updateTime();
				}
			}
		},
		setBuffer: function(buffer) {
			if (!this.dragging && !this.seeking && this.duration > 1) {
				var left = Math.max(0, this.getLeftFromPlayhead(buffer));
				left = Math.min(left, this.sliderWidth);
				this.$buffer.css({
					width: left
				});
			}
		},
		setDuration: function(duration) {
			if (isNaN(duration)) {
				duration = parseFloat(duration, 10);
			}
			if (!isNaN(duration)) {
				this.duration = duration;
				this.updateTime();
			}
		},
		onThumbActive: function(event) {
			event.preventDefault();
			var $el = this.$el.find("." + thumb);
			$el.removeClass(thumb);
			$el.addClass(thumbActive);
			this.dragging = true;
			this.setSliderWidth();
			this.$buffer.css({
				width: 0
			});
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
				var $el = this.$el.find("." + thumbActive);
				$el.removeClass(thumbActive);
				$el.addClass(thumb);
				this.dragging = false;
				this.sendSeek();
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
		},
		setSliderWidth: function() {
			this.sliderWidth = this.$el[0].offsetWidth;
		},
		getLeftFromPlayhead: function(playhead) {
			if (!playhead) {
				return 0;
			}
			var percent = playhead / Math.max(1, this.duration);
			return percent * this.sliderWidth;
		},
		getTimeFromThumb: function() {
			var thumbLeft = parseFloat(this.$thumbContainer.css("left"), 10),
				p = thumbLeft / this.sliderWidth;
			return p * this.duration;
		},
		updateTime: function() {
			this.$timeDisplay.html(this.getTimeDisplayText());
		},
		getTimeDisplayText: function() {
			return "<span class=\"mtvn-controls-slider-current-time\">" + Util.formatTime(this.playhead) + "</span>/" + Util.formatTime(this.duration);
		},
		sendSeek: function() {
			var playhead = this.playhead = this.getTimeFromThumb();
			this.trigger(Events.SEEK, playhead);
		}
	});
}();