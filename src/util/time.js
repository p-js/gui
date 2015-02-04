/* exported Time */
var Time = {
	format: function(sec) {
		if (isNaN(sec)) {
			return "00:00";
		}
		var h = Math.floor(sec / 3600),
			m = Math.floor((sec % 3600) / 60),
			s = Math.floor((sec % 3600) % 60);
		return (h === 0 ? "" : (h < 10 ? "0" + h + ":" : h + ":")) + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
	}
};
