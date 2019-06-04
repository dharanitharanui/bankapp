var boolHamburger = true;
var head = false;
define("userfrmAccountsSettingsController", {
    onNavigate(context) {
        head = context;
        if (head === true) {
            this.view.Head.text = "Settings";
            this.view.flxDetails.isVisible = false;
        } else {
            this.view.Head.text = "AccountDetails";
            this.view.flxDetails.isVisible = true;
        }
    },
    HamburgerIn: function(eventobject, x, y) {
        var self = this;

        function TRANSFORM_ACTION____c6159badc89b440cadccf6631cce6bc0_Callback() {}
        if (boolHamburger === true) {
            self.view.flxDetailsSettings.animate(kony.ui.createAnimation({
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
        } else if (boolHamburger === false) {
            this.HamurgerOut();
        }
    },
    HamurgerOut: function(eventobject, x, y) {
        var self = this;

        function TRANSFORM_ACTION____ec6685af401341b58cde7ec99ee11a17_Callback() {}
        self.view.flxDetailsSettings.animate(kony.ui.createAnimation({
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
    }
});
define("frmAccountsSettingsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxDetailsSettings **/
    AS_FlexContainer_ee9e5694b9ae45c9b0d74c6e85980084: function AS_FlexContainer_ee9e5694b9ae45c9b0d74c6e85980084(eventobject) {
        var self = this;
        return self.HamurgerOut.call(this, null, null, null);
    },
    /** preShow defined for frmAccountsSettings **/
    AS_Form_fea8241a193848c0ab062098e9e97c92: function AS_Form_fea8241a193848c0ab062098e9e97c92(eventobject) {
        var self = this;
        this.view.flxAccounDetailsHeader.shadowType = constants.VIEW_BOUNDS_SHADOW;
        this.view.flxAccounDetailsHeader.shadowDepth = 8;
        this.view.flxDetailsSettings.shadowType = constants.VIEW_BOUNDS_SHADOW;
        this.view.flxDetailsSettings.shadowDepth = 10;
    }
});
define("frmAccountsSettingsController", ["userfrmAccountsSettingsController", "frmAccountsSettingsControllerActions"], function() {
    var controller = require("userfrmAccountsSettingsController");
    var controllerActions = ["frmAccountsSettingsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
