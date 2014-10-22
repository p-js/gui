/* exported SegmentedSlider */
/* global _, $ */
var SegmentedSlider = {
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

