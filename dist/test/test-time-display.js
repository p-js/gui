/* jshint expr:true */
/* global GUI, chai, describe, it*/
var expect = chai.expect;
describe("Time", function() {
	var Time = GUI.Time;
	it("should process the time", function() {
		expect(Time.format(0)).to.equal("00:00");
		expect(Time.format(5)).to.equal("00:05");
		expect(Time.format(60)).to.equal("01:00");
		expect(Time.format(65)).to.equal("01:05");
		expect(Time.format(3605)).to.equal("01:00:05");
		expect(Time.format(3665)).to.equal("01:01:05");
	});
});
