/* exported TimeDisplay */
/* global Backbone, _ */
var TimeDisplay = Backbone.View.extend({
	template: _.template("<span class=\"pjs-info-current-time\"><%=data.playhead%></span> / <%=data.duration%>", {
		variable: 'data'
	}),
	initialize: function(options) {
		options = options || {};
		this.playhead = options.playhead || 0;
		this.duration = options.duration;
		this.render();
	},
	render: function() {
		if (!this.duration) {
			this.$el.html("");
		} else {
			this.$el.html(this.template({
				playhead: TimeDisplay.formatTime(this.playhead),
				duration: TimeDisplay.formatTime(this.duration)
			}));
		}
		return this;
	}
}, {
	formatTime: function(sec) {
		if (isNaN(sec)) {
			return "00:00";
		}
		var h = Math.floor(sec / 3600),
			m = Math.floor((sec % 3600) / 60),
			s = Math.floor((sec % 3600) % 60);
		return (h === 0 ? "" : (h < 10 ? "0" + h + ":" : h + ":")) + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
	}
});
