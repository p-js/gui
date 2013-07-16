this["Templates"] = this["Templates"] || {};

this["Templates"]["src/template.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	    <a class=\"mtvn-ad-gui-learn-more\" href=\"";
  if (stack1 = helpers.buttonLink) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.buttonLink; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"";
  if (stack1 = helpers.buttonTarget) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.buttonTarget; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n	    	";
  if (stack1 = helpers.buttonText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.buttonText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n	    </a>\n	    ";
  return buffer;
  }

  buffer += "<div class=\"mtvn-reset\">\n<div class=\"mtvn-ad-gui\">\n	<div class=\"mtvn-ad-gui-container\">\n	    <span class=\"mtvn-ad-gui-countdown\"></span>\n	    ";
  stack1 = helpers['if'].call(depth0, depth0.buttonLink, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n</div>\n</div>";
  return buffer;
  });

this["Templates"]["src/controls/template.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"mtvn-controls-play mtvn-controls-button\"></div>\n<div class=\"mtvn-controls-slider\">\n	<div class=\"mtvn-controls-slider-time\"></div>\n	<div class=\"mtvn-controls-slider-progress-container\">\n		<div class=\"mtvn-controls-slider-buffered\"></div>\n		<div class=\"mtvn-controls-slider-progress\"></div>\n	</div>\n	<div class=\"mtvn-controls-slider-background\"></div>\n	<div class=\"mtvn-controls-slider-thumb-container\" style=\"left:0px;\">\n		<div class=\"mtvn-controls-slider-thumb\"/>\n	</div>\n</div>\n<div class=\"mtvn-controls-fullscreen mtvn-controls-button\"></div>";
  });