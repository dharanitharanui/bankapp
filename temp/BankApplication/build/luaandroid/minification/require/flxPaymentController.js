define("userflxPaymentController", {
    //Type your controller code here 
});
define("flxPaymentControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxPaymentController", ["userflxPaymentController", "flxPaymentControllerActions"], function() {
    var controller = require("userflxPaymentController");
    var controllerActions = ["flxPaymentControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
