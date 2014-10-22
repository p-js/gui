/* jshint node:true */
/**
 * See README.md for more about the jshint settings.
 */
module.exports = function(grunt, options) {
	options.settings = options.settings || {};
	var src = options.settings.jshint || "src/**/*.js";
	return {
		options: grunt.file.readJSON("./.jshintrc"),
		devel: {
			options: {
				unused: false,
				asi: false,
				debug: true,
				devel: true,
				white: false,
				indent: undefined
			},
			src: src
		},
		release: {
			src: src
		}
	};
};
