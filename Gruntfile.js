/* jshint node:true */
module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt, {
		scope: 'devDependencies'
	});
	require('load-grunt-config')(grunt, {
		// the path where all the grunt task live is grunt/tasks
		configPath: require("path").join(process.cwd(), 'grunt', 'tasks'),
		// data is passed into the tasks
		data: {
			// settings are a way to override the defaults.
			settings: {
				// defaults, these can be removed.
				clean: "dist/*",
				jshint: "src/**/*.js",
				jsbeautifier: "src/**/*.js",
				watch: ["Gruntfile.js", "src/**/*", "test/**/*"],
				watchTasks: "default"
			}
		}
	});
	grunt.registerTask('deploy', 'deploy to svn', function() {
		// see README.md.
		grunt.config("svnDir", grunt.option("dir"));
		if (grunt.option("build")) {
			grunt.config("buildNumber", "-" + grunt.option("build"));
		}
		grunt.task.run("push_svn");
	});

};
