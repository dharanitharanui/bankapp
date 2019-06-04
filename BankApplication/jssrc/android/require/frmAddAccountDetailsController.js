var visiblevalue;
define("userfrmAddAccountDetailsController", {
    onNavigate: function(content) {
            if (content === 1) {
                this.view.flxSameBank.isVisible = true;
                this.view.text7.isVisible = false;
                this.view.text13.isVisible = false;
                this.view.flxDiffrentBank.isVisible = false;
                this.view.flxMobile.isVisible = false;
            } else if (content === 2) {
                this.view.flxSameBank.isVisible = false;
                this.view.flxDiffrentBank.isVisible = true;
                this.view.text3.isVisible = false;
                this.view.textRemark.isVisible = false;
                this.view.flxMobile.isVisible = false;
            } else {
                this.view.flxSameBank.isVisible = false;
                this.view.flxDiffrentBank.isVisible = false;
                this.view.flxMobile.isVisible = true;
            }
        }
        //Type your controller code here 
});
define("frmAddAccountDetailsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnSearchIfsc **/
    AS_Button_cfef02daa4a44c249ed66e937475a92f: function AS_Button_cfef02daa4a44c249ed66e937475a92f(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmIfsc");
        ntf.navigate();
    }
});
define("frmAddAccountDetailsController", ["userfrmAddAccountDetailsController", "frmAddAccountDetailsControllerActions"], function() {
    var controller = require("userfrmAddAccountDetailsController");
    var controllerActions = ["frmAddAccountDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
