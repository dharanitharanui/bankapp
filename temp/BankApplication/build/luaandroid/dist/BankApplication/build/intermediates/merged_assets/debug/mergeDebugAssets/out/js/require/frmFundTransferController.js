define("userfrmFundTransferController", {
    //Type your controller code here 
    recent: function() {
        try {
            this.view.tab.tabsrc = "bank_recent_blue.png";
            this.view.tab.tabskin = "sknLblFntSize120Blue";
            this.view.tab.tabvisible = true;
            this.view.tab1.tabsrc = "bank_upcoming_grey.png";
            this.view.tab1.tabskin = "sknLblFntSize120Grey";
            this.view.tab1.tabvisible = false;
            this.view.tab2.tabsrc = "bank_all_payee_grey.png";
            this.view.tab2.tabskin = "sknLblFntSize120Grey";
            this.view.tab2.tabvisible = false;
        } catch (error) {
            alert("Recent error" + error);
        }
    },
    upcoming: function() {
        try {
            this.view.tab.tabsrc = "bank_recent_grey.png";
            this.view.tab.tabskin = "sknLblFntSize120Grey";
            this.view.tab.tabvisible = false;
            this.view.tab1.tabsrc = "bank_upcoming_blue.png";
            this.view.tab1.tabskin = "sknLblFntSize120Blue";
            this.view.tab1.tabvisible = true;
            this.view.tab2.tabsrc = "bank_all_payee_grey.png";
            this.view.tab2.tabskin = "sknLblFntSize120Grey";
            this.view.tab2.tabvisible = false;
        } catch (error) {
            alert("upcoming error" + error);
        }
    },
    allpayee: function() {
        try {
            this.view.tab.tabsrc = "bank_recent_grey.png";
            this.view.tab.tabskin = "sknLblFntSize120Grey";
            this.view.tab.tabvisible = false;
            this.view.tab1.tabsrc = "bank_upcoming_grey.png";
            this.view.tab1.tabskin = "sknLblFntSize120Grey";
            this.view.tab1.tabvisible = false;
            this.view.tab2.tabsrc = "bank_allpayyee_blue.png";
            this.view.tab2.tabskin = "sknLblFntSize120Blue";
            this.view.tab2.tabvisible = true;
        } catch (error) {
            alert("allpayee error" + error);
        }
    },
    buttom: function(eventobj) {
        try {
            this.view.text.setFocus(false);
            if (eventobj.text === "Add Payee") {
                this.view.buttonn4.onclick = this.diffrentbank;
                this.view.buttonn3.onclick = this.samebank;
                this.view.buttonn5.onclick = this.mobileno;
                this.view.buttonn2.text = "Add Payee";
            } else if (eventobj.text === "Delete Payee") {
                this.view.buttonn4.onclick = this.diffrentbankdelete;
                this.view.buttonn3.onclick = this.samebankdelete;
                this.view.buttonn5.onclick = this.mobilenodelete;
                this.view.buttonn2.text = "Delete Payee";
            }
            this.view.flxBack.isVisible = true;
        } catch (error) {
            alert("buttom" + error);
        }
    },
    popupclose: function() {
        try {
            this.view.flxBack.isVisible = false;
            this.view.buttonn2.text = "";
        } catch (error) {
            alert("Error" + error);
        }
    },
    diffrentbank: function() {
        try {
            var diffrent = 2;
            new kony.mvc.Navigation("frmAddAccountDetails").navigate(diffrent);
            this.popupclose();
        } catch (error) {
            alert("diffrentbank" + error);
        }
    },
    samebank: function() {
        try {
            var same = 1;
            new kony.mvc.Navigation("frmAddAccountDetails").navigate(same);
            this.popupclose();
        } catch (error) {
            alert("samebank" + error);
        }
    },
    mobileno: function() {
        try {
            var mobile = 3;
            new kony.mvc.Navigation("frmAddAccountDetails").navigate(mobile);
            this.popupclose();
        } catch (error) {
            alert("samebank" + error);
        }
    },
    diffrentbankdelete: function() {
        try {
            var diffrent = 2;
            new kony.mvc.Navigation("frmDeletePayee").navigate(diffrent);
            this.popupclose();
        } catch (error) {
            alert("Error" + error);
        }
    },
    samebankdelete: function() {
        try {
            var same = 1;
            new kony.mvc.Navigation("frmDeletePayee").navigate(same);
            this.popupclose();
        } catch (error) {
            alert("Error" + error);
        }
    },
    mobilenodelete: function() {
        try {
            var mobile = 3;
            new kony.mvc.Navigation("frmDeletePayee").navigate(mobile);
            this.popupclose();
        } catch (error) {
            alert("Error" + error);
        }
    },
    paysamebank: function() {
        try {
            var paysame = 1;
            new kony.mvc.Navigation("frmPayee").navigate(paysame);
        } catch (error) {
            alert("paysamebank" + error);
        }
    },
    paydiffbank: function() {
        try {
            var diff = 2;
            new kony.mvc.Navigation("frmPayee").navigate(diff);
        } catch (error) {
            alert("paysamebank" + error);
        }
    },
    paymobilebank: function() {
        try {
            var mobile = 3;
            new kony.mvc.Navigation("frmPayee").navigate(mobile);
        } catch (error) {
            alert("paysamebank" + error);
        }
    },
    payfavbank: function() {
        try {
            var fav = 4;
            new kony.mvc.Navigation("frmPayee").navigate(fav);
        } catch (error) {
            alert("paysamebank" + error);
        }
    }
});
define("frmFundTransferControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** tabonClick defined for tab **/
    AS_UWI_a503c24e837c4932b814c27bbd7e90e5: function AS_UWI_a503c24e837c4932b814c27bbd7e90e5(eventobject) {
        var self = this;

        function MOVE_ACTION____j4894c0e0d1f4f54860734c8e1f982d0_Callback() {}

        function MOVE_ACTION____d2a06168337d4c72a5bb0a7d14ed63e6_Callback() {}

        function MOVE_ACTION____d01336cdad624968823db69a03e51b54_Callback() {}
        self.recent.call(this);
        self.view.flxSeg.animate(kony.ui.createAnimation({
            "100": {
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "duration": 0.25,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "iterationCount": 1
        }, {
            "animationEnd": MOVE_ACTION____d01336cdad624968823db69a03e51b54_Callback
        });
        self.view.flxUpcoming.animate(kony.ui.createAnimation({
            "100": {
                "left": "100%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "duration": 0.25,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "iterationCount": 1
        }, {
            "animationEnd": MOVE_ACTION____d2a06168337d4c72a5bb0a7d14ed63e6_Callback
        });
        self.view.flxAllpayee.animate(kony.ui.createAnimation({
            "100": {
                "left": "100%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "duration": 0.25,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "iterationCount": 1
        }, {
            "animationEnd": MOVE_ACTION____j4894c0e0d1f4f54860734c8e1f982d0_Callback
        });
    },
    /** tabonClick defined for tab1 **/
    AS_UWI_e002eba031d943498c08e2cf5d086af4: function AS_UWI_e002eba031d943498c08e2cf5d086af4(eventobject) {
        var self = this;

        function MOVE_ACTION____i7f0eb983f944e5db1273cbbead50070_Callback() {}

        function MOVE_ACTION____c3e5544203b14ac0ba0ad843f7f195d5_Callback() {}

        function MOVE_ACTION____f0c9210cf8194f57877f39341aa0f90e_Callback() {}
        self.upcoming.call(this);
        self.view.flxSeg.animate(kony.ui.createAnimation({
            "100": {
                "left": "-100%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "duration": 0.25,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "iterationCount": 1
        }, {
            "animationEnd": MOVE_ACTION____f0c9210cf8194f57877f39341aa0f90e_Callback
        });
        self.view.flxUpcoming.animate(kony.ui.createAnimation({
            "100": {
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "duration": 0.25,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "iterationCount": 1
        }, {
            "animationEnd": MOVE_ACTION____c3e5544203b14ac0ba0ad843f7f195d5_Callback
        });
        self.view.flxAllpayee.animate(kony.ui.createAnimation({
            "100": {
                "left": "100%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "duration": 0.25,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "iterationCount": 1
        }, {
            "animationEnd": MOVE_ACTION____i7f0eb983f944e5db1273cbbead50070_Callback
        });
    },
    /** tabonClick defined for tab2 **/
    AS_UWI_c05999a0a5264a058040ba61a0ec4863: function AS_UWI_c05999a0a5264a058040ba61a0ec4863(eventobject) {
        var self = this;

        function MOVE_ACTION____c099c0ec1d3e48a3816df5e7f7512d26_Callback() {}

        function MOVE_ACTION____ca5ee9f24b7644759f739a4fd4f7baba_Callback() {}

        function MOVE_ACTION____ec7857509c894fb398827ea0d797d58a_Callback() {}
        self.allpayee.call(this);
        self.view.flxSeg.animate(kony.ui.createAnimation({
            "100": {
                "left": "-100%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "duration": 0.25,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "iterationCount": 1
        }, {
            "animationEnd": MOVE_ACTION____ec7857509c894fb398827ea0d797d58a_Callback
        });
        self.view.flxUpcoming.animate(kony.ui.createAnimation({
            "100": {
                "left": "-100%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "duration": 0.25,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "iterationCount": 1
        }, {
            "animationEnd": MOVE_ACTION____ca5ee9f24b7644759f739a4fd4f7baba_Callback
        });
        self.view.flxAllpayee.animate(kony.ui.createAnimation({
            "100": {
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "duration": 0.25,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "iterationCount": 1
        }, {
            "animationEnd": MOVE_ACTION____c099c0ec1d3e48a3816df5e7f7512d26_Callback
        });
    },
    /** tabonClick defined for tab3 **/
    AS_UWI_b7ed5a51ae5a4f31bb23bd6a4e42d6e7: function AS_UWI_b7ed5a51ae5a4f31bb23bd6a4e42d6e7(eventobject) {
        var self = this;
        return self.paysamebank.call(this);
    },
    /** tabonClick defined for tab4 **/
    AS_UWI_d9a84357bfc44ee191a5f384f100b441: function AS_UWI_d9a84357bfc44ee191a5f384f100b441(eventobject) {
        var self = this;
        return self.paydiffbank.call(this);
    },
    /** tabonClick defined for tab5 **/
    AS_UWI_hf5e10d902af4e8aa9d861d06e217068: function AS_UWI_hf5e10d902af4e8aa9d861d06e217068(eventobject) {
        var self = this;
        return self.paymobilebank.call(this);
    },
    /** tabonClick defined for tab6 **/
    AS_UWI_b22a74866ec441c0b49f5404c9773fce: function AS_UWI_b22a74866ec441c0b49f5404c9773fce(eventobject) {
        var self = this;
        return self.payfavbank.call(this);
    },
    /** onclick defined for buttonn **/
    AS_UWI_ic974eb0919d434cb77de15d9621fbda: function AS_UWI_ic974eb0919d434cb77de15d9621fbda(eventobject) {
        var self = this;
        return self.buttom.call(this, eventobject);
    },
    /** onclick defined for buttonn1 **/
    AS_UWI_a6e0ca10e8484bd69e478ecf5c8cb8f2: function AS_UWI_a6e0ca10e8484bd69e478ecf5c8cb8f2(eventobject) {
        var self = this;
        return self.buttom.call(this, eventobject);
    },
    /** onClick defined for btnClose **/
    AS_Button_a908eea299334a9bb4931cca46086a9e: function AS_Button_a908eea299334a9bb4931cca46086a9e(eventobject) {
        var self = this;
        return self.popupclose.call(this);
    }
});
define("frmFundTransferController", ["userfrmFundTransferController", "frmFundTransferControllerActions"], function() {
    var controller = require("userfrmFundTransferController");
    var controllerActions = ["frmFundTransferControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
