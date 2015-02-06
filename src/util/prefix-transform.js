/* exported PrefixTransform */
var PrefixTransform = {
	get: function(value) {
		return {
			'-webkit-transform': value,
			'-ms-transform': value,
			transform: value
		};
	}
};
