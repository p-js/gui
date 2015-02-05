/* jshint expr:true */
/* global GUI, chai, describe, it, _*/
var expect = chai.expect;
describe("Toggleable Button", function() {
	var ToggleableButton = GUI.ToggleableButton,
		css = {
			on: "on",
			off: "off"
		},
		eventType = "event:type",
		options = {
			css: css,
			eventType: eventType
		},
		test;
	it("should exist", function() {
		expect(ToggleableButton).to.be.a("function");
	});
	it("should throw an error with missing arguements", function() {
		expect(function() {
			test = new ToggleableButton();
		}).to.throw("no css specified for button");
		expect(function() {
			test = new ToggleableButton({
				css: {}
			});
		}).to.throw("no event type specified for button");
	});
	it("should instantiate with the correct style", function() {
		test = new ToggleableButton(_.clone(options));
		expect(test.$el.hasClass(css.on), "should have on").to.be.false;
		expect(test.$el.hasClass(css.off), "should have off").to.be.true;
	});
	it("should instantiate with the correct style with initial state passed", function() {
		test = new ToggleableButton(_.extend(_.clone(options), {
			on: true
		}));
		expect(test.isOn).to.be.true;
		expect(test.$el.hasClass(css.on), "should have on").to.be.true;
		expect(test.$el.hasClass(css.off), "should have off").to.be.false;
	});
	it("should dispatch event with correct value", function(done) {
		test = new ToggleableButton(_.clone(options));
		expect(test.isOn).to.be.false;
		test.on(eventType, function(event) {
			expect(event.target.isOn).to.be.false;
			expect(event.type).to.equal(eventType);
			expect(event.data).to.be.false;
			done();
		});
		test.$el.click();
	});
	it("should dispatch correct state after multiple clicks", function(done) {
		test = new ToggleableButton(_.clone(options));
		expect(test.isOn).to.be.false;
		test.$el.click();
		expect(test.isOn).to.be.true;
		test.on(eventType, function(event) {
			expect(event.target.isOn).to.be.true;
			expect(event.type).to.equal(eventType);
			expect(event.data).to.be.true;
			done();
		});
		test.$el.click();
		expect(test.isOn).to.be.false;
	});
	it("should dispatch correct state after multiple clicks with custom on and off events", function(done) {
		test = new ToggleableButton(_.extend(_.clone(options), {
			eventType: {
				on: "on:test",
				off: "off:test"
			}
		}));
		expect(test.isOn).to.be.false;
		test.once("off:test", function(event) {
			expect(event.target.isOn).to.be.false;
			expect(event.type).to.equal("off:test");
			expect(event.data).to.be.false;
			done();
		});
		test.$el.click();
		expect(test.isOn).to.be.true;
		test.once("on:test", function(event) {
			expect(event.target.isOn).to.be.true;
			expect(event.type).to.equal("on:test");
			expect(event.data).to.be.true;
			done();
		});
		test.$el.click();
		expect(test.isOn).to.be.false;
	});
});
