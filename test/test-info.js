/* jshint expr:true */
/* global GUI, chai, describe, it*/
var expect = chai.expect;
describe("TopView", function() {
	var TopView = GUI.TopView;
	it("should instantiate", function() {
		var tp = new TopView();
		expect(tp).to.be.an("object");
	});
});
