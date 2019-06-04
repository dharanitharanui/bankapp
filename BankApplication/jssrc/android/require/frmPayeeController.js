var headtitle;
define("userfrmPayeeController", {
    onNavigate: function(content) {
            try {
                headtitle = content;
                if (headtitle === 1) {
                    this.view.Head.text = "DPS Bank Payee";
                } else if (headtitle === 2) {
                    this.view.Head.text = "Other Bank Payee";
                } else if (headtitle === 3) {
                    this.view.Head.text = "Mobile Payee";
                } else if (headtitle === 4) {
                    this.view.Head.text = "Favourite Payee";
                }
            } catch (error) {
                alert("Error" + error);
            }
        }
        //Type your controller code here 
});
define("frmPayeeControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("frmPayeeController", ["userfrmPayeeController", "frmPayeeControllerActions"], function() {
    var controller = require("userfrmPayeeController");
    var controllerActions = ["frmPayeeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
