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
