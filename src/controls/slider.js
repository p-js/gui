/* global _, Backbone, $, Events*/
/* exported Slider */
var Slider = function() {
	var thumbContainer = "mtvn-controls-slider-thumb-container",
		thumb = "mtvn-controls-slider-thumb",
		thumbActive = "mtvn-controls-slider-thumb-active";
	return Backbone.View.extend({
		dragging: false,
		duration: 1000,
		tagName: "div",
		className: "mtvn-controls-slider",
		events: {
			"touchstart .mtvn-controls-slider-thumb-container": "thumbActive",
			"touchmove .mtvn-controls-slider-thumb-container": "thumbMove",
			"touchend .mtvn-controls-slider-thumb-container": "thumbInactive"
		},
		initialize: function() {
			// _.bindAll(this, "sendSeek");
			this.render();
			this.$thumbContainer = this.$el.find("." + thumbContainer);
			this.$progress = this.$el.find(".mtvn-controls-slider-progress");
			this.$buffer = this.$el.find(".mtvn-controls-slider-buffered");
			this.containerOffset = this.$el[0].offsetLeft;
		},
		render: function() {
			//this.$el.html($(SLIDER_TEMPLATE()));
		},
		thumbActive: function(event) {
			event.preventDefault();
			var $el = this.$el.find("." + thumb);
			$el.removeClass(thumb);
			$el.addClass(thumbActive);
			this.dragging = true;
			this.offsetWidth = this.$el[0].offsetWidth;
			this.$buffer.css({
				width: 0
			});
		},
		thumbMove: function(event) {
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
		thumbInactive: function(event) {
			event.preventDefault();
			var $el = this.$el.find("." + thumbActive);
			$el.removeClass(thumbActive);
			$el.addClass(thumb);
			this.dragging = false;
			this.sendSeek();
		},
		getTimeFromThumb: function() {
			var thumbLeft = parseFloat(this.$thumbContainer.css("left"), 10),
				p = thumbLeft / this.offsetWidth;
			return p * this.duration;
		},
		sendSeek: function() {
			var seekTo = this.getTimeFromThumb();
			console.log("slider.js:43 seek:", seekTo);
			this.trigger(Events.SEEK, seekTo);
		}
	});
}();