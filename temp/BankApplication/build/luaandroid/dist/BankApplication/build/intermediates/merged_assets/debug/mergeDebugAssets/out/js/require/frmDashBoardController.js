var boolHamburger = true;
var boolApply = true;
var sidemenu = true;
var i = 0;
define("userfrmDashBoardController", {
    onNavigate(context) {
        sidemenu = context;
    },
    Apply: function() {
        //   if(boolApply===false){
        //      this.view.SideMenu.flxDashBoardCredit.isVisible=false;
        //       this.view.SideMenu.flxDashBoardDebit.isVisible=false;
        //       this.view.SideMenu.flxDashBoardLoan.isVisible=false;
        //        this.view.SideMenu.flxDashBoardBlockCard.isVisible=false;
        //       this.view.SideMenu.srcarrow="down.png";
        //     boolApply=true;
        // }
        //    else  if(boolApply===true){
        //       this.view.SideMenu.CreditVisible=true;
        //       this.view.SideMenu.DebitVisible=true;
        //       this.view.SideMenu.LoanVisible=true;
        //        this.view.SideMenu.BlockCardVisible=true;
        //       this.view.SideMenu.srcarrow="up.png";
        //      boolApply=true;
        //    }
    },
    HamburgerIn: function(eventobject, x, y) {
        var self = this;

        function TRANSFORM_ACTION____c6159badc89b440cadccf6631cce6bc0_Callback() {}
        if (boolHamburger === true) {
            self.view.flxDashBoard.animate(kony.ui.createAnimation({
                "100": {
                    "top": "0%",
                    "left": "70%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "height": "100%"
                }
            }), {
                "delay": 0,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.4
            }, {
                "animationEnd": TRANSFORM_ACTION____c6159badc89b440cadccf6631cce6bc0_Callback
            });
            boolHamburger = false;
            kony.timer.cancel("mytimer12");
            this.view.flxBlack.isVisible = true;
            this.view.flxImpsPopup.isVisible = false;
        } else if (boolHamburger === false) {
            this.HamurgerOut();
        }
    },
    HamurgerOut: function(eventobject, x, y) {
        var self = this;

        function TRANSFORM_ACTION____ec6685af401341b58cde7ec99ee11a17_Callback() {}
        self.view.flxDashBoard.animate(kony.ui.createAnimation({
            "100": {
                "top": "0%",
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "height": "100%"
            }
        }), {
            "delay": 0,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.4
        }, {
            "animationEnd": TRANSFORM_ACTION____ec6685af401341b58cde7ec99ee11a17_Callback
        });
        boolHamburger = true;
        this.Timer();
        this.view.flxBlack.isVisible = false;
        boolApply = true;
        sidemenu = false;
        this.Apply();
    },
    Empty: function() {
        this.HamurgerOut();
        //new kony.mvc.Navigation("frmDashBoard").navigate();
    },
    ImpsPopUpOn: function() {
        kony.timer.cancel("mytimer12");
        this.view.flxImpsPopup.isVisible = true;
    },
    ImpsPopUpoff: function() {
        this.view.flxImpsPopup.isVisible = false;
        this.Timer();
    },
    SegmentImages: function() {
        i = i + 1;
        if (i < 5) {
            this.view.SegmentAds.selectedRowIndex = [0, i];
        } else {
            i = 0;
            this.view.SegmentAds.selectedRowIndex = [0, i];
        }
    },
    Timer: function() {
        kony.timer.schedule("mytimer12", this.SegmentImages, 5, true);
        // this.Apply();
    },
    Accounts: function() {
        new kony.mvc.Navigation("frmAccountsSettings").navigate();
        kony.application.getCurrentForm().flxDetails.isVisible = true;
    }
});
define("frmDashBoardControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for Account **/
    AS_UWI_b5c3424518e24ddaadf53ad075335b44: function AS_UWI_b5c3424518e24ddaadf53ad075335b44(eventobject) {
        var self = this;
        return self.Accounts.call(this);
    },
    /** onClick defined for IMPS **/
    AS_UWI_f5103658965543ed89dd169db29e5e60: function AS_UWI_f5103658965543ed89dd169db29e5e60(eventobject) {
        var self = this;
        return self.ImpsPopUpOn.call(this);
    },
    /** onClick defined for FundTransfer **/
    AS_UWI_h7f64707fe7a4336b3dde61c37fbeda2: function AS_UWI_h7f64707fe7a4336b3dde61c37fbeda2(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmFundTransfer");
        ntf.navigate();
    },
    /** onClick defined for flxBlack **/
    AS_FlexContainer_a57b1df64b544e14a077aa0d5ae3a1ae: function AS_FlexContainer_a57b1df64b544e14a077aa0d5ae3a1ae(eventobject) {
        var self = this;
        return self.Empty.call(this);
    },
    /** preShow defined for frmDashBoard **/
    AS_Form_j566416c12a8433baf884fc5c3afd565: function AS_Form_j566416c12a8433baf884fc5c3afd565(eventobject) {
        var self = this;
        this.view.flxIconDashBoard.shadowType = constants.VIEW_BOUNDS_SHADOW;
        this.view.flxIconDashBoard.shadowDepth = 8;
        this.view.flxDashBoard.shadowType = constants.VIEW_BOUNDS_SHADOW;
        this.view.flxDashBoard.shadowDepth = 10;
    },
    /** postShow defined for frmDashBoard **/
    AS_Form_b0f1744a080340c7b95de8502ad6fe9b: function AS_Form_b0f1744a080340c7b95de8502ad6fe9b(eventobject) {
        var self = this;
        return self.Timer.call(this);
    }
});
define("frmDashBoardController", ["userfrmDashBoardController", "frmDashBoardControllerActions"], function() {
    var controller = require("userfrmDashBoardController");
    var controllerActions = ["frmDashBoardControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
