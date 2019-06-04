define("com/Head/userHeadController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {}
    };
});
define("com/Head/HeadControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/Head/HeadController", ["com/Head/userHeadController", "com/Head/HeadControllerActions"], function() {
    var controller = require("com/Head/userHeadController");
    var actions = require("com/Head/HeadControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "text", function(val) {
            this.view.lblHead.text = val;
        });
        defineGetter(this, "text", function() {
            return this.view.lblHead.text;
        });
        defineSetter(this, "skin1", function(val) {
            this.view.btnMenu.skin = val;
        });
        defineGetter(this, "skin1", function() {
            return this.view.btnMenu.skin;
        });
        defineSetter(this, "top1", function(val) {
            this.view.btnMenu.top = val;
        });
        defineGetter(this, "top1", function() {
            return this.view.btnMenu.top;
        });
        defineSetter(this, "centerX1", function(val) {
            this.view.btnMenu.centerX = val;
        });
        defineGetter(this, "centerX1", function() {
            return this.view.btnMenu.centerX;
        });
        defineSetter(this, "skin2", function(val) {
            this.view.flxHead.skin = val;
        });
        defineGetter(this, "skin2", function() {
            return this.view.flxHead.skin;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
