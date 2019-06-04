define("userfrmRegisterLogiinController", {
    addAccount: function() {
        var mobileNumber = this.view.textMobile.text;
        if (mobileNumber === "" || mobileNumber === null || mobileNumber === undefined) {
            this.view.textMobile.visible = true;
        } else if (mobileNumber !== "9659459414") {
            this.view.textMobile.visible = true;
            this.view.textMobile.error = "* This number doesn't match with any account";
        } else {
            this.view.textMobile.visible = false;
            this.loginFlxMoveToCreateMpin();
            this.view.textMobile.text = "";
        }
    },
    clearMpinInForm() {
        this.view.mpin.mPin1 = "";
        this.view.mpin.mPin2 = "";
        this.view.mpin.mPin3 = "";
        this.view.mpin.mPin4 = "";
        this.view.mpin.mPin5 = "";
        this.view.mpin.mPin6 = "";
        this.view.mpin.mCPin1 = "";
        this.view.mpin.mCPin2 = "";
        this.view.mpin.mCPin3 = "";
        this.view.mpin.mCPin4 = "";
        this.view.mpin.mCPin5 = "";
        this.view.mpin.mCPin6 = "";
    },
    clearMask: function() {
        this.view.mpin.mask1 = true;
        this.view.mpin.mask2 = true;
        this.view.mpin.mask3 = true;
        this.view.mpin.mask4 = true;
        this.view.mpin.mask5 = true;
        this.view.mpin.mask6 = true;
        this.view.mpin.mask6 = true;
        this.view.mpin.cmask1 = true;
        this.view.mpin.cmask2 = true;
        this.view.mpin.cmask3 = true;
        this.view.mpin.cmask4 = true;
        this.view.mpin.cmask5 = true;
        this.view.mpin.cmask6 = true;
        this.view.mpin.srcMpin = "view.png";
        this.view.mpin.srcCMpin = "view.png";
    },
    loginFlxMoveToCreateMpin: function(eventobject) {
        var self = this;

        function MOVE_ACTION____d602b801955944a282566f5a9476606d_Callback() {}

        function MOVE_ACTION____h098c69b002e4e6d9425ff92bae3dfa1_Callback() {}
        self.view.flxLoginCustomer.animate(kony.ui.createAnimation({
            "100": {
                "centerX": "-150%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.9
        }, {
            "animationEnd": MOVE_ACTION____h098c69b002e4e6d9425ff92bae3dfa1_Callback
        });
        this.view.flxLoginCustomer.isVisible = false;
        self.view.flxCreatemPIN.animate(kony.ui.createAnimation({
            "100": {
                "centerX": "150%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____d602b801955944a282566f5a9476606d_Callback
        });
        this.view.flxLoginCustomer.isVisible = true;
        self.view.flxCreatemPIN.animate(kony.ui.createAnimation({
            "100": {
                "centerX": "63%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.9
        }, {
            "animationEnd": MOVE_ACTION____d602b801955944a282566f5a9476606d_Callback
        });
    },
    backToLogin: function() {
        var self = this;
        this.clearMpinInForm();
        this.clearMask();

        function MOVE_ACTION____d602b801955944a282566f5a9476606d_Callback() {}
        self.view.flxCreatemPIN.animate(kony.ui.createAnimation({
            "100": {
                "centerX": "-150%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.8
        }, {
            "animationEnd": MOVE_ACTION____d602b801955944a282566f5a9476606d_Callback
        });

        function MOVE_ACTION____b3a0dc9c2afb47678fdcc3cb475eb2c5_Callback() {}
        this.view.flxLoginCustomer.isVisible = false;
        self.view.flxLoginCustomer.animate(kony.ui.createAnimation({
            "100": {
                "centerX": "150%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____b3a0dc9c2afb47678fdcc3cb475eb2c5_Callback
        });
        this.view.flxLoginCustomer.isVisible = true;

        function MOVE_ACTION____j2508a6e05be49aaa92d1127be55af2f_Callback() {}
        self.view.flxLoginCustomer.animate(kony.ui.createAnimation({
            "100": {
                "centerX": "60%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": MOVE_ACTION____j2508a6e05be49aaa92d1127be55af2f_Callback
        });
    },
});
define("frmRegisterLogiinControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for backToLogin **/
    AS_Button_e4c8f8859218431c9db4b6197208ede5: function AS_Button_e4c8f8859218431c9db4b6197208ede5(eventobject) {
        var self = this;
        return self.backToLogin.call(this);
    },
    /** postShow defined for frmRegisterLogiin **/
    AS_Form_h2cdf76cd6664454a7d662074bc8d5db: function AS_Form_h2cdf76cd6664454a7d662074bc8d5db(eventobject) {
        var self = this;

        function MOVE_ACTION____a1e2ec714d1449efa1a16eec8ab44b44_Callback() {}
        this.view.flxLoginCustomer.isVisible = true;
        self.view.flxLoginCustomer.animate(kony.ui.createAnimation({
            "100": {
                "centerX": "60%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.7
        }, {
            "animationEnd": MOVE_ACTION____a1e2ec714d1449efa1a16eec8ab44b44_Callback
        });
    },
    /** onDeviceBack defined for frmRegisterLogiin **/
    AS_Form_ea730cc3655e41c5a7a1ea4d3d095b8f: function AS_Form_ea730cc3655e41c5a7a1ea4d3d095b8f(eventobject) {
        var self = this;
    }
});
define("frmRegisterLogiinController", ["userfrmRegisterLogiinController", "frmRegisterLogiinControllerActions"], function() {
    var controller = require("userfrmRegisterLogiinController");
    var controllerActions = ["frmRegisterLogiinControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
