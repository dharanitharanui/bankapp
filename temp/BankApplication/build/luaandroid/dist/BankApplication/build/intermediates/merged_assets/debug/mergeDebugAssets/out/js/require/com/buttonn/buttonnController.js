define("com/buttonn/userbuttonnController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {}
    };
});
define("com/buttonn/buttonnControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/buttonn/buttonnController", ["com/buttonn/userbuttonnController", "com/buttonn/buttonnControllerActions"], function() {
    var controller = require("com/buttonn/userbuttonnController");
    var actions = require("com/buttonn/buttonnControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "width1", function(val) {
            this.view.btn.width = val;
        });
        defineGetter(this, "width1", function() {
            return this.view.btn.width;
        });
        defineSetter(this, "height1", function(val) {
            this.view.btn.height = val;
        });
        defineGetter(this, "height1", function() {
            return this.view.btn.height;
        });
        defineSetter(this, "skin1", function(val) {
            this.view.btn.skin = val;
        });
        defineGetter(this, "skin1", function() {
            return this.view.btn.skin;
        });
        defineSetter(this, "text", function(val) {
            this.view.btn.text = val;
        });
        defineGetter(this, "text", function() {
            return this.view.btn.text;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_onclick_eef6c66361e34a94a789744b4649c833 = function() {
        if (this.onclick) {
            this.onclick.apply(this, arguments);
        }
    }
    return controller;
});
