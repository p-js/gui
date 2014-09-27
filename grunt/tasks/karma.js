/* jshint node:true */
module.exports = function(grunt, options) {
	var configFile = "karma.conf.js",
		frameworks = ["mocha"],
		plugins = [
			"karma-mocha",
			"karma-mocha-reporter",
			"karma-phantomjs-launcher"
		],
		browsers = ["PhantomJS"],
		preprocessors = {};
	preprocessors["dist/" + options.package.name + ".js"] = ["coverage"];
	return {
		ci: {
			configFile: configFile,
			frameworks: frameworks,
			plugins: plugins.concat(["karma-coverage"]),
			browsers: browsers,
			reporters: ["mocha", "coverage"],
			preprocessors: preprocessors,
			coverageReporter: {
				type: "lcov",
				dir: "coverage/"
			},
			singleRun: true
		},
		tdd: {
			configFile: configFile,
			frameworks: frameworks,
			autoWatch: true,
			plugins: plugins.concat(["karma-growl-reporter"]),
			browsers: browsers,
			reporters: ["mocha", "growl"]
		}
	};
};
