/* exported Util */
var Util = function() {
	var isTouchDevice = 'ontouchstart' in window || 'onmsgesturechange' in window;
	return {
		isTouchDevice: isTouchDevice,
		getClientX: isTouchDevice ? function(event) {
			return event.originalEvent.touches[0].clientX;
		} : function(event) {
			return event.clientX;
		},
		getClientY: isTouchDevice ? function(event) {
			return event.originalEvent.touches[0].clientY;
		} : function(event) {
			return event.clientY;
		},
		invokeIfNumber: function(func, n) {
			if (isNaN(n)) {
				parseFloat(n, 10);
			}
			if (!isNaN(n)) {
				console.log("INVOKE~~~ util.js:21 n", n);
				func(n);
			}
		},
		formatTime: function(sec) {
			if (isNaN(sec)) {
				return "00:00";
			}
			var h = Math.floor(sec / 3600),
				m = Math.floor((sec % 3600) / 60),
				s = Math.floor((sec % 3600) % 60);
			return (h === 0 ? "" : (h < 10 ? "0" + h + ":" : h + ":")) + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
		}
	};
}();