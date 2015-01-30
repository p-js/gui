/* jshint expr:true */
/* global GUI, chai, describe, it*/
var expect = chai.expect;
describe("TopView", function() {
	var TopView = GUI.TopView;
	it("should instantiate without args", function() {
		var tp = new TopView();
		expect(tp).to.be.an("object");
	});
	it("should contain trigger share events ", function() {
		var tp = new TopView({
			metadata: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
			share: ["facebook", "twitter", "email"]
		});
	});
});
