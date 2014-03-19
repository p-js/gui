/* exported VolumeButton */
/* global Backbone, Events, Util, _, $*/
var VolumeButton = (function() {
	var css = {
		unmute: "mtvn-controls-unmute",
		mute: "mtvn-controls-mute",
		showSlider: "mtvn-controls-volume-slider-container-over",
		slider: "mtvn-controls-volume-slider",
		thumb: "mtvn-controls-volume-slider-foreground"
	}, isButton = function(event) {
			var $target = $(event.target);
			return $target.hasClass(css.mute) || $target.hasClass(css.unmute);
		};
	return Backbone.View.extend({
		defaultEvents: {
			"click": "toggle"
		},
		mouseEvents: {
			"click .mtvn-controls-volume-slider": "onSliderClick",
			"mouseover": "onMouseOver",
			"mouseleave": "onMouseOut",
			"mousedown .mtvn-controls-volume-slider-foreground": "onThumbActive"
		},
		events: function() {
			if (!Util.isTouchDevice) {
				return _.extend(this.defaultEvents, this.mouseEvents);
			}
			return this.defaultEvents;
		},
		initialize: function(options) {
			_.bindAll(this, "updateView");
			if (!Util.isTouchDevice) {
				_.bindAll(this, "onThumbMove", "onThumbInactive", "toggleSlider");
				var $doc = $(document);
				this.listenTo($doc, "mousemove", this.onThumbMove);
				this.listenTo($doc, "mouseup", this.onThumbInactive);
				this.$slider = this.$("." + css.slider);
				this.$container = $(this.$slider.parent());
				this.$thumb = this.$("." + css.thumb);
			}
			this.setVolume(isNaN(options.volume) ? 0.7 : options.volume);
			_.delay(this.updateView, 100);
		},
		onThumbActive: function(event) {
			event.preventDefault();
			this.dragging = true;
		},
		onMouseOut: function() {
			this.isMouseOver = false;
			_.delay(this.toggleSlider, 1000);
		},
		onMouseOver: function() {
			this.isMouseOver = true;
			this.toggleSlider();
		},
		toggleSlider: function() {
			this.$container.toggleClass(css.showSlider, this.isMouseOver);
		},
		onSliderClick: function(event) {
			this.setVolume(this.calculatePercentageFromTop(event.y - this.getContainerOffset()));
		},
		updateView: function(volume) {
			if (_.isUndefined(volume)) {
				volume = this.currentVolume;
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
				var moveTo = Util.getClientY(event);
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