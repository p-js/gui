/* jshint node:true */
module.exports = function() {
	return {
		options: {
			accessKeyId: '<%= grunt.config("awsAccessKey") %>', // Use the variables
			secretAccessKey: '<%= grunt.config("awsSecretKey") %>', // You can also use env variables
			bucket: "edgeplayer"
		},
		release: {
			expand: true,
			cwd: 'dist/',
			src: ['*.js', '*.css', '*.gui'],
			dest: 'gui/<%= package.version %>/'
		},
		build: {
			expand: true,
			cwd: 'dist/',
			src: ['*.js', '*.css', '*.gui'],
			dest: 'gui/archive/<%= package.version %><%= grunt.config("buildNumber") %>/'
		}
	};
};
