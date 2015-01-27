/* jshint expr:true */
/* global GUI, chai, describe, it*/
var expect = chai.expect;
describe("TimeDisplay", function() {
	var TimeDisplay = GUI.TimeDisplay;
	it("should instantiate without args", function() {
		var td = new TimeDisplay();
		expect(td).to.be.an("object");
		expect(td.$el.html()).to.equal("");
	});
	it("should instantiate with options", function() {
		var td = new TimeDisplay({
			playhead: 5,
			duration: 10
		});
		expect(td.playhead).to.equal(5);
		expect(td.duration).to.equal(10);
		expect(td.$el.html()).to.equal('<span class="pjs-info-current-time">00:05</span> / 00:10');
	});
	it("should process the time", function() {
		expect(TimeDisplay.formatTime(0)).to.equal("00:00");
		expect(TimeDisplay.formatTime(5)).to.equal("00:05");
		expect(TimeDisplay.formatTime(60)).to.equal("01:00");
		expect(TimeDisplay.formatTime(65)).to.equal("01:05");
		expect(TimeDisplay.formatTime(3605)).to.equal("01:00:05");
		expect(TimeDisplay.formatTime(3665)).to.equal("01:01:05");
	});
});
