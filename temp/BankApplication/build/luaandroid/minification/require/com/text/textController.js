define("com/text/usertextController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
    };
});
define("com/text/textControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTextChange defined for txtText **/
    AS_TextField_fcc641d5804341af8f63f0ed6b533ad5: function AS_TextField_fcc641d5804341af8f63f0ed6b533ad5(eventobject, changedtext) {
        var self = this;
    }
});
define("com/text/textController", ["com/text/usertextController", "com/text/textControllerActions"], function() {
    var controller = require("com/text/usertextController");
    var actions = require("com/text/textControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "visible", function(val) {
            this.view.lblError.isVisible = val;
        });
        defineGetter(this, "visible", function() {
            return this.view.lblError.isVisible;
        });
        defineSetter(this, "text", function(val) {
            this.view.txtText.text = val;
        });
        defineGetter(this, "text", function() {
            return this.view.txtText.text;
        });
        defineSetter(this, "placeholder", function(val) {
            this.view.txtText.placeholder = val;
        });
        defineGetter(this, "placeholder", function() {
            return this.view.txtText.placeholder;
        });
        defineSetter(this, "maxTextLength", function(val) {
            this.view.txtText.maxTextLength = val;
        });
        defineGetter(this, "maxTextLength", function() {
            return this.view.txtText.maxTextLength;
        });
        defineSetter(this, "secureTextEntry", function(val) {
            this.view.txtText.secureTextEntry = val;
        });
        defineGetter(this, "secureTextEntry", function() {
            return this.view.txtText.secureTextEntry;
        });
        defineSetter(this, "restrictCharactersSet", function(val) {
            this.view.txtText.restrictCharactersSet = val;
        });
        defineGetter(this, "restrictCharactersSet", function() {
            return this.view.txtText.restrictCharactersSet;
        });
        defineSetter(this, "autoCapitalize", function(val) {
            this.view.txtText.autoCapitalize = val;
        });
        defineGetter(this, "autoCapitalize", function() {
            return this.view.txtText.autoCapitalize;
        });
        defineSetter(this, "keyBoardStyle", function(val) {
            this.view.txtText.keyBoardStyle = val;
        });
        defineGetter(this, "keyBoardStyle", function() {
            return this.view.txtText.keyBoardStyle;
        });
        defineSetter(this, "textInputMode", function(val) {
            this.view.txtText.textInputMode = val;
        });
        defineGetter(this, "textInputMode", function() {
            return this.view.txtText.textInputMode;
        });
        defineSetter(this, "error", function(val) {
            this.view.lblError.text = val;
        });
        defineGetter(this, "error", function() {
            return this.view.lblError.text;
        });
        defineSetter(this, "width1", function(val) {
            this.view.txtText.width = val;
        });
        defineGetter(this, "width1", function() {
            return this.view.txtText.width;
        });
        defineSetter(this, "contentAlignment", function(val) {
            this.view.txtText.contentAlignment = val;
        });
        defineGetter(this, "contentAlignment", function() {
            return this.view.txtText.contentAlignment;
        });
        defineSetter(this, "skin1", function(val) {
            this.view.txtText.skin = val;
        });
        defineGetter(this, "skin1", function() {
            return this.view.txtText.skin;
        });
        defineSetter(this, "isVisible1", function(val) {
            this.view.lblLine.isVisible = val;
        });
        defineGetter(this, "isVisible1", function() {
            return this.view.lblLine.isVisible;
        });
        defineSetter(this, "focusSkin1", function(val) {
            this.view.txtText.focusSkin = val;
        });
        defineGetter(this, "focusSkin1", function() {
            return this.view.txtText.focusSkin;
        });
        defineSetter(this, "placeholderSkin", function(val) {
            this.view.txtText.placeholderSkin = val;
        });
        defineGetter(this, "placeholderSkin", function() {
            return this.view.txtText.placeholderSkin;
        });
        defineSetter(this, "padding", function(val) {
            this.view.txtText.padding = val;
        });
        defineGetter(this, "padding", function() {
            return this.view.txtText.padding;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
