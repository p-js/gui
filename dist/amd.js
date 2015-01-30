(function(root, factory) {
	/* global exports, module, define, require*/
	if (typeof exports === "object") {
		module.exports = factory(require("underscore"), require("jquery"), require("handlebars"), require("backbone"));
	} else if (typeof define === "function" && define.amd) {
		define(["underscore", "jquery", "handlebars", "backbone"], factory);
	}
}(this, function(_, $, Handlebars, Backbone) {
	/* jshint unused:false */
	/* global GUI */
	/* exported GUI, Templates */
	// Handlebars is provided the pjs/player project.
	// GUI is loaded in to the page separately, so we have to go 
	// through a package manager.
	// templates are written to "this", here we're scoping it.
	var Templates = (function() {
		this["Templates"] = this["Templates"] || {};
		
		this["Templates"]["src/ad-display/template.html"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
		  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
		  return "    <a class=\"pjs-ad-gui-learn-more\" href=\""
		    + escapeExpression(((helper = (helper = helpers.buttonLink || (depth0 != null ? depth0.buttonLink : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"buttonLink","hash":{},"data":data}) : helper)))
		    + "\" target=\""
		    + escapeExpression(((helper = (helper = helpers.buttonTarget || (depth0 != null ? depth0.buttonTarget : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"buttonTarget","hash":{},"data":data}) : helper)))
		    + "\">\n    	"
		    + escapeExpression(((helper = (helper = helpers.buttonText || (depth0 != null ? depth0.buttonText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"buttonText","hash":{},"data":data}) : helper)))
		    + "\n    </a>\n";
		},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
		  var stack1, buffer = "<div class=\"pjs-ad-gui-container\">\n    <span class=\"pjs-ad-gui-countdown\"></span>\n";
		  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.buttonLink : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
		  if (stack1 != null) { buffer += stack1; }
		  return buffer + "</div>\n";
		},"useData":true});
		
		
		
		this["Templates"]["src/bottom/template.html"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
		  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
		  return "<div class=\"pjs-info-current-time\">00:00</div>\n<div class=\""
		    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
		    + "\">\n	<div class=\""
		    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
		    + "-background\"></div>\n	<div class=\""
		    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
		    + "-progress-container\">\n		<div class=\""
		    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
		    + "-buffered\"></div>\n		<div class=\""
		    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
		    + "-progress\"></div>\n	</div>\n	<div class=\""
		    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
		    + "-segment-container\"></div>\n	<div class=\""
		    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
		    + "-thumb-container\">\n		<div class=\""
		    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
		    + "-thumb\"/>\n	</div>\n</div>\n<div class=\"pjs-info-duration\">00:00</div>\n";
		},"useData":true});
		
		
		
		this["Templates"]["src/share/template.html"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
		  var lambda=this.lambda, escapeExpression=this.escapeExpression;
		  return "<div class=\"pjs-share-item pjs-share-"
		    + escapeExpression(lambda(depth0, depth0))
		    + "\" data-share-id=\""
		    + escapeExpression(lambda(depth0, depth0))
		    + "\"></div>\n";
		},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
		  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing, buffer = "";
		  stack1 = ((helper = (helper = helpers.share || (depth0 != null ? depth0.share : depth0)) != null ? helper : helperMissing),(options={"name":"share","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
		  if (!helpers.share) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
		  if (stack1 != null) { buffer += stack1; }
		  return buffer;
		},"useData":true});
		
		
		
		this["Templates"]["src/center-controls/template.html"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
		  return "	<div class=\"pjs-controls-rewind pjs-controls-button\"></div>\n";
		  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
		  var stack1, buffer = "<div class=\"pjs-gui-center-controls\">\n";
		  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isDVR : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
		  if (stack1 != null) { buffer += stack1; }
		  return buffer + "	<div class=\"pjs-controls-play-pause pjs-controls-button\"></div>\n</div>\n";
		},"useData":true});
		
		
		
		this["Templates"]["src/top/template.html"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
		  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"pjs-flexbox pjs-info-container\">\n	<div class=\"pjs-info-metadata\">";
		  stack1 = ((helper = (helper = helpers.metadata || (depth0 != null ? depth0.metadata : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"metadata","hash":{},"data":data}) : helper));
		  if (stack1 != null) { buffer += stack1; }
		  return buffer + "</div>\n	<div class=\"pjs-controls-share\"></div>\n	<div class=\"pjs-controls-fullscreen\"></div>\n</div>\n";
		},"useData":true});
		return this.Templates;
	}).apply({});
	/* exported Events */
	var Events = {
		PLAY: "PLAY",
		PAUSE: "PAUSE",
		FULLSCREEN: "FULLSCREEN",
		CC: "CC",
		GO_LIVE: "GO_LIVE",
		IS_LIVE: "IS_LIVE",
		MUTE: "MUTE",
		SHARE: "share",
		VOLUME: "VOLUME",
		UNMUTE: "UNMUTE",
		REWIND: "REWIND",
		SEEK: "SEEK"
	};
	/* exported Time */
	var Time = {
		format: function(sec) {
			if (isNaN(sec)) {
				return "00:00";
			}
			var h = Math.floor(sec / 3600),
				m = Math.floor((sec % 3600) / 60),
				s = Math.floor((sec % 3600) % 60);
			return (h === 0 ? "" : (h < 10 ? "0" + h + ":" : h + ":")) + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
		}
	};
	/* exported ClosedCaptionButton */
	/* global Backbone, Events*/
	var ClosedCaptionButton = (function() {
		return Backbone.View.extend({
			ccEnabled: false,
			className: "pjs-controls-cc",
			events: {
				click: "toggle",
				touchstart: "toggle"
			},
			toggle: function(event) {
				event.preventDefault();
				this.trigger(Events.CC, {
					type: Events.CC
				});
			}
		});
	})();
	/* exported PlayPauseButton */
	/* global Backbone*/
	var PlayPauseButton = Backbone.View.extend({
		css: {
			play: "pjs-controls-play",
			pause: "pjs-controls-pause"
		},
		initialize: function(options) {
			this.options = options;
			this.$el.addClass(this.options.paused ? this.css.play : this.css.pause);
		},
		events: {
			click: "toggle",
			touchstart: "toggle"
		},
		setPaused: function(isPaused) {
			var $el = this.$el;
			$el.toggleClass(this.css.play, isPaused);
			$el.toggleClass(this.css.pause, !isPaused);
		},
		toggle: function(event) {
			event.preventDefault();
			var $el = this.$el,
				showPlay = $el.hasClass(this.css.pause);
			$el.toggleClass(this.css.play, showPlay);
			$el.toggleClass(this.css.pause, !showPlay);
		}
	}, {
		isPlayEvent: function($el) {
			return $el.hasClass("pjs-controls-pause");
		}
	});
	/* global _, $, Templates, Backbone*/
	/* exported AdDisplay */
	var AdDisplay = Backbone.View.extend({
		template: Templates["src/ad-display/template.html"],
		tagName: "div",
		className: "pjs-ad-gui",
		events: function() {
			if (this.options.buttonLink === AdDisplay.LEARN_MORE_EVENT_ONLY) {
				return {
					"click .pjs-ad-gui-learn-more": "onLearnMore",
					"touchstart .pjs-ad-gui-learn-more": "onLearnMore",
				};
			}
		},
		initialize: function(options) {
			this.render(options);
		},
		render: function(options) {
			options = this.options = _.defaults(options || {}, AdDisplay.DEFAULT_COPY);
			var template = options.template || this.template;
			this.$el.html($(template(options)));
			this.delegateEvents();
			this.$countdown = this.$(".pjs-ad-gui-countdown");
			this.renderMessage(options.time);
			return this.$el;
		},
		renderMessage: function(options) {
			_.extend(this.options, options);
			var messageTempate = this.getTemplate(this.options),
				countdown = _.template(messageTempate, this.options, {
					interpolate: /\{\{(.+?)\}\}/g
				});
			this.$countdown.text(countdown);
		},
		getTemplate: function(options) {
			var text = options.messageText;
			if (options.time) {
				text = options.countdownText;
			}
			if (options.index >= 0 && options.total > 1) {
				return options.countdownTextWithPosition + " " + text;
			}
			return text;
		},
		onLearnMore: function(event) {
			if (this.options.buttonLink === AdDisplay.LEARN_MORE_EVENT_ONLY) {
				event.preventDefault();
				this.trigger(AdDisplay.Events.LEARN_MORE);
			}
		}
	}, {
		Events: {
			LEARN_MORE: "learn:more"
		},
		LEARN_MORE_EVENT_ONLY: "#",
		DEFAULT_COPY: {
			countdownText: "Your content will resume in {{time}}.",
			countdownTextWithPosition: "Ad {{index + 1}} of {{total}}.",
			messageText: "Your content will resume shortly.",
			buttonText: "Learn More",
			buttonTarget: "_blank"
		}
	});
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
	/* exported TopView */
	var TopView = Backbone.View.extend({
		template: Templates["src/top/template.html"],
		tagName: "div",
		className: "pjs-info",
		initialize: function(options) {
			this.options = TopPanelModel.validate(options || {});
			this.render();
		},
		setMetadata: function(html) {
			this.$(".pjs-info-metadata").html(html);
		},
		render: function() {
			this.$el.html($(this.template(this.options)));
			return this;
		},
		hide: function() {
			this.$el.addClass("pjs-info-panel-hidden");
		},
		show: function() {
			this.$el.removeClass("pjs-info-panel-hidden");
		}
	});
	/* exported CenterView */
	/* global Backbone, $, PlayPauseButton, Templates*/
	var CenterView = Backbone.View.extend({
		template: Templates["src/center-controls/template.html"],
		className: "pjs-gui-center-controls",
		initialize: function(options) {
			this.options = options;
			this.render();
		},
		render: function() {
			var options = this.options;
			this.$el.html($(this.template(options)));
			// PLAY PAUSE 
			this.playPauseButton = new PlayPauseButton({
				el: this.$(".pjs-controls-play-pause"),
				paused: options.paused
			});
		},
		isShowing: function() {
			return !this.$el.hasClass("pjs-controls-hidden");
		},
		hide: function() {
			this.$el.addClass("pjs-controls-hidden");
		},
		show: function() {
			this.$el.removeClass("pjs-controls-hidden");
		}
	});
	/* exported ShareView */
	/* global Backbone, $, Templates*/
	var ShareView = (function() {
		var css = {
			hide: "pjs-share-hidden"
		};
		return Backbone.View.extend({
			tagName: "div",
			template: Templates["src/share/template.html"],
			className: "pjs-gui-center-controls pjs-share",
			initialize: function(options) {
				this.options = options;
				this.render();
			},
			render: function() {
				var options = this.options;
				this.$el.html($(this.template(options)));
			},
			hide: function() {
				this.$el.addClass(css.hide);
			},
			show: function() {
				this.$el.removeClass(css.hide);
			}
		});
	})();
	/* exported Controls */
	/* global _, Backbone, $, Events, Slider, PlayPauseButton, Time, ClosedCaptionButton, Templates*/
	var Controls = (function() {
		/* global _, $, Backbone, Events, Logger*/
		/* exported Slider */
		var Slider = (function() {
			var RESIZE = "slider:resize",
				THUMB_DRAG = "slider:thumb:drag",
				thumb = "pjs-controls-slider-thumb",
				thumbActive = "pjs-controls-slider-thumb-active",
				getPageX = function(event) {
					var pageX = event.pageX;
					if (pageX > 0) {
						return pageX;
					}
					if (event.touches && event.touches.length > 0) {
						return event.touches[0].pageX;
					}
					return 0;
				};
			/* global SliderDVRMixin */
			/* exported SliderDVRMixin */
			/* global Events*/
			var SliderDVRMixin = {
				_isLive: false,
				IS_LIVE_THRESHOLD: 3,
				checkLive: function() {
					var isLive = this.isLive();
					if (this._isLive !== isLive) {
						this.trigger(Events.IS_LIVE, {
							type: Events.IS_LIVE,
							data: isLive,
							target: this
						});
						this._isLive = isLive;
					}
				},
				isLive: function() {
					return this.duration - this.playhead < this.IS_LIVE_THRESHOLD;
				}
			};
			/* global SegmentedSlider */
			/* exported SegmentedSlider */
			/* global _, $ */
			var SegmentedSlider = {
				isSegmented: true,
				createDividers: function() {
					this.$dividerContainer.empty();
					_.each(this.durations, function() {
						this.$dividerContainer.append($("<div class=\"pjs-controls-slider-segment\"/>"));
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
			return Backbone.View.extend({
				logger: new Logger("GUI.Slider"),
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
						"click": "onSliderClick",
						"touchstart": "onSliderClick",
						"touchstart .pjs-controls-slider-thumb-container": "onThumbActive",
						"touchmove .pjs-controls-slider-thumb-container": "onThumbMove",
						"touchend .pjs-controls-slider-thumb-container": "onThumbInactive",
						"mousedown .pjs-controls-slider-thumb-container": "onThumbActive"
					});
				},
				initialize: function(options) {
					this.options = options;
					// handlers in events don't need to be bound.
					_.bindAll(this, "onThumbMove", "onThumbInactive");
					var $document = $(document);
					this.listenTo($document, "mousemove", this.onThumbMove);
					this.listenTo($document, "mouseup", this.onThumbInactive);
					/**
					 * Contains the thumb and the tooltop.
					 */
					this.$thumbContainer = this.$(".pjs-controls-slider-thumb-container");
					/**
					 * Meets the thumb visually.
					 */
					this.$progress = this.$(".pjs-controls-slider-progress");
					/**
					 * The amount buffered.
					 */
					this.$buffered = this.$(".pjs-controls-slider-buffered");
					/**
					 * Segment marker container
					 */
					this.$dividerContainer = this.$(".pjs-controls-slider-segment-container");
					/**
					 * Don't fire measure too often. Perhaps a forced measure can be called from the player code.
					 */
					this.throttledMeasure = _.throttle(this.measure, 1500);
					this.throttledRender = _.throttle(this.render, 250);
					this.setDurations(this.options.durations);
					this.setPlayhead(this.options.playhead);
					if (options.isDVR) {
						_.extend(this, SliderDVRMixin);
					} else if (options.isLive) {
						this.setEnabled(false);
					}
				},
				setPlayhead: function(playhead) {
					if (!this.dragging && !this.seeking) {
						if (isNaN(playhead)) {
							playhead = parseFloat(playhead, 10);
						}
						if (!isNaN(playhead)) {
							playhead = Math.round(playhead * 100) / 100;
							this.playhead = Math.max(0, Math.min(playhead, this.duration));
							this.throttledRender();
						}
					}
				},
				setDurations: function(durations) {
					if (!_.isArray(durations)) {
						return;
					}
					if (!this.options.isLive && durations.length > 1 && !this.isSegmented) {
						_.extend(this, SegmentedSlider);
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
					this.throttledRender();
				},
				render: function() {
					if (this.dragging || this.seeking) {
						return;
					}
					this.checkLive();
					this.throttledMeasure();
					this.moveThumb(this.getLeftFromPlayhead(this.isLive() ? this.duration : this.playhead));
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
				isLive: function() {
					return false;
				},
				checkLive: function() {},
				setEnabled: function(enabled) {
					if (enabled !== this.enabled) {
						if (enabled) {
							this.$thumbContainer.show();
							this.$buffered.show();
							this.$progress.show();
						} else {
							this.$thumbContainer.hide();
							this.$progress.hide();
							this.$buffered.hide();
						}
					}
					this.enabled = enabled;
				},
				onSliderClick: function(event) {
					event.preventDefault();
					event.stopPropagation();
					this.logger.info("onSliderClick");
					if (!this.enabled || $(event.target).hasClass(thumb)) {
						// we don't want this to fire as a click event when you click on the thumb.
						return;
					}
					var moveTo = getPageX(event);
					if (!this.containerOffset) {
						this.containerOffset = this.$el.offset().left;
					}
					this.moveThumb(moveTo - this.containerOffset);
					this.sendSeek();
				},
				onThumbActive: function(event) {
					event.preventDefault();
					var $el = this.$("." + thumb);
					$el.addClass(thumbActive);
					this.dragging = true;
					this.throttledMeasure();
					this.$buffered.css({
						width: 0
					});
					this.trigger(THUMB_DRAG, this.playhead);
				},
				onThumbMove: function(event) {
					if (this.dragging) {
						event.preventDefault();
						var moveTo = getPageX(event);
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
						this.dragging = false;
						this.sendSeek();
					}
				},
				moveThumb: function(moveTo) {
					var left = Math.max(0, moveTo);
					left = Math.min(left, this.sliderWidth);
					if (isNaN(left)) {
						return;
					}
					if (Math.abs(this.lastLeft - left) < 0.25) {
						return;
					}
					this.$thumbContainer.css({
						left: left
					});
					this.$progress.css({
						width: left
					});
					this.trigger(THUMB_DRAG, this.getTimeFromThumb(left));
					this.lastLeft = left;
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
				sendSeek: function() {
					this.setPlayhead(this.getTimeFromThumb());
					this.trigger(Events.SEEK, {
						type: Events.SEEK,
						data: this.playhead
					});
				}
			}, {
				Events: {
					THUMB_DRAG: THUMB_DRAG
				}
			});
		})();
		var CONTROLS_TEMPLATE = Templates["src/bottom/template.html"],
			css = {
				hide: "pjs-controls-hidden",
				slider: "pjs-controls-slider",
				playPause: "pjs-controls-play-pause",
				volume: "pjs-controls-volume",
				cc: "pjs-controls-cc"
			},
			addEvents = function(listener, dispatcher, events, cb) {
				_.each(events, function(eventName) {
					listener.listenTo(dispatcher, eventName, cb);
				});
			};
		return Backbone.View.extend({
			tagName: "div",
			className: "pjs-controls",
			events: {
				"click .pjs-controls-fullscreen": "onFullscreen",
				"touchstart .pjs-controls-fullscreen": "onFullscreen",
				"click .pjs-controls-rewind": "onRewind",
				"touchstart .pjs-controls-rewind": "onRewind"
			},
			initialize: function(options) {
				this.options = options;
				_.bindAll(this, "sendEvent", "setPlayheadOnDrag");
				_.extend(this.options, {
					slider: css.slider
				});
				this.render();
			},
			render: function() {
				var options = this.options;
				this.$el.html($(CONTROLS_TEMPLATE(options)));
				this.$currentTime = this.$(".pjs-info-current-time")
					.html(Time.format(options.playhead));
				this.$duration = this.$(".pjs-info-duration");
				// PLAY PAUSE
				this.playPauseButton = new PlayPauseButton({
					el: this.$("." + css.playPause),
					paused: options.paused
				});
				addEvents(this, this.playPauseButton, [Events.PLAY, Events.PAUSE], this.sendEvent);
				// SLIDER
				this.slider = new Slider({
					el: this.$("." + css.slider),
					playhead: options.playhead,
					isLive: options.isLive,
					isDVR: options.isDVR,
					durations: options.durations
				});
				this.setDurations(options.durations);
				// Seek Event
				this.listenTo(this.slider, Events.SEEK, this.sendEvent);
				this.listenTo(this.slider, Slider.Events.THUMB_DRAG, this.setPlayheadOnDrag);
				// CC
				this.closedCaptionButton = new ClosedCaptionButton({
					ccEnabled: options.ccEnabled,
					el: this.$("." + css.cc)
				});
				// CC Event
				this.listenTo(this.closedCaptionButton, Events.CC, this.sendEvent);
			},
			hide: function() {
				this.$el.addClass(css.hide);
			},
			show: function() {
				this.$el.removeClass(css.hide);
			},
			setVolume: function() {
				// N/A until desktop
			},
			setPaused: function(paused) {
				this.playPauseButton.setPaused(paused);
			},
			getPlayhead: function() {
				// used for testing.
				return this.slider.playhead;
			},
			setPlayheadOnDrag: function(playhead) {
				this.$currentTime.html(Time.format(playhead));
			},
			setPlayhead: function(playhead) {
				this.slider.setPlayhead(playhead);
			},
			setBuffered: function(buffered) {
				this.slider.setBuffered(buffered);
			},
			setDurations: function(durations) {
				this.totalDuration = _.reduce(durations, function(memo, duration) {
					return memo + duration;
				}, 0);
				this.$duration.html(Time.format(this.totalDuration));
				this.slider.setDurations(durations);
			},
			sendEvent: function(event) {
				event.target = this;
				this.trigger(event.type, event);
			},
			onRewind: function() {
				event.preventDefault();
				this.sendEvent({
					type: Events.REWIND
				});
			},
			onFullscreen: function(event) {
				event.preventDefault();
				this.sendEvent({
					type: Events.FULLSCREEN
				});
			}
		});
	})();
	/* exported LiveButton */
	/* global Backbone, Events, _*/
	var LiveButton = (function() {
		var css = {
			live: "pjs-controls-is-live",
			golive: "pjs-controls-go-live"
		};
		return Backbone.View.extend({
			initialize: function(options) {
				this.options = options;
				this.setLive(options.isLive);
				_.bindAll(this, "onLiveChange");
			},
			events: {
				click: "toggle",
				touchstart: "toggle"
			},
			onLiveChange: function(event) {
				this.setLive(event.data);
			},
			setLive: function(isLive) {
				var $el = this.$el;
				$el.toggleClass(css.live, isLive);
				$el.toggleClass(css.golive, !isLive);
			},
			toggle: function(event) {
				event.preventDefault();
				if (this.$el.hasClass(css.golive)) {
					this.trigger(Events.GO_LIVE, {
						type: Events.GO_LIVE
					});
				}
			}
		});
	})();
	/* exported VolumeButton */
	/* global Backbone, Events, _, $*/
	var VolumeButton = (function() {
		var css = {
				controls: "pjs-controls",
				unmute: "pjs-controls-unmute",
				mute: "pjs-controls-mute",
				showSlider: "pjs-controls-volume-slider-container-over",
				slider: "pjs-controls-volume-slider",
				thumb: "pjs-controls-volume-slider-foreground"
			},
			isButton = function(event) {
				var $target = $(event.target);
				return $target.hasClass(css.mute) || $target.hasClass(css.unmute);
			};
		return Backbone.View.extend({
			enabled: true,
			defaultEvents: {
				"click": "toggle",
				"touchstart": "toggle"
			},
			mouseEvents: {
				"click .pjs-controls-volume-slider": "onSliderClick",
				"touchstart .pjs-controls-volume-slider": "onSliderClick",
				"mouseover": "onMouseOver",
				"mouseleave": "onMouseOut",
				"mousedown .pjs-controls-volume-slider-foreground": "onThumbActive",
				"touchstart .pjs-controls-volume-slider-foreground": "onThumbActive"
			},
			events: function() {
				if (this.options.showVolumeSlider) {
					return _.extend(this.defaultEvents, this.mouseEvents);
				}
				return this.defaultEvents;
			},
			initialize: function(options) {
				_.bindAll(this, "updateView");
				this.options = options;
				if (options.showVolumeSlider) {
					_.bindAll(this, "onThumbMove", "onThumbInactive", "toggleSlider");
					var $doc = $(document);
					this.listenTo($doc, "mousemove", this.onThumbMove);
					this.listenTo($doc, "mouseup", this.onThumbInactive);
					this.$slider = this.$("." + css.slider);
					this.$container = $(this.$slider.parent());
					this.$thumb = this.$("." + css.thumb);
				}
				this.isMuted = this.options.muted;
				this.setVolume(isNaN(options.volume) ? 0.7 : options.volume);
				_.delay(this.updateView, 100);
			},
			setEnabled: function(enabled) {
				if (this.enabled !== enabled) {
					this.enabled = enabled;
					if (!enabled && this.$container) {
						this.$container.removeClass(css.showSlider);
					}
				}
			},
			onThumbActive: function(event) {
				event.preventDefault();
				this.dragging = true;
			},
			getElementOffset: function() {
				if (!this.elOffset) {
					var offset = this.$el.offset();
					if (offset.width > 0) {
						this.elOffset = offset;
					}
				}
				return this.elOffset;
			},
			onMouseOut: function(event) {
				this.isMouseOver = false;
				var offsetX = event.offsetX,
					elOffset = this.getElementOffset();
				if (_.isUndefined(offsetX)) {
					// Firefox doesn't have offsetX.
					offsetX = event.pageX - elOffset.left;
				}
				var isLeftOrRight = offsetX < 0 || offsetX >= elOffset.width,
					// Firefox doesn't have toElement
					$toEl = event.toElement ? $(event.toElement) : $(event.relatedTarget),
					// Toggle immediately if we roll off the button to the left or right.
					toggleTime = isLeftOrRight && $toEl.hasClass(css.controls) ? 0 : 1500;
				_.delay(this.toggleSlider, toggleTime);
			},
			onMouseOver: function() {
				this.isMouseOver = this.enabled;
				this.toggleSlider();
			},
			toggleSlider: function() {
				this.$container.toggleClass(css.showSlider, this.isMouseOver);
			},
			onSliderClick: function(event) {
				event.preventDefault();
				// when there's user input, turn off isMuted.
				this.isMuted = false;
				this.trigger(Events.UNMUTE, {
					type: Events.UNMUTE
				});
				this.setVolume(this.calculatePercentageFromTop(event.pageY - this.getContainerOffset()));
			},
			updateView: function(volume) {
				if (_.isUndefined(volume)) {
					volume = this.isMuted ? 0 : this.currentVolume;
				}
				if (this.$thumb) {
					this.$thumb.css({
						top: this.calculateSliderValueFromPercentage(volume)
					});
					if (this.getVolumeHeight() === 0) {
						_.delay(this.updateView, 100);
					}
				}
				var showMute = volume > 0;
				this.$el.toggleClass(css.mute, showMute);
				this.$el.toggleClass(css.unmute, !showMute);
			},
			onThumbMove: function(event) {
				if (this.dragging) {
					event.preventDefault();
					var moveTo = event.pageY;
					// when there's user input, turn off isMuted.
					this.isMuted = false;
					this.trigger(Events.UNMUTE, {
						type: Events.UNMUTE
					});
					this.setVolume(this.calculatePercentageFromTop(moveTo - this.getContainerOffset()));
				}
			},
			onThumbInactive: function(event) {
				if (this.dragging) {
					event.preventDefault();
					this.dragging = false;
				}
			},
			calculatePercentageFromTop: function(moveTo) {
				var top = Math.max(0, moveTo),
					volumeHeight = this.getVolumeHeight();
				top = Math.min(top, volumeHeight);
				return 1 - top / volumeHeight;
			},
			calculateSliderValueFromPercentage: function(percentage) {
				return (1 - percentage) * this.getVolumeHeight();
			},
			getContainerOffset: function() {
				if (!this.containerOffset) {
					this.containerOffset = this.$slider.offset().top;
				}
				return this.containerOffset;
			},
			getVolumeHeight: function() {
				if (!this.volumeHeight) {
					this.volumeHeight = this.$slider.offset().height - this.$thumb.offset().height;
				}
				return this.volumeHeight;
			},
			setVolume: function(volume) {
				if (isNaN(volume)) {
					return;
				}
				volume = Math.round(volume * 100) / 100;
				if (this.currentVolume !== volume) {
					this.currentVolume = volume;
					this.trigger(Events.VOLUME, {
						type: Events.VOLUME,
						data: this.currentVolume,
						target: this
					});
					this.updateView();
				}
			},
			toggle: function(event) {
				// when there's user input, turn off isMuted.
				this.isMuted = false;
				event.preventDefault();
				if (isButton(event)) {
					var $el = this.$el,
						showMute = $el.hasClass(css.unmute),
						eventName = showMute ? Events.UNMUTE : Events.MUTE,
						newVol = showMute ? this.currentVolume : 0;
					this.updateView(newVol);
					this.trigger(eventName, {
						type: eventName
					});
				}
			}
		});
	})();
	/* exported Main */
	/* global _, Backbone, Logger, Events, TopView, CenterView, Controls, ShareView, PlayPauseButton, $*/
	var Main = Backbone.View.extend({
		tagName: "div",
		className: "pjs-gui",
		isShown: false,
		logger: new Logger("GUI"),
		events: {
			"click": "onClick",
			"touchstart": "onClick",
			"click .pjs-controls-play-pause": "onPlayPause",
			"touchstart .pjs-controls-play-pause": "onPlayPause",
			"mousedown .pjs-controls": "onScrubberClick",
			"touchstart .pjs-controls": "onScrubberClick",
			"click .pjs-controls-fullscreen": "onFullscreen",
			"touchstart .pjs-controls-fullscreen": "onFullscreen",
			"click .pjs-share-item": "onShare",
			"touchstart .pjs-share-item": "onShare",
			"click .pjs-controls-share": "showShare",
			"touchstart .pjs-controls-share": "showShare",
			"click .pjs-controls-rewind": "onRewind",
			"touchstart .pjs-controls-rewind": "onRewind"
		},
		initialize: function(options) {
			this.options = options;
			_.bindAll(this, "onSeek");
			this.render();
		},
		render: function() {
			var options = this.options;
			// Center, should be behind Top and Bottom
			this.$background = $("<div/>").addClass("pjs-gui-background").appendTo(this.$el);
			this.centerView = new CenterView(options);
			this.centerView.$el.appendTo(this.$el);
			this.shareView = new ShareView(options);
			this.shareView.$el.appendTo(this.$el);
			this.shareView.hide();
			// Top
			this.topView = new TopView(options);
			// this.listenTo(this.topView, TopView.Events.SHARE, this.showShare);
			this.topView.$el.appendTo(this.$el);
			// Bottom
			this.bottomView = new Controls(options);
			this.bottomView.$el.appendTo(this.$el);
			this.listenTo(this.bottomView, Events.SEEK, this.onSeek);
			this.listenTo(this.bottomView, Events.SEEK, this.sendEvent);
			this.hide();
			return this;
		},
		hide: function() {
			this.centerView.hide();
			this.$background.hide();
			this.bottomView.hide();
			this.topView.hide();
			this.isActive = false;
			this.logger.info("hide()");
		},
		sendEvent: function(event) {
			event.target = this;
			this.trigger(event.type, event);
		},
		onClick: function(event) {
			event.preventDefault();
			if (!this.isActive) {
				this.isActive = true;
				this.logger.info("onClick");
				this.centerView.show();
				this.$background.show();
				this.bottomView.show();
				this.topView.show();
			}
		},
		onPlayPause: function(event) {
			event.preventDefault();
			var isPlayEvent = PlayPauseButton.isPlayEvent($(event.currentTarget));
			this.sendEvent({
				type: isPlayEvent ? Events.PLAY : Events.PAUSE
			});
			if (isPlayEvent) {
				this.hide();
			}
		},
		onSeek: function() {
			this.logger.info("onSeek");
			this.isActive = false;
		},
		showShare: function() {
			this.logger.info("show share");
			event.preventDefault();
			event.stopPropagation();
			if (this.centerView.isShowing()) {
				this.centerView.hide();
				this.shareView.show();
			} else {
				this.centerView.show();
				this.shareView.hide();
			}
		},
		onScrubberClick: function() {
			event.preventDefault();
			this.centerView.hide();
			this.$background.hide();
			this.topView.hide();
		},
		onFullscreen: function() {
			event.preventDefault();
			this.sendEvent({
				type: Events.FULLSCREEN
			});
		},
		onRewind: function() {
			event.preventDefault();
			this.sendEvent({
				type: Events.REWIND
			});
		},
		onShare: function(event) {
			this.logger.info("onShare");
			event.preventDefault();
			event.stopPropagation();
			this.sendEvent({
				type: Events.SHARE,
				data: $(event.target).data("share-id")
			});
		}
	});
	/* global Main, AdDisplay, Time, Controls, Events, TopView */
	var GUI = Main;
	GUI.version = "0.14.0";
	GUI.build = "Thu Jan 29 2015 17:55:49";
	GUI.Time = Time;
	GUI.AdDisplay = AdDisplay;
	GUI.Controls = Controls;
	GUI.TopView = TopView;
	
	GUI.Events = Events;
	return GUI;
}));