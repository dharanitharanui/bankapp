define("userfrmIfscController", {});
define("frmIfscControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** postShow defined for frmIfsc **/
    AS_Form_i5e1d0f176804c428d3e6a57a9329877: function AS_Form_i5e1d0f176804c428d3e6a57a9329877(eventobject) {
        var self = this;
    }
});
define("frmIfscController", ["userfrmIfscController", "frmIfscControllerActions"], function() {
    var controller = require("userfrmIfscController");
    var controllerActions = ["frmIfscControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
