/* global _ */
/* exported ShareItems */
var ShareItems = {
	availableShareItems: ["facebook", "twitter", "embed", "link"],
	validate: function(options) {
		if (options.share) {
			options.share = _.intersection(options.share, ShareItems.availableShareItems);
		}
		return options;
	}
};
