/* jshint node:true */
module.exports = {
	options: {
		namespace: 'Templates'
	},
	all: {
		files: {
			'compiled-templates/template.js': [
				'src/ad-display/template.html',
				'src/bottom/template.html',
				'src/share/template.html',
				'src/center-controls/template.html',
				'src/top/template.html'
			]
		}
	}
};
