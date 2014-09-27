/* jshint node:true */
/**
 * Removes directories and files based on a pattern.
 * https://github.com/isaacs/minimatch
 */
module.exports = function(grunt, options) {
	options.settings = options.settings || {};
	return {
		pre: ["dist", "compiled-templates", ".build"],
		post: ["compiled-templates"]
	};
};
