define("userflxAdsController", {
    //Type your controller code here 
});
define("flxAdsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxAdsController", ["userflxAdsController", "flxAdsControllerActions"], function() {
    var controller = require("userflxAdsController");
    var controllerActions = ["flxAdsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
