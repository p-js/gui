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