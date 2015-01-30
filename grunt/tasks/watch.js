/* jshint node:true */
/**
 * options.watch The files to watch
 * options.watchTasks The tasks to run when the files change.
 */
module.exports = function(grunt, options) {
	var settings = options.settings || {};
	return {
		src: {
			files: settings.watch || ['Gruntfile.js', 'src/**', 'src/**/*'],
			tasks: settings.watchTasks || ['default']
		},
		test: {
			files: ['test/**', 'test/**/*'],
			tasks: ['copy', 'test']
		}
	};
};
