/* jshint node:true */
module.exports = {
	options: {
		trymkdir: true,
		remove: false
	},
	release: {
		src: './dist',
		dest: '<%= grunt.config("svnDir") %>/<%= package.version %><%= grunt.config("buildNumber") %>',
		tmp: './.build'
	}
};
