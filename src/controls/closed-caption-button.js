/* exported ClosedCaptionButton */
/* global Backbone, Events*/
var ClosedCaptionButton = function() {
	return Backbone.View.extend({
		ccEnabled: false,
		className: "mtvn-controls-cc",
		events: {
			"click": "toggle"
		},
		toggle: function() {
			this.trigger(Events.CC, {
				type: Events.CC
			});
		}
	});
}();