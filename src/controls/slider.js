/* global _, Backbone, Events*/
/* exported Slider */
var Slider = function() {
	var format = function(sec) {
		if (isNaN(sec)) {
			return "00:00";
		}
		var h = Math.round(sec / 3600),
			m = Math.round((sec % 3600) / 60),
			s = Math.round((sec % 3600) % 60);
		return (h === 0 ? "" : (h < 10 ? "0" + h + ":" : h + ":")) + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
	},
		thumb = "mtvn-controls-slider-thumb",
		thumbActive = "mtvn-controls-slider-thumb-active";
	return Backbone.View.extend({
		dragging: false,
		duration: 0,
		playhead: 0,
		offsetWidth: 0,
		events: {
			"touchstart .mtvn-controls-slider-thumb-container": "onThumbActive",
			"touchmove .mtvn-controls-slider-thumb-container": "onThumbMove",
			"touchend .mtvn-controls-slider-thumb-container": "onThumbInactive"
		},
		initialize: function() {
			_.bindAll(this, "setOffset");
			this.render();
			this.$thumbContainer = this.$el.find(".mtvn-controls-slider-thumb-container");
			this.$progress = this.$el.find(".mtvn-controls-slider-progress");
			this.$buffer = this.$el.find(".mtvn-controls-slider-buffered");
			this.$timeDisplay = this.$el.find(".mtvn-controls-slider-time-display");
			this.setDuration(this.options.duration);
			this.setPlayhead(this.options.playhead);
			_.delay(this.setOffset);
		},
		setPlayhead: function(playhead) {
			if (!this.dragging && !this.seeking) {
				if (isNaN(playhead)) {
					playhead = parseFloat(playhead, 10);
				}
				if(!isNaN(playhead)){
					this.playhead = Math.max(0, Math.min(playhead, this.duration));
					this.moveThumb(this.getLeftFromPlayhead(playhead));
					this.updateTime();
				}
			}
		},
		setBuffer: function(buffer) {
			if (!this.dragging && !this.seeking && this.duration > 1) {
				var left = Math.max(0, this.getLeftFromPlayhead(buffer));
				left = Math.min(left, this.offsetWidth);
				this.$buffer.css({
					width: left
				});
			}
		},
		setDuration: function(duration) {
			if(isNaN(duration)){
				duration = parseFloat(duration, 10);
			}
			if(!isNaN(duration)){
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
			this.setOffset();
			this.$buffer.css({
				width: 0
			});
		},
		onThumbMove: function(event) {
			event.preventDefault();
			var moveTo = event.originalEvent.touches[0].clientX;
			if (!this.containerOffset) {
				this.containerOffset = this.$el.offset().left;
			}
			this.moveThumb(moveTo - this.containerOffset);
		},
		moveThumb: function(moveTo) {
			var left = Math.max(0, moveTo);
			left = Math.min(left, this.offsetWidth);
			this.$thumbContainer.css({
				left: left
			});
			this.$progress.css({
				width: left
			});
		},
		onThumbInactive: function(event) {
			event.preventDefault();
			var $el = this.$el.find("." + thumbActive);
			$el.removeClass(thumbActive);
			$el.addClass(thumb);
			this.dragging = false;
			this.sendSeek();
		},
		setOffset: function() {
			this.offsetWidth = this.$el[0].offsetWidth;
		},
		getLeftFromPlayhead: function(playhead) {
			if (!playhead) {
				return 0;
			}
			var percent = playhead / Math.max(1, this.duration);
			return percent * this.offsetWidth;
		},
		getTimeFromThumb: function() {
			var thumbLeft = parseFloat(this.$thumbContainer.css("left"), 10),
				p = thumbLeft / this.offsetWidth;
			return p * this.duration;
		},
		updateTime: function() {
			this.$timeDisplay.html(this.getTimeDisplayText());
		},
		getTimeDisplayText: function() {
			if (this.options.isLive) {
				return "LIVE";
			} else {
				return "<span class=\"mtvn-controls-slider-current-time\">" + format(this.playhead) + "</span>/" + format(this.duration);
			}
		},
		sendSeek: function() {
			var playhead = this.playhead = this.getTimeFromThumb();
			this.trigger(Events.SEEK, playhead);
		}
	});
}();