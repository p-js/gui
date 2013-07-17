/* exported VolumeButton */
/* global Backbone, Events*/
var VolumeButton = function() {
	var css = {
		unmute: "mtvn-controls-unmute",
		mute: "mtvn-controls-mute"
	};
	return Backbone.View.extend({
		events: {
			"click .mtvn-controls-unmute": "onUnmute",
			"click .mtvn-controls-mute": "onMute"
		},
		onUnmute: function() {
			var $el = this.$el.find("." + css.unmute);
			$el.removeClass(css.unmute);
			$el.addClass(css.mute);
			this.trigger(Events.UNMUTE, Events.UNMUTE);
		},
		onMute: function() {
			var $el = this.$el.find("." + css.mute);
			$el.removeClass(css.mute);
			$el.addClass(css.unmute);
			this.trigger(Events.MUTE, Events.MUTE);
		}
	});
}();