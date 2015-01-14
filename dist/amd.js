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
	/* exported GUI */
	/* global _, $, Handlebars, Backbone*/
	var GUI = {
		version: "0.13.4",
		build: "Tue Jan 13 2015 16:45:39"
	};
	// Handlebars is provided in the mtvn-util package.
	// GUI is loaded in to the page separately, so we have to go 
	// through a package manager.
	// If we compile it in, we could use a scoped var. 
	/* jshint unused:false */
	// templates are written to "this", here we're scoping it.
	var Templates = (function() {
		this["Templates"] = this["Templates"] || {};
		
		this["Templates"]["src/ad-display/template.html"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
		  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
		  return "    <a class=\"mtvn-ad-gui-learn-more\" href=\""
		    + escapeExpression(((helper = (helper = helpers.buttonLink || (depth0 != null ? depth0.buttonLink : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"buttonLink","hash":{},"data":data}) : helper)))
		    + "\" target=\""
		    + escapeExpression(((helper = (helper = helpers.buttonTarget || (depth0 != null ? depth0.buttonTarget : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"buttonTarget","hash":{},"data":data}) : helper)))
		    + "\">\n    	"
		    + escapeExpression(((helper = (helper = helpers.buttonText || (depth0 != null ? depth0.buttonText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"buttonText","hash":{},"data":data}) : helper)))
		    + "\n    </a>\n";
		},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
		  var stack1, buffer = "<div class=\"mtvn-ad-gui-container\">\n    <span class=\"mtvn-ad-gui-countdown\"></span>\n";
		  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.buttonLink : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
		  if (stack1 != null) { buffer += stack1; }
		  return buffer + "</div>\n";
		},"useData":true});
		
		
		
		this["Templates"]["src/controls/template.html"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
		  return "<div class=\"mtvn-controls-rewind mtvn-controls-button\"></div>\n";
		  },"3":function(depth0,helpers,partials,data) {
		  return "<div class=\"mtvn-controls-live mtvn-controls-button\"></div>\n";
		  },"5":function(depth0,helpers,partials,data) {
		  return "<div class=\"mtvn-controls-cc mtvn-controls-button\"></div>\n";
		  },"7":function(depth0,helpers,partials,data) {
		  return "<div class=\"mtvn-controls-volume mtvn-controls-button\">\n	<div class=\"mtvn-controls-volume-slider-container-outer\">\n		<div class=\"mtvn-controls-volume-slider-container\">\n			<div class=\"mtvn-controls-volume-slider\">\n				<div class=\"mtvn-controls-volume-slider-foreground\"></div>\n			</div>\n		</div>\n	</div>\n</div>\n";
		  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
		  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<!-- controls -->\n";
		  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isDVR : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
		  if (stack1 != null) { buffer += stack1; }
		  buffer += "<div class=\"mtvn-controls-play-pause mtvn-controls-button\"></div>\n";
		  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isLive : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
		  if (stack1 != null) { buffer += stack1; }
		  buffer += "<div class=\""
		    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
		    + "\">\n	<div class=\""
		    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
		    + "-time-display\"></div>\n	<div class=\""
		    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
		    + "-progress-container\">\n		<div class=\""
		    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
		    + "-buffered\"></div>\n		<div class=\""
		    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
		    + "-progress\"></div>\n	</div>\n	<div class=\""
		    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
		    + "-background\"></div>\n	<div class=\""
		    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
		    + "-segment-container\"></div>\n	<div class=\""
		    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
		    + "-thumb-container\">\n		<div class=\""
		    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
		    + "-tool-tip-container\">\n			<div class=\""
		    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
		    + "-tool-tip-background\"></div>\n			<div class=\""
		    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
		    + "-tool-tip-time\"></div>\n		</div>\n		<div class=\""
		    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
		    + "-thumb\"/>\n	</div>\n</div>\n";
		  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.ccEnabled : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
		  if (stack1 != null) { buffer += stack1; }
		  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.showVolume : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
		  if (stack1 != null) { buffer += stack1; }
		  return buffer + "<div class=\"mtvn-controls-fullscreen mtvn-controls-button\"></div>";
		},"useData":true});
		
		
		
		this["Templates"]["src/top-panel/top-panel.html"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
		  var lambda=this.lambda, escapeExpression=this.escapeExpression;
		  return "	<div class=\"mtvn-tp-share-divider\"></div>\n	<div class=\"mtvn-tp-share-item mtvn-tp-"
		    + escapeExpression(lambda(depth0, depth0))
		    + "\" data-share-id=\""
		    + escapeExpression(lambda(depth0, depth0))
		    + "\"></div>\n";
		},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
		  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing, buffer = "<div class=\"mtvn-tp-container\">\n	<span class=\"mtvn-tp-metadata\">";
		  stack1 = ((helper = (helper = helpers.metadata || (depth0 != null ? depth0.metadata : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"metadata","hash":{},"data":data}) : helper));
		  if (stack1 != null) { buffer += stack1; }
		  buffer += "</span>\n	<div class=\"mtvn-tp-share\">\n";
		  stack1 = ((helper = (helper = helpers.share || (depth0 != null ? depth0.share : depth0)) != null ? helper : helperMissing),(options={"name":"share","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
		  if (!helpers.share) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
		  if (stack1 != null) { buffer += stack1; }
		  return buffer + "	</div>\n</div>";
		},"useData":true});
		return this.Templates;
	}).apply({});
	/* global _, $, Templates, Backbone*/
	/* exported AdDisplay */
	var AdDisplay = Backbone.View.extend({
		template: Templates["src/ad-display/template.html"],
		tagName: "div",
		className: "mtvn-ad-gui",
		events: function() {
			if (this.options.buttonLink === AdDisplay.LEARN_MORE_EVENT_ONLY) {
				return {
					"click .mtvn-ad-gui-learn-more": "onLearnMore",
					"touchstart .mtvn-ad-gui-learn-more": "onLearnMore",
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
			this.$countdown = this.$(".mtvn-ad-gui-countdown");
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
	/* exported TopPanel */
	var TopPanel = Backbone.View.extend({
		template: Templates["src/top-panel/top-panel.html"],
		tagName: "div",
		className: "mtvn-tp",
		events: {
			"click .mtvn-tp-share": "onShare",
			"touchstart .mtvn-tp-share": "onShare"
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
		hide: function() {
			this.$el.addClass("mtvn-tp-hidden");
		},
		show: function() {
			this.$el.removeClass("mtvn-tp-hidden");
		},
		onShare: function(event) {
			event.preventDefault();
			this.trigger(TopPanel.Events.SHARE, $(event.target).data("share-id"));
		}
	}, {
		Events: {
			SHARE: "share"
		}
	});
	/* exported ClosedCaptionButton */
	/* global Backbone, Events*/
	var ClosedCaptionButton = (function() {
		return Backbone.View.extend({
			ccEnabled: false,
			className: "mtvn-controls-cc",
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
	/* exported Controls */
	/* global _, Backbone, $, Events, Slider, PlayPauseButton, 
	  LiveButton, VolumeButton, ClosedCaptionButton, Templates*/
	var Controls = (function() {
		/* global _, $, Backbone, Events*/
		/* exported Slider */
		var Slider = (function() {
			var RESIZE = "slider:resize",
				thumb = "mtvn-controls-slider-thumb",
				thumbActive = "mtvn-controls-slider-thumb-active",
				formatTime = function(sec) {
					if (isNaN(sec)) {
						return "00:00";
					}
					var h = Math.floor(sec / 3600),
						m = Math.floor((sec % 3600) / 60),
						s = Math.floor((sec % 3600) % 60);
					return (h === 0 ? "" : (h < 10 ? "0" + h + ":" : h + ":")) + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
				},
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
						"click": "onSliderClick",
						"touchstart": "onSliderClick",
						"touchstart .mtvn-controls-slider-thumb-container": "onThumbActive",
						"touchmove .mtvn-controls-slider-thumb-container": "onThumbMove",
						"touchend .mtvn-controls-slider-thumb-container": "onThumbInactive",
						"mousedown .mtvn-controls-slider-thumb-container": "onThumbActive"
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
					this.updateTime();
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
					event.preventDefault();
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
					$el.removeClass(thumb);
					$el.addClass(thumbActive);
					this.dragging = true;
					this.throttledMeasure();
					this.$buffered.css({
						width: 0
					});
					this.$toolTipTime.html(formatTime(this.playhead));
					this.$toolTipContainer.show();
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
						$el.addClass(thumb);
						this.dragging = false;
						this.sendSeek();
						this.$toolTipContainer.hide();
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
					this.$toolTipTime.html(formatTime(this.getTimeFromThumb(left)));
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
				updateTime: function() {
					this.$timeDisplay.html(this.getTimeDisplayText());
				},
				getTimeDisplayText: function() {
					if (!this.duration) {
						return "";
					}
					if (this.isLive()) {
						return formatTime(this.duration);
					} else {
						return "<span class=\"mtvn-controls-slider-current-time\">" + formatTime(this.playhead) + "</span> / " + formatTime(this.duration);
					}
				},
				sendSeek: function() {
					this.setPlayhead(this.getTimeFromThumb());
					this.trigger(Events.SEEK, {
						type: Events.SEEK,
						data: this.playhead
					});
				}
			});
		})();
		var CONTROLS_TEMPLATE = Templates["src/controls/template.html"],
			css = {
				hide: "mtvn-controls-hidden",
				slider: "mtvn-controls-slider",
				playPause: "mtvn-controls-play-pause",
				live: "mtvn-controls-live",
				volume: "mtvn-controls-volume",
				cc: "mtvn-controls-cc"
			},
			addEvents = function(listener, dispatcher, events, cb) {
				_.each(events, function(eventName) {
					listener.listenTo(dispatcher, eventName, cb);
				});
			};
		return Backbone.View.extend({
			tagName: "div",
			className: "mtvn-controls",
			events: {
				"click .mtvn-controls-fullscreen": "onFullscreen",
				"touchstart .mtvn-controls-fullscreen": "onFullscreen",
				"click .mtvn-controls-rewind": "onRewind",
				"touchstart .mtvn-controls-rewind": "onRewind"
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
				addEvents(this, this.playPauseButton, [Events.PLAY, Events.PAUSE], this.sendEvent);
				// SLIDER
				this.slider = new Slider({
					el: this.$("." + css.slider),
					playhead: options.playhead,
					isLive: options.isLive,
					isDVR: options.isDVR,
					durations: options.durations
				});
				// Seek Event
				this.listenTo(this.slider, Events.SEEK, this.sendEvent);
				// LIVE
				if (options.isLive) {
					this.liveButton = new LiveButton({
						el: this.$("." + css.live),
						isLive: options.isLive
					});
					if (options.isDVR) {
						// Live Event
						this.listenTo(this.liveButton, Events.GO_LIVE, this.sendEvent);
						// Handle IS_LIVE Event
						this.liveButton.listenTo(this.slider, Events.IS_LIVE, this.liveButton.onLiveChange);
					}
				}
				// VOLUME
				if (options.showVolume) {
					this.volumeButton = new VolumeButton({
						volume: options.volume,
						muted: options.muted,
						showVolumeSlider: options.showVolumeSlider,
						el: this.$("." + css.volume)
					});
					// Volume Events
					addEvents(this, this.volumeButton, [Events.VOLUME, Events.MUTE, Events.UNMUTE], this.sendEvent);
				}
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
				if (this.volumeButton) {
					this.volumeButton.setEnabled(false);
				}
			},
			show: function() {
				this.$el.removeClass(css.hide);
				if (this.volumeButton) {
					this.volumeButton.setEnabled(true);
				}
			},
			setVolume: function(volume) {
				if (!this.volumeButton) {
					return;
				}
				this.volumeButton.setVolume(volume);
			},
			setPaused: function(paused) {
				this.playPauseButton.setPaused(paused);
			},
			getPlayhead: function() {
				// used for testing.
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
	/* exported Events */
	var Events = {
		PLAY: "PLAY",
		PAUSE: "PAUSE",
		FULLSCREEN: "FULLSCREEN",
		CC: "CC",
		GO_LIVE: "GO_LIVE",
		IS_LIVE: "IS_LIVE",
		MUTE: "MUTE",
		VOLUME: "VOLUME",
		UNMUTE: "UNMUTE",
		REWIND: "REWIND",
		SEEK: "SEEK"
	};
	/* exported LiveButton */
	/* global Backbone, Events, _*/
	var LiveButton = (function() {
		var css = {
			live: "mtvn-controls-is-live",
			golive: "mtvn-controls-go-live"
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
	/* exported PlayPauseButton */
	/* global Backbone, Events*/
	var PlayPauseButton = (function() {
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
				click: "toggle",
				touchstart: "toggle"
			},
			setPaused: function(isPaused) {
				var $el = this.$el;
				$el.toggleClass(css.play, isPaused);
				$el.toggleClass(css.pause, !isPaused);
			},
			toggle: function(event) {
				event.preventDefault();
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
	})();
	/* exported VolumeButton */
	/* global Backbone, Events, _, $*/
	var VolumeButton = (function() {
		var css = {
				controls: "mtvn-controls",
				unmute: "mtvn-controls-unmute",
				mute: "mtvn-controls-mute",
				showSlider: "mtvn-controls-volume-slider-container-over",
				slider: "mtvn-controls-volume-slider",
				thumb: "mtvn-controls-volume-slider-foreground"
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
				"click .mtvn-controls-volume-slider": "onSliderClick",
				"touchstart .mtvn-controls-volume-slider": "onSliderClick",
				"mouseover": "onMouseOver",
				"mouseleave": "onMouseOut",
				"mousedown .mtvn-controls-volume-slider-foreground": "onThumbActive",
				"touchstart .mtvn-controls-volume-slider-foreground": "onThumbActive"
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
	/* global AdDisplay, Controls, Events, TopPanel */
	GUI.AdDisplay = AdDisplay;
	GUI.Controls = Controls;
	GUI.TopPanel = TopPanel;
	GUI.Events = Events;
	return GUI;
}));