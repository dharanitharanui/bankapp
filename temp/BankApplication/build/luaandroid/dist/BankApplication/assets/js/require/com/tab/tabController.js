define("com/tab/usertabController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {}
    };
});
define("com/tab/tabControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxTab **/
    AS_FlexContainer_f94e8907a93f430da7233d863ab803fd: function AS_FlexContainer_f94e8907a93f430da7233d863ab803fd(eventobject) {
        var self = this;
    }
});
define("com/tab/tabController", ["com/tab/usertabController", "com/tab/tabControllerActions"], function() {
    var controller = require("com/tab/usertabController");
    var actions = require("com/tab/tabControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "tabsrc", function(val) {
            this.view.imgTabImage.src = val;
        });
        defineGetter(this, "tabsrc", function() {
            return this.view.imgTabImage.src;
        });
        defineSetter(this, "tabskin", function(val) {
            this.view.lblTabName.skin = val;
        });
        defineGetter(this, "tabskin", function() {
            return this.view.lblTabName.skin;
        });
        defineSetter(this, "text", function(val) {
            this.view.lblTabName.text = val;
        });
        defineGetter(this, "text", function() {
            return this.view.lblTabName.text;
        });
        defineSetter(this, "tabvisible", function(val) {
            this.view.lblLine.isVisible = val;
        });
        defineGetter(this, "tabvisible", function() {
            return this.view.lblLine.isVisible;
        });
        defineSetter(this, "width1", function(val) {
            this.view.lblTabName.width = val;
        });
        defineGetter(this, "width1", function() {
            return this.view.lblTabName.width;
        });
        defineSetter(this, "centerX1", function(val) {
            this.view.lblTabName.centerX = val;
        });
        defineGetter(this, "centerX1", function() {
            return this.view.lblTabName.centerX;
        });
        defineSetter(this, "height1", function(val) {
            this.view.imgTabImage.height = val;
        });
        defineGetter(this, "height1", function() {
            return this.view.imgTabImage.height;
        });
        defineSetter(this, "top1", function(val) {
            this.view.lblTabName.top = val;
        });
        defineGetter(this, "top1", function() {
            return this.view.lblTabName.top;
        });
        defineSetter(this, "skin1", function(val) {
            this.view.flxTab.skin = val;
        });
        defineGetter(this, "skin1", function() {
            return this.view.flxTab.skin;
        });
        defineSetter(this, "top2", function(val) {
            this.view.imgTabImage.top = val;
        });
        defineGetter(this, "top2", function() {
            return this.view.imgTabImage.top;
        });
        defineSetter(this, "height2", function(val) {
            this.view.flxTab.height = val;
        });
        defineGetter(this, "height2", function() {
            return this.view.flxTab.height;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_tabonClick_e53bffc98fe34a5e931c9806f7b075e2 = function() {
        if (this.tabonClick) {
            this.tabonClick.apply(this, arguments);
        }
    }
    return controller;
});
