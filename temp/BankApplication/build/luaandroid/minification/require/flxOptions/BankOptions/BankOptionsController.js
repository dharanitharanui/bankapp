define("flxOptions/BankOptions/userBankOptionsController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {}
    };
});
define("flxOptions/BankOptions/BankOptionsControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("flxOptions/BankOptions/BankOptionsController", ["flxOptions/BankOptions/userBankOptionsController", "flxOptions/BankOptions/BankOptionsControllerActions"], function() {
    var controller = require("flxOptions/BankOptions/userBankOptionsController");
    var actions = require("flxOptions/BankOptions/BankOptionsControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "OptionText", function(val) {
            this.view.lblBankOptions.text = val;
        });
        defineGetter(this, "OptionText", function() {
            return this.view.lblBankOptions.text;
        });
        defineSetter(this, "skin1", function(val) {
            this.view.flxDashBoard.skin = val;
        });
        defineGetter(this, "skin1", function() {
            return this.view.flxDashBoard.skin;
        });
        defineSetter(this, "skin2", function(val) {
            this.view.lblBankOptions.skin = val;
        });
        defineGetter(this, "skin2", function() {
            return this.view.lblBankOptions.skin;
        });
        defineSetter(this, "contentAlignment", function(val) {
            this.view.lblBankOptions.contentAlignment = val;
        });
        defineGetter(this, "contentAlignment", function() {
            return this.view.lblBankOptions.contentAlignment;
        });
        defineSetter(this, "VisibleBank", function(val) {
            this.view.lblBankOptions.isVisible = val;
        });
        defineGetter(this, "VisibleBank", function() {
            return this.view.lblBankOptions.isVisible;
        });
        defineSetter(this, "src", function(val) {
            this.view.imgIcon.src = val;
        });
        defineGetter(this, "src", function() {
            return this.view.imgIcon.src;
        });
        defineSetter(this, "VisibleImage", function(val) {
            this.view.imgIcon.isVisible = val;
        });
        defineGetter(this, "VisibleImage", function() {
            return this.view.imgIcon.isVisible;
        });
        defineSetter(this, "centerX1", function(val) {
            this.view.lblBankOptions.centerX = val;
        });
        defineGetter(this, "centerX1", function() {
            return this.view.lblBankOptions.centerX;
        });
        defineSetter(this, "width1", function(val) {
            this.view.lblBankOptions.width = val;
        });
        defineGetter(this, "width1", function() {
            return this.view.lblBankOptions.width;
        });
        defineSetter(this, "height1", function(val) {
            this.view.lblBankOptions.height = val;
        });
        defineGetter(this, "height1", function() {
            return this.view.lblBankOptions.height;
        });
        defineSetter(this, "centerY1", function(val) {
            this.view.lblBankOptions.centerY = val;
        });
        defineGetter(this, "centerY1", function() {
            return this.view.lblBankOptions.centerY;
        });
        defineSetter(this, "top1", function(val) {
            this.view.lblBankOptions.top = val;
        });
        defineGetter(this, "top1", function() {
            return this.view.lblBankOptions.top;
        });
        defineSetter(this, "height2", function(val) {
            this.view.flxDashBoard.height = val;
        });
        defineGetter(this, "height2", function() {
            return this.view.flxDashBoard.height;
        });
        defineSetter(this, "width2", function(val) {
            this.view.imgIcon.width = val;
        });
        defineGetter(this, "width2", function() {
            return this.view.imgIcon.width;
        });
        defineSetter(this, "height3", function(val) {
            this.view.imgIcon.height = val;
        });
        defineGetter(this, "height3", function() {
            return this.view.imgIcon.height;
        });
        defineSetter(this, "isVisible3", function(val) {
            this.view.ImgArrow.isVisible = val;
        });
        defineGetter(this, "isVisible3", function() {
            return this.view.ImgArrow.isVisible;
        });
        defineSetter(this, "left1", function(val) {
            this.view.ImgArrow.left = val;
        });
        defineGetter(this, "left1", function() {
            return this.view.ImgArrow.left;
        });
        defineSetter(this, "Visibleflex", function(val) {
            this.view.flxDashBoard.isVisible = val;
        });
        defineGetter(this, "Visibleflex", function() {
            return this.view.flxDashBoard.isVisible;
        });
        defineSetter(this, "left2", function(val) {
            this.view.lblBankOptions.left = val;
        });
        defineGetter(this, "left2", function() {
            return this.view.lblBankOptions.left;
        });
        defineSetter(this, "srcarrow", function(val) {
            this.view.ImgArrow.src = val;
        });
        defineGetter(this, "srcarrow", function() {
            return this.view.ImgArrow.src;
        });
        defineSetter(this, "top2", function(val) {
            this.view.imgIcon.top = val;
        });
        defineGetter(this, "top2", function() {
            return this.view.imgIcon.top;
        });
        defineSetter(this, "left3", function(val) {
            this.view.imgIcon.left = val;
        });
        defineGetter(this, "left3", function() {
            return this.view.imgIcon.left;
        });
        defineSetter(this, "centerX2", function(val) {
            this.view.imgIcon.centerX = val;
        });
        defineGetter(this, "centerX2", function() {
            return this.view.imgIcon.centerX;
        });
        defineSetter(this, "centerY2", function(val) {
            this.view.imgIcon.centerY = val;
        });
        defineGetter(this, "centerY2", function() {
            return this.view.imgIcon.centerY;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_onClick_fb9145162bf04e62b85638f728072029 = function() {
        if (this.onClick) {
            this.onClick.apply(this, arguments);
        }
    }
    controller.AS_onTouchEnd1_fb9145162bf04e62b85638f728072029 = function() {
        if (this.onTouchEnd1) {
            this.onTouchEnd1.apply(this, arguments);
        }
    }
    return controller;
});
