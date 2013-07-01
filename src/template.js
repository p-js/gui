this["Templates"] = this["Templates"] || {};

this["Templates"]["src/template.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	    <span class=\"mtvn-ad-gui-learn-more\">\n	    	";
  if (stack1 = helpers.buttonText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.buttonText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n	    </span>\n	    ";
  return buffer;
  }

  buffer += "<div class=\"mtvn-ad-gui\">\n	<div class=\"mtvn-ad-gui-container\">\n	    <span class=\"mtvn-ad-gui-countdown\"></span>\n	    ";
  stack1 = helpers['if'].call(depth0, depth0.isAdClickable, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n</div>";
  return buffer;
  });