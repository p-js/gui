/* exported GUI */
/* global MTVNPlayer*/
var GUI = function(require) {
	// Handlebars is provided in the mtvn-util package.
	// GUI is loaded in to the page separately, so we have to go 
	// through a package manager.
	// If we compile it in, we could use a scoped var. 
	/* jshint unused:false */
	var Handlebars = require("Handlebars"),
		$ = require("$"),
		_ = require("_"),
		Backbone = require("Backbone");
	this["Templates"] = this["Templates"] || {};
	
	this["Templates"]["src/template.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
	  this.compilerInfo = [4,'>= 1.0.0'];
	helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
	  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;
	
	function program1(depth0,data) {
	  
	  var buffer = "", stack1;
	  buffer += "\n	    <a class=\"mtvn-ad-gui-learn-more\" href=\"";
	  if (stack1 = helpers.buttonLink) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
	  else { stack1 = depth0.buttonLink; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
	  buffer += escapeExpression(stack1)
	    + "\" target=\"";
	  if (stack1 = helpers.buttonTarget) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
	  else { stack1 = depth0.buttonTarget; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
	  buffer += escapeExpression(stack1)
	    + "\">\n	    	";
	  if (stack1 = helpers.buttonText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
	  else { stack1 = depth0.buttonText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
	  buffer += escapeExpression(stack1)
	    + "\n	    </a>\n	    ";
	  return buffer;
	  }
	
	  buffer += "<div class=\"mtvn-reset\">\n<div class=\"mtvn-ad-gui\">\n	<div class=\"mtvn-ad-gui-container\">\n	    <span class=\"mtvn-ad-gui-countdown\"></span>\n	    ";
	  stack1 = helpers['if'].call(depth0, depth0.buttonLink, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
	  if(stack1 || stack1 === 0) { buffer += stack1; }
	  buffer += "\n	</div>\n</div>\n</div>";
	  return buffer;
	  });
	
	this["Templates"]["src/controls/template.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
	  this.compilerInfo = [4,'>= 1.0.0'];
	helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
	  
	
	
	  return "<div class=\"mtvn-controls-play mtvn-controls-button\"></div>\n<div class=\"mtvn-controls-slider\">\n	<div class=\"mtvn-controls-slider-time\"></div>\n	<div class=\"mtvn-controls-slider-progress-container\">\n		<div class=\"mtvn-controls-slider-buffered\"></div>\n		<div class=\"mtvn-controls-slider-progress\"></div>\n	</div>\n	<div class=\"mtvn-controls-slider-background\"></div>\n	<div class=\"mtvn-controls-slider-thumb-container\" style=\"left:0px;\">\n		<div class=\"mtvn-controls-slider-thumb\"/>\n	</div>\n</div>\n<div class=\"mtvn-controls-fullscreen mtvn-controls-button\"></div>";
	  });
	/* global _, $ */
	var DEFAULT_TEMPLATE = this.Templates["src/template.html"],
		DEFAULT_COPY = {
			countdownText: "Your content will resume in {{time}}.",
			messageText: "Your content will resume shortly.",
			buttonText: "Learn More",
			buttonTarget: "_blank"
		};
	
	function AdDisplay(options) {
		this.options = _.defaults(options || {}, DEFAULT_COPY);
		this.render(this.options);
	}
	
	AdDisplay.prototype = {
		render: function(options) {
			var template = options.template || DEFAULT_TEMPLATE,
				$el = this.$el = $(template(options));
			this.$countdown = $el.find(".mtvn-ad-gui-countdown");
			this.renderMessage(options.time);
			return $el;
		},
		renderMessage: function(time) {
			var messageTempate = this.options[_.isUndefined(time) ? "messageText" : "countdownText"],
				countdown = _.template(messageTempate, {
					time: time
				}, {
					interpolate: /\{\{(.+?)\}\}/g
				});
			this.$countdown.text(countdown);
		}
	};
	/* global _, Backbone, $*/
	/* exported Button */
	var Button = Backbone.View.extend({
		tagName:"div",
		initialize:function() {
			this.$el.addClass("mtvn-controls-button");
		}
	});
	/* exported Controls */
	/* global _, Backbone, $, Button, Events, Slider*/
	var CONTROLS_TEMPLATE = this.Templates["src/controls/template.html"];
	var Controls = Backbone.View.extend({
		tagName: "div",
		className: "mtvn-controls",
		events: {
			"click .mtvn-controls-play": "play",
			"click .mtvn-controls-pause": "pause"
		},
		initialize: function() {
			_.bindAll(this, "play");
			this.render();
		},
		render: function() {
			this.$el.html($(CONTROLS_TEMPLATE()));
		},
		createSlider: function() {
			this.slider = new Slider({
				el: this.$el.find(".mtvn-controls-slider")
			});
		},
		play: function() {
			var $el = this.$el.find(".mtvn-controls-play");
			$el.removeClass("mtvn-controls-play");
			$el.addClass("mtvn-controls-pause");
			this.trigger(Events.PLAY);
		},
		pause: function() {
			var $el = this.$el.find(".mtvn-controls-pause");
			$el.removeClass("mtvn-controls-pause");
			$el.addClass("mtvn-controls-play");
			this.trigger(Events.PAUSE);
		}
	});
	/* exported Events */
	var Events = {
		PLAY: "PLAY",
		PAUSE: "PAUSE",
		SEEK: "SEEK"
	};
	/* global _, Backbone, $, Events*/
	/* exported Slider */
	var Slider = function() {
		var thumbContainer = "mtvn-controls-slider-thumb-container",
			thumb = "mtvn-controls-slider-thumb",
			thumbActive = "mtvn-controls-slider-thumb-active";
		return Backbone.View.extend({
			dragging: false,
			duration: 1000,
			tagName: "div",
			className: "mtvn-controls-slider",
			events: {
				"touchstart .mtvn-controls-slider-thumb-container": "thumbActive",
				"touchmove .mtvn-controls-slider-thumb-container": "thumbMove",
				"touchend .mtvn-controls-slider-thumb-container": "thumbInactive"
			},
			initialize: function() {
				// _.bindAll(this, "sendSeek");
				this.render();
				this.$thumbContainer = this.$el.find("." + thumbContainer);
				this.$progress = this.$el.find(".mtvn-controls-slider-progress");
				this.$buffer = this.$el.find(".mtvn-controls-slider-buffered");
				this.containerOffset = this.$el[0].offsetLeft;
			},
			render: function() {
				//this.$el.html($(SLIDER_TEMPLATE()));
			},
			thumbActive: function(event) {
				event.preventDefault();
				var $el = this.$el.find("." + thumb);
				$el.removeClass(thumb);
				$el.addClass(thumbActive);
				this.dragging = true;
				this.offsetWidth = this.$el[0].offsetWidth;
				this.$buffer.css({
					width: 0
				});
			},
			thumbMove: function(event) {
				event.preventDefault();
				var moveTo = event.originalEvent.touches[0].clientX;
				if (!this.containerOffset) {
					this.containerOffset = this.$el.offset().left;
				}
				this.moveThumb(moveTo - this.containerOffset);
			},
			moveThumb: function(moveTo) {
				var left = Math.max(0, moveTo);
				left = Math.min(left, this.offsetWidth);
				this.$thumbContainer.css({
					left: left
				});
				this.$progress.css({
					width: left
				});
			},
			thumbInactive: function(event) {
				event.preventDefault();
				var $el = this.$el.find("." + thumbActive);
				$el.removeClass(thumbActive);
				$el.addClass(thumb);
				this.dragging = false;
				this.sendSeek();
			},
			getTimeFromThumb: function() {
				var thumbLeft = parseFloat(this.$thumbContainer.css("left"), 10),
					p = thumbLeft / this.offsetWidth;
				return p * this.duration;
			},
			sendSeek: function() {
				var seekTo = this.getTimeFromThumb();
				console.log("slider.js:43 seek:", seekTo);
				this.trigger(Events.SEEK, seekTo);
			}
		});
	}();
	/* global AdDisplay, Controls, Events */
	return {
		AdDisplay: AdDisplay,
		Controls: Controls,
		Events: Events,
		version: "0.2.0",
		build: "07/16/2013 11:24:22 AM"
	};
}(MTVNPlayer.require);