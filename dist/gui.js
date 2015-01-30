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
		  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"pjs-flexbox pjs-gui-top-container\">\n	<div class=\"pjs-gui-top-metadata\">";
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
	/* exported BaseView */
	/* global Backbone*/
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
	/* global BaseView, Templates, $, TopPanelModel*/
	/* exported TopView */
	var TopView = BaseView.extend({
		template: Templates["src/top/template.html"],
		className: "pjs-gui-top",
		css: {
			hide: "pjs-gui-top-hidden"
		},
		initialize: function(options) {
			this.options = TopPanelModel.validate(options || {});
			this.render();
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
	/* global BaseView, $, PlayPauseButton, Templates*/
	var CenterView = BaseView.extend({
		template: Templates["src/center-controls/template.html"],
		css: {
			hide: "pjs-gui-center-controls-hidden"
		},
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
	/* exported BottomView */
	/* global _, BaseView, $, Events, Slider, Time, Templates*/
	var BottomView = (function() {
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
		return BaseView.extend({
			template: Templates["src/bottom/template.html"],
			className: "pjs-controls",
			css: {
				hide: "pjs-controls-hidden",
				slider: "pjs-controls-slider",
				currentTime: "pjs-gui-current-time",
	
				duration: "pjs-gui-duration"
			},
			initialize: function(options) {
				this.options = options;
				_.bindAll(this, "sendEvent", "setPlayheadOnDrag");
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
				this.listenTo(this.slider, Slider.Events.THUMB_DRAG, this.setPlayheadOnDrag);
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
			}
		});
	})();
	/* exported Main */
	/* global _, Backbone, Logger, Events, TopView, CenterView, BottomView, ShareView, PlayPauseButton, $*/
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
			this.bottomView = new BottomView(options);
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
	/* global Main, AdDisplay, Time, BottomView, Events, TopView */
	var GUI = Main;
	GUI.version = "0.14.0";
	GUI.build = "Fri Jan 30 2015 10:46:57";
	GUI.Time = Time;
	GUI.AdDisplay = AdDisplay;
	GUI.BottomView = BottomView;
	GUI.TopView = TopView;
	
	GUI.Events = Events;
	return GUI;
})(_, $, Handlebars, Backbone);