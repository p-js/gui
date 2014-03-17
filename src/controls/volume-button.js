/* exported VolumeButton */
/* global Backbone, Events*/
var VolumeButton = (function() {
	var css = {
		unmute: "mtvn-controls-unmute",
		mute: "mtvn-controls-mute"
	};
	return Backbone.View.extend({
		events: {
			"click": "toggle"
		},
		initialize: function(options) {
			this.options = options;
			this.setVolume(isNaN(this.options.volume) ? 1 : this.options.volume);
		},
		setVolume: function(volume) {
			var showMute = volume > 0;
			this.$el.toggleClass(css.mute, showMute);
			this.$el.toggleClass(css.unmute, !showMute);
		},
		toggle: function() {
			var $el = this.$el,
				showMute = $el.hasClass(css.unmute),
				eventName = showMute ? Events.UNMUTE : Events.MUTE;
			$el.toggleClass(css.mute, showMute);
			$el.toggleClass(css.unmute, !showMute);
			this.trigger(eventName, {
				type: eventName
			});
		}
	});
})();