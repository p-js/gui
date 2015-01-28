/* jshint expr:true */
/* global GUI, chai, describe, it*/
var expect = chai.expect;
describe("TopPanel", function() {
	var TopPanel = GUI.TopPanel;
	it("should instantiate without args", function() {
		var tp = new TopPanel();
		expect(tp).to.be.an("object");
	});
	it("should contain trigger share events ", function() {
		var tp = new TopPanel({
			metadata: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
			share: ["facebook", "twitter", "email"]
		});
	});
});
