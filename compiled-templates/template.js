this["Templates"] = this["Templates"] || {};

this["Templates"]["src/ad-display/template.html"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <a class=\"mtvn-ad-gui-learn-more\" href=\""
    + escapeExpression(((helper = (helper = helpers.buttonLink || (depth0 != null ? depth0.buttonLink : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"buttonLink","hash":{},"data":data}) : helper)))
    + "\" target=\""
    + escapeExpression(((helper = (helper = helpers.buttonTarget || (depth0 != null ? depth0.buttonTarget : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"buttonTarget","hash":{},"data":data}) : helper)))
    + "\">\r\n    	"
    + escapeExpression(((helper = (helper = helpers.buttonText || (depth0 != null ? depth0.buttonText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"buttonText","hash":{},"data":data}) : helper)))
    + "\r\n    </a>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"mtvn-ad-gui-container\">\r\n    <span class=\"mtvn-ad-gui-countdown\"></span>\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.buttonLink : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\r\n";
},"useData":true});



this["Templates"]["src/controls/template.html"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "<div class=\"mtvn-controls-rewind mtvn-controls-button\"></div>\r\n";
  },"3":function(depth0,helpers,partials,data) {
  return "<div class=\"mtvn-controls-live mtvn-controls-button\"></div>\r\n";
  },"5":function(depth0,helpers,partials,data) {
  return "<div class=\"mtvn-controls-cc mtvn-controls-button\"></div>\r\n";
  },"7":function(depth0,helpers,partials,data) {
  return "<div class=\"mtvn-controls-volume mtvn-controls-button\">\r\n	<div class=\"mtvn-controls-volume-slider-container-outer\">\r\n		<div class=\"mtvn-controls-volume-slider-container\">\r\n			<div class=\"mtvn-controls-volume-slider\">\r\n				<div class=\"mtvn-controls-volume-slider-foreground\"></div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<!-- controls -->\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isDVR : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "<div class=\"mtvn-controls-play-pause mtvn-controls-button\"></div>\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isLive : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "<div class=\""
    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
    + "\">\r\n	<div class=\""
    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
    + "-time-display\"></div>\r\n	<div class=\""
    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
    + "-progress-container\">\r\n		<div class=\""
    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
    + "-buffered\"></div>\r\n		<div class=\""
    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
    + "-progress\"></div>\r\n	</div>\r\n	<div class=\""
    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
    + "-background\"></div>\r\n	<div class=\""
    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
    + "-segment-container\"></div>\r\n	<div class=\""
    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
    + "-thumb-container\">\r\n		<div class=\""
    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
    + "-tool-tip-container\">\r\n			<div class=\""
    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
    + "-tool-tip-background\"></div>\r\n			<div class=\""
    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
    + "-tool-tip-time\"></div>\r\n		</div>\r\n		<div class=\""
    + escapeExpression(((helper = (helper = helpers.slider || (depth0 != null ? depth0.slider : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"slider","hash":{},"data":data}) : helper)))
    + "-thumb\"/>\r\n	</div>\r\n</div>\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.ccEnabled : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.showVolume : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "<div class=\"mtvn-controls-fullscreen mtvn-controls-button\"></div>";
},"useData":true});



this["Templates"]["src/top-panel/top-panel.html"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "	<div class=\"mtvn-tp-share-divider\"></div>\r\n	<div class=\"mtvn-tp-share-item mtvn-tp-"
    + escapeExpression(lambda(depth0, depth0))
    + "\" data-share-id=\""
    + escapeExpression(lambda(depth0, depth0))
    + "\"></div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing, buffer = "<div class=\"mtvn-tp-container\">\r\n	<span class=\"mtvn-tp-metadata\">";
  stack1 = ((helper = (helper = helpers.metadata || (depth0 != null ? depth0.metadata : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"metadata","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</span>\r\n	<div class=\"mtvn-tp-share\">\r\n";
  stack1 = ((helper = (helper = helpers.share || (depth0 != null ? depth0.share : depth0)) != null ? helper : helperMissing),(options={"name":"share","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.share) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</div>\r\n</div>";
},"useData":true});