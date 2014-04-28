/* exported SliderLiveMixin */
/* global Events*/
var SliderLiveMixin = {
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