/* exported ClosedCaptionButton */
/* global Backbone, Events*/
var ClosedCaptionButton = (function() {
	return Backbone.View.extend({
		ccEnabled: false,
		className: "pjs-controls-cc",
		events: {
			click: "toggle",
			touchstart: "toggle"
		},
		toggle: function(event) {
			event.preventDefault();
			this.trigger(Events.CC, {
				type: Events.CC
			});
		}
	});
})();
