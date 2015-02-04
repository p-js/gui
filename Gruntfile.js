/* jshint node:true */
module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt, {
		scope: 'devDependencies'
	});
	require('load-grunt-config')(grunt, {
		// the path where all the grunt task live is grunt/tasks
		configPath: require("path").join(process.cwd(), 'grunt', 'tasks')
	});
	grunt.registerTask('deploy-s3', 'deploy to s3', function() {
		var branch = grunt.option("branch");
		grunt.config("awsAccessKey", grunt.option("awsAccessKey"));
		grunt.config("awsSecretKey", grunt.option("awsSecretKey"));
		if (branch !== "master") {
			grunt.config("buildNumber", "-" + grunt.option("build"));
			grunt.task.run("replace:sourceMapArchiveS3");
			grunt.task.run("aws_s3:build");
		} else {
			grunt.task.run("replace:sourceMapReleaseS3");
			grunt.task.run("aws_s3:release");
		}
	});
	grunt.registerTask('deploy', 'deploy to svn', function() {
		grunt.config("svnDir", grunt.option("dir"));
		if (grunt.option("build")) {
			grunt.config("buildNumber", "-" + grunt.option("build"));
		}
		grunt.task.run("push_svn");
	});
};
