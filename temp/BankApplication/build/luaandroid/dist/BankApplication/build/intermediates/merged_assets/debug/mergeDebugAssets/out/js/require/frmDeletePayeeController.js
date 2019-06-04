define("userfrmDeletePayeeController", {
    //Type your controller code here 
});
define("frmDeletePayeeControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmDeletePayeeController", ["userfrmDeletePayeeController", "frmDeletePayeeControllerActions"], function() {
    var controller = require("userfrmDeletePayeeController");
    var controllerActions = ["frmDeletePayeeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
