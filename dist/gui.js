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
	
	  buffer += "<div class=\"mtvn-ad-gui\">\n	<div class=\"mtvn-ad-gui-container\">\n	    <span class=\"mtvn-ad-gui-countdown\"></span>\n	    ";
	  stack1 = helpers['if'].call(depth0, depth0.buttonLink, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
	  if(stack1 || stack1 === 0) { buffer += stack1; }
	  buffer += "\n	</div>\n</div>";
	  return buffer;
	  });
	
	this["Templates"]["src/controls/template.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
	  this.compilerInfo = [4,'>= 1.0.0'];
	helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
	  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;
	
	function program1(depth0,data) {
	  
	  
	  return "\n<div class=\"mtvn-controls-live mtvn-controls-button\"></div>\n";
	  }
	
	function program3(depth0,data) {
	  
	  
	  return "\n<div class=\"mtvn-controls-play-pause mtvn-controls-button\"></div>\n";
	  }
	
	function program5(depth0,data) {
	  
	  
	  return "\n<div class=\"mtvn-controls-mute mtvn-controls-button\"></div>\n";
	  }
	
	  buffer += "<!-- controls -->\n";
	  stack1 = helpers['if'].call(depth0, depth0.live, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
	  if(stack1 || stack1 === 0) { buffer += stack1; }
	  buffer += "\n<div class=\"";
	  if (stack1 = helpers.slider) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
	  else { stack1 = depth0.slider; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
	  buffer += escapeExpression(stack1)
	    + "\">\n	<div class=\"";
	  if (stack1 = helpers.slider) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
	  else { stack1 = depth0.slider; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
	  buffer += escapeExpression(stack1)
	    + "-time-display\"></div>\n	<div class=\"";
	  if (stack1 = helpers.slider) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
	  else { stack1 = depth0.slider; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
	  buffer += escapeExpression(stack1)
	    + "-progress-container\">\n		<div class=\"";
	  if (stack1 = helpers.slider) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
	  else { stack1 = depth0.slider; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
	  buffer += escapeExpression(stack1)
	    + "-buffered\"></div>\n		<div class=\"";
	  if (stack1 = helpers.slider) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
	  else { stack1 = depth0.slider; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
	  buffer += escapeExpression(stack1)
	    + "-progress\"></div>\n	</div>\n	<div class=\"";
	  if (stack1 = helpers.slider) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
	  else { stack1 = depth0.slider; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
	  buffer += escapeExpression(stack1)
	    + "-background\"></div>\n	<div class=\"";
	  if (stack1 = helpers.slider) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
	  else { stack1 = depth0.slider; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
	  buffer += escapeExpression(stack1)
	    + "-thumb-container\" style=\"left:0px;\">\n		<div class=\"";
	  if (stack1 = helpers.slider) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
	  else { stack1 = depth0.slider; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
	  buffer += escapeExpression(stack1)
	    + "-thumb\"/>\n	</div>\n</div>\n";
	  stack1 = helpers['if'].call(depth0, depth0.showVolume, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
	  if(stack1 || stack1 === 0) { buffer += stack1; }
	  buffer += "\n<div class=\"mtvn-controls-fullscreen mtvn-controls-button\"></div>";
	  return buffer;
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
	/* exported Controls */
	/* global _, Backbone, $, Events, Slider, PlayPauseButton, VolumeButton*/
	var Controls = function() {
		var CONTROLS_TEMPLATE = this.Templates["src/controls/template.html"],
			css = {
				slider: "mtvn-controls-slider",
				playPause: "mtvn-controls-play-pause"
	
			};
		return Backbone.View.extend({
			tagName: "div",
			className: "mtvn-controls",
			events: {
				"click .mtvn-controls-volume": "onVolume",
				"click .mtvn-controls-fullscreen": "onFullscreen"
			},
			initialize: function() {
				_.bindAll(this, "onSeek", "sendEvent");
				_.extend(this.options, {
					slider: css.slider
				});
				this.render();
			},
			render: function() {
				var options = this.options;
				this.$el.html($(CONTROLS_TEMPLATE(options)));
				// PLAY PAUSE
				this.playPauseButton = new PlayPauseButton({
					el: this.$el.find("." + css.playPause),
					paused: options.paused
				});
				this.listenTo(this.playPauseButton, Events.PLAY, this.sendEvent);
				this.listenTo(this.playPauseButton, Events.PAUSE, this.sendEvent);
				// SLIDER
				this.slider = new Slider({
					el: this.$el.find("." + css.slider),
					playhead: options.playhead,
					duration: options.duration
				});
				this.listenTo(this.slider, Events.SEEK, this.onSeek);
				// VOLUME
				this.volumeButton = new VolumeButton({
					el: this.$el
				});
				this.listenTo(this.volumeButton, Events.MUTE, this.sendEvent);
				this.listenTo(this.volumeButton, Events.UNMUTE, this.sendEvent);
			},
			setPaused: function(paused) {
				this.playPauseButton.setPaused(paused);
			},
			getPlayhead: function() {
				return this.slider.playhead;
			},
			setPlayhead: function(playhead) {
				this.slider.setPlayhead(playhead);
			},
			setBuffer: function(buffer) {
				this.slider.setBuffer(buffer);
			},
			setDuration: function(duration) {
				this.slider.setDuration(duration);
			},
			sendEvent: function(type, data) {
				this.trigger(type, {
					type: type,
					target: this,
					data: data
				});
			},
			onSeek: function(event) {
				this.sendEvent(Events.SEEK, event);
			},
			onVolume: function(event) {
				this.sendEvent(Events.VOLUME, event);
			},
			onFullscreen: function() {
				this.sendEvent(Events.FULLSCREEN);
			}
		});
	}();
	/* exported Events */
	var Events = {
		PLAY: "PLAY",
		PAUSE: "PAUSE",
		FULLSCREEN: "FULLSCREEN",
		MUTE: "MUTE",
		UNMUTE: "UNMUTE",
		SEEK: "SEEK"
	};
	/* exported PlayPauseButton */
	/* global Backbone, Events*/
	var PlayPauseButton = function() {
		var css = {
			play: "mtvn-controls-play",
			pause: "mtvn-controls-pause"
		};
		return Backbone.View.extend({
			initialize: function() {
				this.$el.addClass(this.options.paused ? css.play : css.pause);
			},
			events: {
				"click": "toggle"
			},
			setPaused: function(isPaused) {
				var $el = this.$el;
				$el.toggleClass(css.play, isPaused);
				$el.toggleClass(css.pause, !isPaused);
			},
			toggle: function() {
				var $el = this.$el,
					showPlay = $el.hasClass(css.pause),
					eventName = !showPlay ? Events.PLAY : Events.PAUSE;
				$el.toggleClass(css.play, showPlay);
				$el.toggleClass(css.pause, !showPlay);
				this.trigger(eventName, eventName);
			}
		});
	}();
	/* global _, Backbone, Events*/
	/* exported Slider */
	var Slider = function() {
		var format = function(sec) {
			if (isNaN(sec)) {
				return "00:00";
			}
			var h = Math.round(sec / 3600),
				m = Math.round((sec % 3600) / 60),
				s = Math.round((sec % 3600) % 60);
			return (h === 0 ? "" : (h < 10 ? "0" + h + ":" : h + ":")) + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
		},
			thumb = "mtvn-controls-slider-thumb",
			thumbActive = "mtvn-controls-slider-thumb-active";
		return Backbone.View.extend({
			dragging: false,
			duration: 0,
			playhead: 0,
			offsetWidth: 0,
			events: {
				"touchstart .mtvn-controls-slider-thumb-container": "onThumbActive",
				"touchmove .mtvn-controls-slider-thumb-container": "onThumbMove",
				"touchend .mtvn-controls-slider-thumb-container": "onThumbInactive"
			},
			initialize: function() {
				_.bindAll(this, "setOffset");
				this.render();
				this.$thumbContainer = this.$el.find(".mtvn-controls-slider-thumb-container");
				this.$progress = this.$el.find(".mtvn-controls-slider-progress");
				this.$buffer = this.$el.find(".mtvn-controls-slider-buffered");
				this.$timeDisplay = this.$el.find(".mtvn-controls-slider-time-display");
				this.setDuration(this.options.duration);
				this.setPlayhead(this.options.playhead);
				_.delay(this.setOffset);
			},
			setPlayhead: function(playhead) {
				if (!this.dragging && !this.seeking) {
					if (isNaN(playhead)) {
						playhead = parseFloat(playhead, 10);
					}
					if(!isNaN(playhead)){
						this.playhead = Math.max(0, Math.min(playhead, this.duration));
						this.moveThumb(this.getLeftFromPlayhead(playhead));
						this.updateTime();
					}
				}
			},
			setBuffer: function(buffer) {
				if (!this.dragging && !this.seeking && this.duration > 1) {
					var left = Math.max(0, this.getLeftFromPlayhead(buffer));
					left = Math.min(left, this.offsetWidth);
					this.$buffer.css({
						width: left
					});
				}
			},
			setDuration: function(duration) {
				if(isNaN(duration)){
					duration = parseFloat(duration, 10);
				}
				if(!isNaN(duration)){
					this.duration = duration;
					this.updateTime();
				}
			},
			onThumbActive: function(event) {
				event.preventDefault();
				var $el = this.$el.find("." + thumb);
				$el.removeClass(thumb);
				$el.addClass(thumbActive);
				this.dragging = true;
				this.setOffset();
				this.$buffer.css({
					width: 0
				});
			},
			onThumbMove: function(event) {
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
			onThumbInactive: function(event) {
				event.preventDefault();
				var $el = this.$el.find("." + thumbActive);
				$el.removeClass(thumbActive);
				$el.addClass(thumb);
				this.dragging = false;
				this.sendSeek();
			},
			setOffset: function() {
				this.offsetWidth = this.$el[0].offsetWidth;
			},
			getLeftFromPlayhead: function(playhead) {
				if (!playhead) {
					return 0;
				}
				var percent = playhead / Math.max(1, this.duration);
				return percent * this.offsetWidth;
			},
			getTimeFromThumb: function() {
				var thumbLeft = parseFloat(this.$thumbContainer.css("left"), 10),
					p = thumbLeft / this.offsetWidth;
				return p * this.duration;
			},
			updateTime: function() {
				this.$timeDisplay.html(this.getTimeDisplayText());
			},
			getTimeDisplayText: function() {
				if (this.options.isLive) {
					return "LIVE";
				} else {
					return "<span class=\"mtvn-controls-slider-current-time\">" + format(this.playhead) + "</span>/" + format(this.duration);
				}
			},
			sendSeek: function() {
				var playhead = this.playhead = this.getTimeFromThumb();
				this.trigger(Events.SEEK, playhead);
			}
		});
	}();
	/* exported VolumeButton */
	/* global Backbone, Events*/
	var VolumeButton = function() {
		var css = {
			unmute: "mtvn-controls-unmute",
			mute: "mtvn-controls-mute"
		};
		return Backbone.View.extend({
			events: {
				"click .mtvn-controls-unmute": "onUnmute",
				"click .mtvn-controls-mute": "onMute"
			},
			onUnmute: function() {
				var $el = this.$el.find("." + css.unmute);
				$el.removeClass(css.unmute);
				$el.addClass(css.mute);
				this.trigger(Events.UNMUTE, Events.UNMUTE);
			},
			onMute: function() {
				var $el = this.$el.find("." + css.mute);
				$el.removeClass(css.mute);
				$el.addClass(css.unmute);
				this.trigger(Events.MUTE, Events.MUTE);
			}
		});
	}();
	/* global AdDisplay, Controls, Events */
	return {
		AdDisplay: AdDisplay,
		Controls: Controls,
		Events: Events,
		version: "0.2.0",
		build: "07/17/2013 12:57:54 PM"
	};
}(MTVNPlayer.require);