define("SingleLabel/Singlelabel/userSinglelabelController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
    };
});
define("SingleLabel/Singlelabel/SinglelabelControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("SingleLabel/Singlelabel/SinglelabelController", ["SingleLabel/Singlelabel/userSinglelabelController", "SingleLabel/Singlelabel/SinglelabelControllerActions"], function() {
    var controller = require("SingleLabel/Singlelabel/userSinglelabelController");
    var actions = require("SingleLabel/Singlelabel/SinglelabelControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "skin1", function(val) {
            this.view.flxLabel.skin = val;
        });
        defineGetter(this, "skin1", function() {
            return this.view.flxLabel.skin;
        });
        defineSetter(this, "skin2", function(val) {
            this.view.lblSingleLabel.skin = val;
        });
        defineGetter(this, "skin2", function() {
            return this.view.lblSingleLabel.skin;
        });
        defineSetter(this, "LabelText", function(val) {
            this.view.lblSingleLabel.text = val;
        });
        defineGetter(this, "LabelText", function() {
            return this.view.lblSingleLabel.text;
        });
        defineSetter(this, "contentAlignment", function(val) {
            this.view.lblSingleLabel.contentAlignment = val;
        });
        defineGetter(this, "contentAlignment", function() {
            return this.view.lblSingleLabel.contentAlignment;
        });
        defineSetter(this, "height1", function(val) {
            this.view.flxLabel.height = val;
        });
        defineGetter(this, "height1", function() {
            return this.view.flxLabel.height;
        });
        defineSetter(this, "height2", function(val) {
            this.view.lblSingleLabel.height = val;
        });
        defineGetter(this, "height2", function() {
            return this.view.lblSingleLabel.height;
        });
        defineSetter(this, "width1", function(val) {
            this.view.lblSingleLabel.width = val;
        });
        defineGetter(this, "width1", function() {
            return this.view.lblSingleLabel.width;
        });
        defineSetter(this, "centerY1", function(val) {
            this.view.lblSingleLabel.centerY = val;
        });
        defineGetter(this, "centerY1", function() {
            return this.view.lblSingleLabel.centerY;
        });
        defineSetter(this, "top1", function(val) {
            this.view.lblSingleLabel.top = val;
        });
        defineGetter(this, "top1", function() {
            return this.view.lblSingleLabel.top;
        });
        defineSetter(this, "left1", function(val) {
            this.view.lblSingleLabel.left = val;
        });
        defineGetter(this, "left1", function() {
            return this.view.lblSingleLabel.left;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_onClick_fb18d56ef14a4b8e811520259b488ead = function() {
        if (this.onClick) {
            this.onClick.apply(this, arguments);
        }
    }
    return controller;
});
