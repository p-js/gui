(function(root, factory) {
	/* global exports, module, define, require, MTVNPlayer*/
	if (typeof MTVNPlayer === "object") {
		// GUI is loaded in to the page separately, so we have to go 
		// through a package manager.
		var r = MTVNPlayer.require;
		root.GUI = factory(r("_"), r("$"), r("Handlebars"), r("Backbone"));
	} else if (typeof exports === "object") {
		module.exports = factory(require("lodash"), require("$"), require("Handlebars"), require("Backbone"));
	} else if (typeof define === "function" && define.amd) {
		define(["lodash", "$", "Handlebars", "Backbone"], factory);
	}
}(this, function(_, $, Handlebars, Backbone) {
	/* jshint unused:false */
	/* global GUI */
	/* exported GUI */
	/* global _, $, Handlebars, Backbone*/
	var GUI = {
		version: "0.7.0",
		build: "Mon Mar 17 2014 11:58:17"
	};
	// Handlebars is provided in the mtvn-util package.
	// GUI is loaded in to the page separately, so we have to go 
	// through a package manager.
	// If we compile it in, we could use a scoped var. 
	/* jshint unused:false */
	// templates are written to "this", here we're scoping it.
	var Templates = (function() {
		this["Templates"] = this["Templates"] || {};
		
		this["Templates"]["src/ad-display/template.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
		  
		  
		  return "\n<div class=\"mtvn-controls-cc mtvn-controls-button\"></div>\n";
		  }
		
		function program7(depth0,data) {
		  
		  
		  return "\n<div class=\"mtvn-controls-volume mtvn-controls-button\"></div>\n";
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
		    + "-segment-container\"></div>\n	<div class=\"";
		  if (stack1 = helpers.slider) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
		  else { stack1 = depth0.slider; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
		  buffer += escapeExpression(stack1)
		    + "-thumb-container\" style=\"left:0px;\">\n		<div class=\"";
		  if (stack1 = helpers.slider) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
		  else { stack1 = depth0.slider; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
		  buffer += escapeExpression(stack1)
		    + "-tool-tip-container\">\n			<div class=\"";
		  if (stack1 = helpers.slider) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
		  else { stack1 = depth0.slider; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
		  buffer += escapeExpression(stack1)
		    + "-tool-tip-background\"></div>\n			<div class=\"";
		  if (stack1 = helpers.slider) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
		  else { stack1 = depth0.slider; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
		  buffer += escapeExpression(stack1)
		    + "-tool-tip-time\"></div>\n		</div>\n		<div class=\"";
		  if (stack1 = helpers.slider) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
		  else { stack1 = depth0.slider; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
		  buffer += escapeExpression(stack1)
		    + "-thumb\"/>\n	</div>\n</div>\n";
		  stack1 = helpers['if'].call(depth0, depth0.ccEnabled, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
		  if(stack1 || stack1 === 0) { buffer += stack1; }
		  buffer += "\n";
		  stack1 = helpers['if'].call(depth0, depth0.showVolume, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
		  if(stack1 || stack1 === 0) { buffer += stack1; }
		  buffer += "\n<div class=\"mtvn-controls-fullscreen mtvn-controls-button\"></div>";
		  return buffer;
		  });
		
		this["Templates"]["src/top-panel/top-panel.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
		  this.compilerInfo = [4,'>= 1.0.0'];
		helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
		  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;
		
		function program1(depth0,data) {
		  
		  var buffer = "";
		  buffer += "\n	<div class=\"mtvn-tp-share-divider\"></div>\n	<div class=\"mtvn-tp-share-item mtvn-tp-"
		    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
		    + "\" data-share-id=\""
		    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
		    + "\"></div>\n	";
		  return buffer;
		  }
		
		  buffer += "<div class=\"mtvn-tp-container\">\n	<span class=\"mtvn-tp-metadata\">";
		  if (stack1 = helpers.metadata) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
		  else { stack1 = depth0.metadata; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
		  if(stack1 || stack1 === 0) { buffer += stack1; }
		  buffer += "</span>\n	<div class=\"mtvn-tp-share\">\n	";
		  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
		  if (stack1 = helpers.share) { stack1 = stack1.call(depth0, options); }
		  else { stack1 = depth0.share; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
		  if (!helpers.share) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
		  if(stack1 || stack1 === 0) { buffer += stack1; }
		  buffer += "\n	</div>\n</div>";
		  return buffer;
		  });
		return this.Templates;
	}).apply({});
	/* global _, $, Templates*/
	var DEFAULT_TEMPLATE = Templates["src/ad-display/template.html"],
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
	/* global _ */
	/* exported TopPanelModel */
	var TopPanelModel = {
	    availableShareItems: ["facebook", "twitter", "email"],
	    validate: function(options) {
	        if (options.share) {
	            options.share = _.intersection(options.share, TopPanelModel.availableShareItems);
	        }
	        return options;
	    }
	};
	/* global Backbone, Templates, $, TopPanelModel*/
	/* exported TopPanel */
	var TopPanel = Backbone.View.extend({
	    template: Templates["src/top-panel/top-panel.html"],
	    tagName: "div",
	    className: "mtvn-tp",
	    events: {
	        "click .mtvn-tp-share": "onShare"
	    },
	    initialize: function(options) {
	        this.options = TopPanelModel.validate(options || {});
	        this.render();
	    },
	    setMetadata: function(html) {
	        this.$(".mtvn-tp-metadata").html(html);
	    },
	    render: function() {
	        this.$el.html($(this.template(this.options)));
	    },
	    onShare: function(event) {
	        this.trigger(TopPanel.Events.SHARE, $(event.target).data("share-id"));
	    }
	}, {
	    Events: {
	        SHARE: "share"
	    }
	});
	/* exported Util */
	var Util = function() {
		var isTouchDevice = 'ontouchstart' in window || 'onmsgesturechange' in window;
		return {
			isTouchDevice: isTouchDevice,
			getClientX: isTouchDevice ? function(event) {
				return event.originalEvent.touches[0].clientX;
			} : function(event) {
				return event.clientX;
			},
			getClientY: isTouchDevice ? function(event) {
				return event.originalEvent.touches[0].clientY;
			} : function(event) {
				return event.clientY;
			},
			invokeIfNumber: function(func, n) {
				if (isNaN(n)) {
					parseFloat(n, 10);
				}
				if (!isNaN(n)) {
					console.log("INVOKE~~~ util.js:21 n", n);
					func(n);
				}
			},
			formatTime: function(sec) {
				if (isNaN(sec)) {
					return "00:00";
				}
				var h = Math.floor(sec / 3600),
					m = Math.floor((sec % 3600) / 60),
					s = Math.floor((sec % 3600) % 60);
				return (h === 0 ? "" : (h < 10 ? "0" + h + ":" : h + ":")) + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
			}
		};
	}();
	/* exported ClosedCaptionButton */
	/* global Backbone, Events*/
	var ClosedCaptionButton = function() {
		return Backbone.View.extend({
			ccEnabled: false,
			className: "mtvn-controls-cc",
			events: {
				"click": "toggle"
			},
			toggle: function() {
				this.trigger(Events.CC, {
					type: Events.CC
				});
			}
		});
	}();
	/* exported Controls */
	/* global _, Backbone, $, Events, Slider, PlayPauseButton, VolumeButton, ClosedCaptionButton, Templates*/
	var Controls = (function() {
		var CONTROLS_TEMPLATE = Templates["src/controls/template.html"],
			css = {
				slider: "mtvn-controls-slider",
				playPause: "mtvn-controls-play-pause",
				volume: "mtvn-controls-volume",
				cc: "mtvn-controls-cc"
			};
		return Backbone.View.extend({
			tagName: "div",
			className: "mtvn-controls",
			events: {
				"click .mtvn-controls-fullscreen": "onFullscreen"
			},
			initialize: function(options) {
				this.options = options;
				_.bindAll(this, "sendEvent");
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
					el: this.$("." + css.playPause),
					paused: options.paused
				});
				this.listenTo(this.playPauseButton, Events.PLAY, this.sendEvent);
				this.listenTo(this.playPauseButton, Events.PAUSE, this.sendEvent);
				// SLIDER
				this.slider = new Slider({
					el: this.$("." + css.slider),
					playhead: options.playhead,
					durations: options.durations
				});
				this.listenTo(this.slider, Events.SEEK, this.sendEvent);
				// VOLUME
				this.volumeButton = new VolumeButton({
					volume: options.volume,
					el: this.$("." + css.volume)
				});
				this.listenTo(this.volumeButton, Events.MUTE, this.sendEvent);
				this.listenTo(this.volumeButton, Events.UNMUTE, this.sendEvent);
				// CC
				this.closedCaptionButton = new ClosedCaptionButton({
					ccEnabled: options.ccEnabled,
					el: this.$("." + css.cc)
				});
				this.listenTo(this.closedCaptionButton, Events.CC, this.sendEvent);
			},
			setVolume: function(volume) {
				this.volumeButton.setVolume(volume);
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
			setBuffered: function(buffered) {
				this.slider.setBuffered(buffered);
			},
			setDurations: function(durations) {
				this.slider.setDurations(durations);
			},
			sendEvent: function(event) {
				event.target = this;
				this.trigger(event.type, event);
			},
			onFullscreen: function() {
				this.sendEvent({
					type: Events.FULLSCREEN
				});
			}
		});
	})();
	/* exported Events */
	var Events = {
		PLAY: "PLAY",
		PAUSE: "PAUSE",
		FULLSCREEN: "FULLSCREEN",
		CC: "CC",
		MUTE: "MUTE",
		VOLUME: "VOLUME", // not implemented
		UNMUTE: "UNMUTE",
		SEEK: "SEEK"
	};
	/* exported VolumeButton */
	/* global Backbone, Events*/
	var VolumeButton = (function() {
		var css = {
			unmute: "mtvn-controls-unmute",
			mute: "mtvn-controls-mute"
		};
		return Backbone.View.extend({
			events: {
				"click": "toggle"
			},
			initialize: function(options) {
				this.options = options;
				this.setVolume(isNaN(this.options.volume) ? 1 : this.options.volume);
			},
			setVolume: function(volume) {
				var showMute = volume > 0;
				this.$el.toggleClass(css.mute, showMute);
				this.$el.toggleClass(css.unmute, !showMute);
			},
			toggle: function() {
				var $el = this.$el,
					showMute = $el.hasClass(css.unmute),
					eventName = showMute ? Events.UNMUTE : Events.MUTE;
				$el.toggleClass(css.mute, showMute);
				$el.toggleClass(css.unmute, !showMute);
				this.trigger(eventName, {
					type: eventName
				});
			}
		});
	})();
	/* exported PlayPauseButton */
	/* global Backbone, Events*/
	var PlayPauseButton = function() {
		var css = {
			play: "mtvn-controls-play",
			pause: "mtvn-controls-pause"
		};
		return Backbone.View.extend({
			initialize: function(options) {
				this.options = options;
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
				this.trigger(eventName, {
					type: eventName
				});
			}
		});
	}();
	/* global _, $, Backbone, Events, Util*/
	/* exported Slider */
	var Slider = (function() {
		var RESIZE = "slider:resize",
			thumb = "mtvn-controls-slider-thumb",
			thumbActive = "mtvn-controls-slider-thumb-active",
			// full ep mixin
			segementedScrubber = (function() {
				return {
					isSegmented: true,
					createDividers: function() {
						this.$dividerContainer.empty();
						_.each(this.durations, function() {
							this.$dividerContainer.append($("<div class=\"mtvn-controls-slider-segment\"/>"));
						}, this);
					},
					moveDividers: function() {
						var dividers = this.$dividerContainer.children();
						_.each(this.durations, function(duration, index) {
							$(dividers[index]).css({
								left: this.getLeftFromPlayhead(duration)
							});
						}, this);
					}
				};
			})();
		return Backbone.View.extend({
			/**
			 * The thumb is visible and the slider is clickable when enabled.
			 */
			enabled: true,
			/**
			 * The thumb is being pressed
			 */
			dragging: false,
			/**
			 * Needs to be updated before the playhead will move
			 */
			duration: 0,
			/**
			 * The position of the slider
			 */
			playhead: 0,
			/**
			 * The width of the slider, cached as to not call offsetWidth repeatedly
			 */
			sliderWidth: 0,
			events: function() {
				return _.extend({
						"click": "onSliderClick"
					},
					Util.isTouchDevice ? {
						// TOUCH EVENTS
						"touchstart .mtvn-controls-slider-thumb-container": "onThumbActive",
						"touchmove .mtvn-controls-slider-thumb-container": "onThumbMove",
						"touchend .mtvn-controls-slider-thumb-container": "onThumbInactive"
					} : {
						// MOUSE EVENTS
						"mousedown .mtvn-controls-slider-thumb-container": "onThumbActive"
					});
			},
			initialize: function(options) {
				this.options = options;
				if (!Util.isTouchDevice) {
					_.bindAll(this, "onThumbMove", "onThumbInactive", "onSliderClick");
					var $document = $(document);
					this.listenTo($document, "mousemove", this.onThumbMove);
					this.listenTo($document, "mouseup", this.onThumbInactive);
				}
				this.render();
				/**
				 * Contains the thumb and the tooltop.
				 */
				this.$thumbContainer = this.$(".mtvn-controls-slider-thumb-container");
				/**
				 * Meets the thumb visually.
				 */
				this.$progress = this.$(".mtvn-controls-slider-progress");
				/**
				 * The amount buffered.
				 */
				this.$buffered = this.$(".mtvn-controls-slider-buffered");
				/**
				 * The time and duration.
				 */
				this.$timeDisplay = this.$(".mtvn-controls-slider-time-display");
				/**
				 * Tool tip container
				 */
				this.$toolTipContainer = this.$(".mtvn-controls-slider-tool-tip-container");
				this.$toolTipContainer.hide();
				/**
				 * Tool tip time
				 */
				this.$toolTipTime = this.$(".mtvn-controls-slider-tool-tip-time");
				/**
				 * Segment marker container
				 */
				this.$dividerContainer = this.$(".mtvn-controls-slider-segment-container");
				/**
				 * Don't fire measure too often. Perhaps a forced measure can be called from the player code.
				 */
				this.throttledMeasure = _.throttle(this.measure, 1500);
				this.setDurations(this.options.durations);
				this.setPlayhead(this.options.playhead);
			},
			setPlayhead: function(playhead) {
				if (!this.dragging && !this.seeking) {
					if (isNaN(playhead)) {
						playhead = parseFloat(playhead, 10);
					}
					if (!isNaN(playhead)) {
						this.throttledMeasure();
						this.playhead = Math.max(0, Math.min(playhead, this.duration));
						this.moveThumb(this.getLeftFromPlayhead(playhead));
						this.updateTime();
					}
				}
			},
			setBuffered: function(buffered) {
				if (!this.dragging && !this.seeking && this.duration > 1) {
					var left = Math.max(0, this.getLeftFromPlayhead(buffered));
					this.throttledMeasure();
					left = Math.min(left, this.sliderWidth);
					this.$buffered.css({
						width: left
					});
				}
			},
			measure: function() {
				var sliderWidth = this.$el[0].offsetWidth;
				if (sliderWidth !== this.sliderWidth) {
					this.sliderWidth = sliderWidth;
					this.trigger(RESIZE, sliderWidth);
				}
			},
			setDurations: function(durations) {
				if (!_.isArray(durations)) {
					return;
				}
				if (durations.length > 1 && !this.isSegmented) {
					_.extend(this, segementedScrubber);
				}
				var currentDuration = 0;
				this.durations = _.map(durations, function(num) {
					currentDuration += num;
					return currentDuration;
				});
				this.duration = this.durations.pop();
				this.throttledMeasure();
				if (this.isSegmented) {
					this.createDividers();
					this.moveDividers();
					this.$dividerContainer.show();
					this.on(RESIZE, _.bind(this.moveDividers, this));
				} else {
					this.$dividerContainer.hide();
				}
				this.updateTime();
			},
			setEnabled: function(enabled) {
				if (enabled !== this.enabled) {
					if (enabled) {
						this.$thumbContainer.show();
						this.$timeDisplay.css({
							visibility: "visible"
						});
						this.$buffered.show();
						this.$progress.show();
					} else {
						this.$thumbContainer.hide();
						this.$timeDisplay.css({
							visibility: "hidden"
						});
						this.$progress.hide();
						this.$buffered.hide();
					}
				}
				this.enabled = enabled;
			},
			onSliderClick: function(event) {
				if (!this.enabled) {
					return;
				}
				var moveTo = event.x;
				if (!this.containerOffset) {
					this.containerOffset = this.$el.offset().left;
				}
				this.moveThumb(moveTo - this.containerOffset);
			},
			onThumbActive: function(event) {
				event.preventDefault();
				var $el = this.$("." + thumb);
				$el.removeClass(thumb);
				$el.addClass(thumbActive);
				this.dragging = true;
				this.throttledMeasure();
				this.$buffered.css({
					width: 0
				});
				this.$toolTipTime.html(Util.formatTime(this.playhead));
				this.$toolTipContainer.show();
			},
			onThumbMove: function(event) {
				if (this.dragging) {
					event.preventDefault();
					var moveTo = Util.getClientX(event);
					if (!this.containerOffset) {
						this.containerOffset = this.$el.offset().left;
					}
					this.moveThumb(moveTo - this.containerOffset);
				}
			},
			onThumbInactive: function(event) {
				if (this.dragging) {
					event.preventDefault();
					var $el = this.$("." + thumbActive);
					$el.removeClass(thumbActive);
					$el.addClass(thumb);
					this.dragging = false;
					this.sendSeek();
					this.$toolTipContainer.hide();
				}
			},
			moveThumb: function(moveTo) {
				var left = Math.max(0, moveTo);
				left = Math.min(left, this.sliderWidth);
				this.$thumbContainer.css({
					left: left
				});
				this.$progress.css({
					width: left
				});
				this.$toolTipTime.html(Util.formatTime(this.getTimeFromThumb(left)));
			},
			getLeftFromPlayhead: function(playhead) {
				if (!playhead) {
					return 0;
				}
				var percent = playhead / Math.max(1, this.duration);
				return percent * this.sliderWidth;
			},
			getTimeFromThumb: function(thumbLeft) {
				if (isNaN(thumbLeft)) {
					thumbLeft = parseFloat(this.$thumbContainer.css("left"), 10);
				}
				var p = thumbLeft / this.sliderWidth;
				return p * this.duration;
			},
			updateTime: function() {
				this.$timeDisplay.html(this.getTimeDisplayText());
			},
			getTimeDisplayText: function() {
				return "<span class=\"mtvn-controls-slider-current-time\">" + Util.formatTime(this.playhead) + "</span> / " + Util.formatTime(this.duration);
			},
			sendSeek: function() {
				var playhead = this.playhead = this.getTimeFromThumb();
				this.updateTime();
				this.trigger(Events.SEEK, {
					type: Events.SEEK,
					data: playhead
				});
			}
		});
	})();
	/* exported VolumeButton */
	/* global Backbone, Events*/
	var VolumeButton = (function() {
		var css = {
			unmute: "mtvn-controls-unmute",
			mute: "mtvn-controls-mute"
		};
		return Backbone.View.extend({
			events: {
				"click": "toggle"
			},
			initialize: function(options) {
				this.options = options;
				this.setVolume(isNaN(this.options.volume) ? 1 : this.options.volume);
			},
			setVolume: function(volume) {
				var showMute = volume > 0;
				this.$el.toggleClass(css.mute, showMute);
				this.$el.toggleClass(css.unmute, !showMute);
			},
			toggle: function() {
				var $el = this.$el,
					showMute = $el.hasClass(css.unmute),
					eventName = showMute ? Events.UNMUTE : Events.MUTE;
				$el.toggleClass(css.mute, showMute);
				$el.toggleClass(css.unmute, !showMute);
				this.trigger(eventName, {
					type: eventName
				});
			}
		});
	})();
	/* global AdDisplay, Controls, Events, TopPanel */
	GUI.AdDisplay = AdDisplay;
	GUI.Controls = Controls;
	GUI.TopPanel = TopPanel;
	GUI.Events = Events;
	return GUI;
}));