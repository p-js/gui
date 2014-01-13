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