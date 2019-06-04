define("userflxBankController", {
    //Type your controller code here 
});
define("flxBankControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxBankController", ["userflxBankController", "flxBankControllerActions"], function() {
    var controller = require("userflxBankController");
    var controllerActions = ["flxBankControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
