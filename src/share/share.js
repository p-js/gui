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
