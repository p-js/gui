/* exported GUI */
/* global MTVNPlayer*/
var GUI = function(require) {
    // Handlebars is provided in the mtvn-util package.
    // GUI is loaded in to the page separately, so we have to go 
    // through a package manager.
    // If we compile it in, we could use a scoped var. 
    /* jshint unused:false */
    var Handlebars = require("Handlebars"),
        $ = require("$"),
        _ = require("_"),
        Backbone = require("Backbone");
    // templates are written to "this", here we're scoping it.
    var Templates = (function() {
        //= ../compiled-templates
        return this.Templates;
    }).apply({});
    //= ad-display
    //= top-panel
    //= controls/util
    //= controls
    /* global AdDisplay, Controls, Events, TopPanel */
    return {
        AdDisplay: AdDisplay,
        Controls: Controls,
        TopPanel: TopPanel,
        Events: Events,
        version: "<%=version%>",
        build: "<%=build%>"
    };
}(MTVNPlayer.require);