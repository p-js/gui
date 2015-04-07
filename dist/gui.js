/* global _, $, Handlebars, Backbone */
var GUI = (function(_, $, Handlebars, Backbone) {
	// jshint unused:false
	/* exported GUI, Templates */
	// Handlebars is provided the pjs/player project.
	// GUI is loaded in to the page separately, so we have to go 
	// through a package manager.
	// templates are written to "this", here we're scoping it.
	var Templates = (function() {
		this["Templates"] = this["Templates"] || {};
		
		this["Templates"]["src/ad-view/template.html"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
		  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
		  return "<a class=\"pjs-ad-gui-learn-more\" href=\""
		    + escapeExpression(((helper = (helper = helpers.buttonLink || (depth0 != null ? depth0.buttonLink : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"buttonLink","hash":{},"data":data}) : helper)))
		    + "\" target=\""
		    + escapeExpression(((helper = (helper = helpers.buttonTarget || (depth0 != null ? depth0.buttonTarget : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"buttonTarget","hash":{},"data":data}) : helper)))
		    + "\">\n	"
		    + escapeExpression(((helper = (helper = helpers.buttonText || (depth0 != null ? depth0.buttonText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"buttonText","hash":{},"data":data}) : helper)))
		    + "\n</a>\n";
		},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
		  var stack1, buffer = "<span class=\"pjs-ad-gui-countdown\"></span>\n";
		  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.buttonLink : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
		  if (stack1 != null) { buffer += stack1; }
		  return buffer;
		},"useData":true});
		
		this["Templates"]["src/bottom/template.html"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
		  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
		  return "<div class=\"pjs-gui-current-time\">00:00</div>\n<div class=\""
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
		    + "-thumb\"/>\n	</div>\n</div>\n<div class=\"pjs-gui-duration\">00:00</div>\n";
		},"useData":true});
		
		this["Templates"]["src/share/template.html"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
		  var lambda=this.lambda, escapeExpression=this.escapeExpression;
		  return "<div class=\"pjs-gui-share-item pjs-share-"
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
		
		this["Templates"]["src/center-controls/template.html"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
		  return "<div class=\"pjs-gui-center-controls\">\n	<div class=\"pjs-gui-controls-rewind pjs-gui-controls-button\"></div>\n	<div class=\"pjs-gui-controls-play-pause pjs-gui-controls-button\"></div>\n</div>\n";
		  },"useData":true});
		
		this["Templates"]["src/top/template.html"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
		  return "	<div class=\"pjs-gui-controls-cc\"></div>\n";
		  },"3":function(depth0,helpers,partials,data) {
		  return "	<div class=\"pjs-gui-controls-fullscreen\"></div>\n";
		  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
		  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"pjs-gui-flexbox pjs-gui-top-container\">\n	<div class=\"pjs-gui-top-metadata\">";
		  stack1 = ((helper = (helper = helpers.metadata || (depth0 != null ? depth0.metadata : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"metadata","hash":{},"data":data}) : helper));
		  if (stack1 != null) { buffer += stack1; }
		  buffer += "</div>\n	<div class=\"pjs-gui-controls-share\"></div>\n";
		  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.ccEnabled : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
		  if (stack1 != null) { buffer += stack1; }
		  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.fullscreenEnabled : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
		  if (stack1 != null) { buffer += stack1; }
		  return buffer + "</div>\n";
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
		SHOW_SHARE: "show:share",
		SHARE_EMBED: "SHARE_EMBED",
		SHARE_LINK: "SHARE_LINK",
		SHARE: "share",
		VOLUME: "VOLUME",
		UNMUTE: "UNMUTE",
		REWIND: "REWIND",
		SEEK: "SEEK",
		SCRUB_START: "SCRUB_START",
		SCRUBBING: "SCRUBBING",
		LEARN_MORE: "LEARN_MORE"
	};
	/* exported States */
	var States = {
		ACTIVE: "ACTIVE",
		SHARE: "SHARE",
		SCRUBBING: "SCRUBBING",
		AD: "AD",
		AD_ACTIVE: "AD_ACTIVE",
		HIDDEN: "HIDDEN"
	};
	/* exported BaseView */
	/* global Backbone, _*/
	/**
	 * @ignore
	 * Hide and show functionality is in almost every view.
	 */
	var BaseView = Backbone.View.extend({
		css: {},
		isShowing: function() {
			return !this.$el.hasClass(this.css.hide);
		},
		hide: function() {
			this.$el.addClass(this.css.hide);
		},
		show: function() {
			this.$el.removeClass(this.css.hide);
		},
		sendEvent: function(event) {
			if (_.isString(event)) {
				event = {
					type: event
				};
			}
			event.target = this;
			this.trigger(event.type, event);
		}
	});
	/* exported PrefixTransform */
	var PrefixTransform = {
		get: function(value) {
			return {
				'-webkit-transform': value,
				'-ms-transform': value,
				transform: value
			};
		}
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
	/* exported ToggleableButton */
	/* global Backbone*/
	var ToggleableButton = Backbone.View.extend({
		events: {
			click: "toggle",
			touchstart: "toggle"
		},
		isOn: false,
		initialize: function(options) {
			options = options || {};
			this.css = options.css;
			if (!this.css) {
				throw "no css specified for button";
			}
			this.eventType = options.eventType;
			if (!this.eventType) {
				throw "no event type specified for button";
			}
			this.setStyle(!!options.on);
		},
		toggle: function(event) {
			event.preventDefault();
			event.stopPropagation();
			var eventType = this.eventType;
			if (eventType.on || eventType.off) {
				eventType = this.isOn ? eventType.on : eventType.off;
			}
			// send current state
			this.trigger(eventType, {
				target: this,
				type: eventType,
				// the event was for the last state
				data: this.isOn
			});
			// toggle state
			this.setStyle(!this.isOn);
		},
		setStyle: function(on) {
			this.isOn = on;
			if (on) {
				this.$el.addClass(this.css.on);
				this.$el.removeClass(this.css.off);
			} else {
				this.$el.addClass(this.css.off);
				this.$el.removeClass(this.css.on);
			}
		}
	});
	/* global _, $, Templates, BaseView, Events*/
	/* exported AdView */
	var AdView = BaseView.extend({
		template: Templates["src/ad-view/template.html"],
		className: "pjs-ad-gui",
		css: {
			hide: "pjs-ad-gui-hidden"
		},
		events: function() {
			if (this.options.buttonLink === AdView.LEARN_MORE_EVENT_ONLY) {
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
			options = this.options = _.defaults(options || {}, AdView.DEFAULT_COPY);
			var template = options.template || this.template;
			this.$el.html($(template(options)));
			this.delegateEvents();
			this.$countdown = this.$(".pjs-ad-gui-countdown");
			this.renderMessage(options);
			return this;
		},
		renderMessage: function(options) {
			_.extend(this.options, options);
			var messageTempate = this.getTemplate(this.options),
				countdownText = _.template(messageTempate)(this.options);
			this.$countdown.text(countdownText);
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
			if (this.options.buttonLink === AdView.LEARN_MORE_EVENT_ONLY) {
				event.preventDefault();
				event.stopPropagation();
				this.trigger(Events.LEARN_MORE, {
					type: Events.LEARN_MORE
				});
			}
		}
	}, {
		LEARN_MORE_EVENT_ONLY: "#",
		DEFAULT_COPY: {
			countdownText: "Your content will resume in <%=time%>.",
			countdownTextWithPosition: "Ad <%=index + 1%> of <%=total%>.",
			messageText: "Your content will resume shortly.",
			buttonText: "Learn More",
			buttonTarget: "_blank"
		}
	});
	/* global _, Backbone, Templates, $, ToggleableButton, Events, PrefixTransform*/
	/* exported TopView */
	var TopView = Backbone.View.extend({
		template: Templates["src/top/template.html"],
		height: 0,
		className: "pjs-gui-top",
		initialize: function(options) {
			_.bindAll(this, "hide");
			this.options = options = options || {};
			this.render();
			// CC has toggle-able state and dispatches event
			// buttons without state are just handled in main.js
			this.cc = new ToggleableButton({
				el: this.$(".pjs-gui-controls-cc"),
				on: this.options.ccEnabled,
				css: {
					on: "pjs-gui-controls-cc-on",
					off: "pjs-gui-controls-cc"
				},
				eventType: Events.CC
			});
			this.fullScreen = new ToggleableButton({
				el: this.$(".pjs-gui-controls-fullscreen"),
				on: !this.options.isFullscreen,
				css: {
					on: "pjs-gui-controls-fullscreen",
					off: "pjs-gui-controls-fullscreen-minimize"
				},
				eventType: Events.FULLSCREEN
			});
			_.delay(this.hide, 10);
		},
		show: function() {
			this.$el.css(PrefixTransform.get("translateY(0)"));
		},
		hide: function() {
			var height = this.getHeight();
			this.$el.css(PrefixTransform.get("translateY(" + -height + "px)"));
		},
		getHeight: function() {
			if (this.height < 50) {
				this.height = this.$el.height();
			}
			return this.height > 50 ? this.height : 300;
		},
		setMetadata: function(html) {
			this.$(".pjs-gui-top-metadata").html(html);
		},
		render: function() {
			this.$el.html($(this.template(this.options)));
			return this;
		}
	});
	/* exported CenterView */
	/* global BaseView, _, $, ToggleableButton, Templates, Events*/
	var CenterView = BaseView.extend({
		template: Templates["src/center-controls/template.html"],
		css: {
			hide: "pjs-gui-center-controls-hidden"
		},
		className: "pjs-gui-center-controls",
		initialize: function(options) {
			this.options = _.clone(options);
			this.render();
		},
		render: function(options) {
			options = this.options = _.extend(this.options, options);
			this.$el.html($(this.template(options)));
			// PLAY PAUSE 
			this.playPause = new ToggleableButton({
				el: this.$(".pjs-gui-controls-play-pause"),
				on: options.paused,
				eventType: {
					on: Events.PLAY,
					off: Events.PAUSE
				},
				css: {
					on: "pjs-gui-controls-play",
					off: "pjs-gui-controls-pause"
				}
			});
			this.listenTo(this.playPause, Events.PLAY, this.sendEvent);
			this.listenTo(this.playPause, Events.PAUSE, this.sendEvent);
			this.$rewind = this.$(".pjs-gui-controls-rewind");
		},
		setPaused: function(paused) {
			this.playPause.setStyle(paused);
			this.options.paused = paused;
		}
	});
	/* global _ */
	/* exported ShareItems */
	var ShareItems = {
		availableShareItems: ["facebook", "twitter", "embed", "link"],
		validate: function(options) {
			if (options.share) {
				options.share = _.intersection(options.share, ShareItems.availableShareItems);
			}
			return options;
		}
	};
	/* exported ShareView */
	/* global Backbone, $, Templates, ShareItems*/
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
				var options = ShareItems.validate(this.options || {});
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
	/* exported BottomView */
	/* global _, BaseView, $, Events, Slider, Time, Templates*/
	var BottomView = (function() {
		/* global _, $, Backbone, Events, Logger*/
		/* exported Slider */
		var Slider = (function() {
			var RESIZE = "slider:resize",
				thumb = "pjs-gui-controls-slider-thumb",
				thumbActive = "pjs-gui-controls-slider-thumb-active",
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
						this.$dividerContainer.append($("<div class=\"pjs-gui-controls-slider-segment\"/>"));
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
						"touchstart .pjs-gui-controls-slider-thumb-container": "onThumbActive",
						"touchmove .pjs-gui-controls-slider-thumb-container": "onThumbMove",
						"touchend .pjs-gui-controls-slider-thumb-container": "onThumbInactive",
						"mousedown .pjs-gui-controls-slider-thumb-container": "onThumbActive"
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
					this.$thumbContainer = this.$(".pjs-gui-controls-slider-thumb-container");
					/**
					 * Meets the thumb visually.
					 */
					this.$progress = this.$(".pjs-gui-controls-slider-progress");
					/**
					 * The amount buffered.
					 */
					this.$buffered = this.$(".pjs-gui-controls-slider-buffered");
					/**
					 * Segment marker container
					 */
					this.$dividerContainer = this.$(".pjs-gui-controls-slider-segment-container");
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
					if (!this.dragging) {
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
					if (this.dragging) {
						return;
					}
					this.throttledMeasure();
					this.moveThumb(this.getLeftFromPlayhead(this.isLive() ? this.duration : this.playhead));
				},
				setBuffered: function(buffered) {
					if (!this.dragging && this.duration > 1) {
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
					this.trigger(Events.SCRUB_START, {
						type: Events.SCRUB_START,
						data: this.playhead
					});
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
					this.trigger(Events.SCRUBBING, {
						type: Events.SCRUBBING,
						data: this.getTimeFromThumb(left)
					});
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
			});
		})();
		return BaseView.extend({
			template: Templates["src/bottom/template.html"],
			className: "pjs-controls",
			css: {
				hide: "pjs-gui-controls-hidden",
				slider: "pjs-gui-controls-slider",
				currentTime: "pjs-gui-current-time",
	
				duration: "pjs-gui-duration"
			},
			initialize: function(options) {
				this.options = options;
				_.bindAll(this, "sendEvent", "onScrubbing");
				_.extend(this.options, {
					slider: this.css.slider
				});
				this.render();
			},
			render: function() {
				var options = this.options;
				this.$el.html($(this.template(options)));
				this.$currentTime = this.$("." + this.css.currentTime)
					.html(Time.format(options.playhead));
				this.$duration = this.$("." + this.css.duration);
				// SLIDER
				this.slider = new Slider({
					el: this.$("." + this.css.slider),
					playhead: options.playhead,
					isLive: options.isLive,
					isDVR: options.isDVR,
					durations: options.durations
				});
				this.setDurations(options.durations);
				// Seek Event
				this.listenTo(this.slider, Events.SEEK, this.sendEvent);
				this.listenTo(this.slider, Events.SCRUB_START, this.sendEvent);
				this.listenTo(this.slider, Events.SCRUBBING, this.sendEvent);
				this.listenTo(this.slider, Events.SCRUBBING, this.onScrubbing);
			},
			getPlayhead: function() {
				// used for testing.
				return this.slider.playhead;
			},
			onScrubbing: function(event) {
				this.$currentTime.text(Time.format(event.data));
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
			}
		});
	})();
	/* exported Main */
	/* global $, _, Backbone, Logger, Events, TopView, CenterView, 
		States, BottomView, ShareView, AdView*/
	var Main = Backbone.View.extend({
		className: "pjs-gui",
		logger: new Logger("PJS-GUI"),
		events: {
			"click .pjs-gui-share-item": "onShare",
			"touchstart .pjs-gui-share-item": "onShare",
			"click .pjs-gui-controls-share": "shareButtonClick",
			"touchstart .pjs-gui-controls-share": "shareButtonClick",
			"click .pjs-gui-controls-rewind": "onRewind",
			"touchstart .pjs-gui-controls-rewind": "onRewind"
		},
		initialize: function(options) {
			this.options = options;
			_.bindAll(this, "sendEvent", "hide");
			this.render();
		},
		render: function() {
			var options = this.options || {};
			// Background
			this.$background = $("<div/>").addClass("pjs-gui-background").appendTo(this.$el);
			// Center, should be behind Top and Bottom
			this.centerView = new CenterView(options);
			this.centerView.$el.appendTo(this.$el);
			this.listenTo(this.centerView, Events.PLAY, this.hide);
			this.listenTo(this.centerView, Events.PLAY, this.sendEvent);
			this.listenTo(this.centerView, Events.PAUSE, this.sendEvent);
			// Share
			this.shareView = new ShareView(options);
			this.shareView.$el.appendTo(this.$el);
			this.shareView.hide();
			// Top
			this.topView = new TopView(options);
			this.topView.$el.appendTo(this.$el);
			// Top CC
			this.listenTo(this.topView.cc, Events.CC, this.sendEvent);
			// Top Fullscreen
			this.listenTo(this.topView.fullScreen, Events.FULLSCREEN, this.sendEvent);
			// Ad View
			this.adView = new AdView(options.adView);
			this.adView.$el.appendTo(this.$el);
			// Ad Learn more
			this.listenTo(this.adView, Events.LEARN_MORE, this.sendEvent);
			this.adView.hide();
			// Bottom
			this.bottomView = new BottomView(options);
			this.bottomView.$el.appendTo(this.$el);
			this.listenTo(this.bottomView, Events.SEEK, this.hide);
			this.listenTo(this.bottomView, Events.SCRUB_START, this.onScrubbing);
			this.listenTo(this.bottomView, Events.SEEK, this.sendEvent);
			this.allViews = [this.centerView, this.$background, this.bottomView, this.topView, this.shareView, this.adView];
			this.hide();
			return this;
		},
		show: function() {
			this.setState(States.ACTIVE);
		},
		hide: function() {
			this.setState(States.HIDDEN);
		},
		sendEvent: function(event) {
			if (_.isString(event)) {
				event = {
					type: event
				};
			}
			event.target = this;
			this.logger.info("send event:", event.type, event);
			this.trigger(event.type, event);
		},
		setPaused: function(paused) {
			this.centerView.setPaused(paused);
		},
		isDragging: function() {
			return this.bottomView.slider.dragging;
		},
		setState: function(state, options) {
			this.state = state;
			this.logger.info("state:", state);
			switch (state) {
				case States.ACTIVE:
					this.bottomView.slider.setEnabled(true);
					_.invoke([this.shareView, this.adView], "hide");
					this.centerView.$rewind.show();
					_.invoke(_.without(this.allViews, this.shareView, this.adView), "show");
					break;
				case States.SHARE:
					this.logger.info("show share panel");
					this.centerView.hide();
					this.shareView.show();
					this.sendEvent(Events.SHOW_SHARE);
					break;
				case States.SCRUBBING:
					_.invoke(_.without(this.allViews, this.bottomView), "hide");
					break;
				case States.HIDDEN:
					_.invoke(this.allViews, "hide");
					break;
				case States.AD:
					this.logger.info("ad state options:", options);
					_.invoke(this.allViews, "hide");
					this.adView.render(_.extend(this.adView.options, options));
					this.adView.show();
					break;
				case States.AD_ACTIVE:
					this.logger.info("ad with controls options:", options);
					_.invoke(this.allViews, "hide");
					this.centerView.$rewind.hide();
					_.invoke([this.adView, this.centerView], "show");
					break;
				default:
					this.logger.error("Unrecognized state", state);
					break;
			}
		},
		shareButtonClick: function(event) {
			event.preventDefault();
			event.stopPropagation();
			if (this.centerView.isShowing()) {
				this.setState(States.SHARE);
			} else {
				this.setState(States.ACTIVE);
			}
		},
		setPlayhead: function(playhead) {
			this.bottomView.setPlayhead(playhead);
		},
		setEnabled: function(enabled) {
			this.bottomView.slider.setEnabled(enabled);
		},
		setBuffered: function(buffered) {
			this.bottomView.setBuffered(buffered);
		},
		setDurations: function(durations) {
			this.bottomView.setDurations(durations);
		},
		onScrubbing: function() {
			this.setState(States.SCRUBBING);
		},
		onFullscreen: function(event) {
			event.preventDefault();
			event.stopPropagation();
			this.sendEvent(Events.FULLSCREEN);
		},
		showFullscreenButton: function(showFullscreenButton) {
			this.topView.fullScreen.setStyle(showFullscreenButton);
		},
		onRewind: function(event) {
			event.preventDefault();
			event.stopPropagation();
			this.sendEvent({
				type: Events.REWIND,
				data: 10
			});
		},
		onShare: function(event) {
			this.logger.info("onShare");
			event.preventDefault();
			event.stopPropagation();
			var data = $(event.target).data("share-id");
			switch (data) {
				case "embed":
					this.sendEvent({
						type: Events.SHARE_EMBED,
						data: data
					});
					break;
				case "link":
					this.sendEvent({
						type: Events.SHARE_LINK,
						data: data
					});
					break;
				default:
					this.sendEvent({
						type: Events.SHARE,
						data: data
					});
					break;
			}
	
		}
	});
	/* global Main, AdView, Time, States, BottomView, Events, TopView, ToggleableButton */
	var GUI = Main;
	GUI.version = "0.14.0";
	GUI.build = "Tue Apr 07 2015 16:37:01";
	GUI.Time = Time;
	GUI.AdView = AdView;
	GUI.BottomView = BottomView;
	GUI.TopView = TopView;
	GUI.ToggleableButton = ToggleableButton;
	GUI.Events = Events;
	GUI.States = States;
	return GUI;
})(_, $, Handlebars, Backbone);