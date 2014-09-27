/* jshint node:true */
module.exports = {
	main: {
		options: {
			commonJS: true,
			namespace: 'TestData',
			processName: function(filename) {
				return filename.toLowerCase();
			}
		},
		src: ['test/data/*.json'],
		dest: 'dist/test/data/test-data.js'
	}
};
