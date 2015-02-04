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
		/**
		 * Run the tests and submit coverage
		 */
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
		/**
		 * For developing and testing
		 */
		test: {
			configFile: configFile,
			frameworks: frameworks,
			plugins: plugins.concat(["karma-growl-reporter"]),
			browsers: browsers,
			reporters: ["mocha", "growl"],
			singleRun: true
		}
	};
};
