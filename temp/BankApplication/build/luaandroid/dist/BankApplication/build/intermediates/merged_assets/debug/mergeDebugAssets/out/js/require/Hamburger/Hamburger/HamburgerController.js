var Applybool = true;
var currentform = kony.application.getCurrentForm();
define("Hamburger/Hamburger/userHamburgerController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        Home: function() {
            this.HamurgerOut();
            Applybool = false;
            kony.timer.cancel("mytimer12");
            new kony.mvc.Navigation("frmDashBoard").navigate(Applybool);
            //this.HamurgerOut();
        },
        Apply: function() {
            if (Applybool === true) {
                this.view.Debit.isVisible = true;
                this.view.Credit.isVisible = true;
                this.view.Loan.isVisible = true;
                this.view.BlockCard.isVisible = true;
                this.view.Apply.srcarrow = "up.png";
                Applybool = false;
            } else if (Applybool === false) {
                this.view.Debit.isVisible = false;
                this.view.Credit.isVisible = false;
                this.view.Loan.isVisible = false;
                this.view.BlockCard.isVisible = false;
                this.view.Apply.srcarrow = "down.png";
                Applybool = true;
            }
        },
        Credit: function() {
            this.HamurgerOut();
        },
        Debit: function() {
            this.HamurgerOut();
        },
        Loan: function() {
            this.HamurgerOut();
        },
        RecentTransaction: function() {
            this.HamurgerOut();
        },
        AddPayee: function() {
            this.HamurgerOut();
        },
        ContactUs: function() {
            this.HamurgerOut();
        },
        Help: function() {
            this.HamurgerOut();
            new kony.mvc.Navigation("frmHelpandContact").navigate();
        },
        Settings: function() {
            this.HamurgerOut();
            new kony.mvc.Navigation("frmAccountsSettings").navigate();
            //        currentform.flxDetails.isVisible=false;     
        },
        Logout: function() {
            this.HamurgerOut();
        },
        HamurgerOut: function(eventobject, x, y) {
            kony.timer.cancel("mytimer12");
            var self = this;

            function TRANSFORM_ACTION____ec6685af401341b58cde7ec99ee11a17_Callback() {}
            if (kony.application.getCurrentForm().id === "frmDashBoard") {
                var dashboard = kony.application.getCurrentForm();
                kony.timer.cancel("mytimer12");
                dashboard.flxDashBoard.animate(kony.ui.createAnimation({
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
            } else if (kony.application.getCurrentForm().id === "frmAccountsSettings") {
                var account = kony.application.getCurrentForm();
                kony.timer.cancel("mytimer12");
                account.flxDetailsSettings.animate(kony.ui.createAnimation({
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
            } else if (kony.application.getCurrentForm().id === "frmHelpandContact") {
                var help = kony.application.getCurrentForm();
                kony.timer.cancel("mytimer12");
                help.flxMainHelp.animate(kony.ui.createAnimation({
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
            }
            ApplyboolHamburger = true;
            Applybool = false;
            this.Apply();
            //this.view.flxBlack.isVisible=false;
        }
    };
});
define("Hamburger/Hamburger/HamburgerControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for Home **/
    AS_UWI_fe6ffbc5d586416885aa124070932a32: function AS_UWI_fe6ffbc5d586416885aa124070932a32(eventobject) {
        var self = this;
        return self.Home.call(this);
    },
    /** onClick defined for Apply **/
    AS_UWI_c72a8bf431684aa99636334175fe1c6a: function AS_UWI_c72a8bf431684aa99636334175fe1c6a(eventobject) {
        var self = this;
        return self.Apply.call(this);
    },
    /** onClick defined for Help **/
    AS_UWI_j522c49109274d9abb87230fa281459d: function AS_UWI_j522c49109274d9abb87230fa281459d(eventobject) {
        var self = this;
        return self.Help.call(this);
    },
    /** onClick defined for settings **/
    AS_UWI_c9c74f574a56460084f6ab16feda31ba: function AS_UWI_c9c74f574a56460084f6ab16feda31ba(eventobject) {
        var self = this;
        return self.Settings.call(this);
    }
});
define("Hamburger/Hamburger/HamburgerController", ["Hamburger/Hamburger/userHamburgerController", "Hamburger/Hamburger/HamburgerControllerActions"], function() {
    var controller = require("Hamburger/Hamburger/userHamburgerController");
    var actions = require("Hamburger/Hamburger/HamburgerControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "VisibleBank", function(val) {
            this.view.Home.VisibleBank = val;
        });
        defineGetter(this, "VisibleBank", function() {
            return this.view.Home.VisibleBank;
        });
        defineSetter(this, "text", function(val) {
            this.view.Home.OptionText = val;
        });
        defineGetter(this, "text", function() {
            return this.view.Home.OptionText;
        });
        defineSetter(this, "CreditVisible", function(val) {
            this.view.Credit.Visibleflex = val;
        });
        defineGetter(this, "CreditVisible", function() {
            return this.view.Credit.Visibleflex;
        });
        defineSetter(this, "DebitVisible", function(val) {
            this.view.Debit.Visibleflex = val;
        });
        defineGetter(this, "DebitVisible", function() {
            return this.view.Debit.Visibleflex;
        });
        defineSetter(this, "LoanVisible", function(val) {
            this.view.Loan.Visibleflex = val;
        });
        defineGetter(this, "LoanVisible", function() {
            return this.view.Loan.Visibleflex;
        });
        defineSetter(this, "BlockCardVisible", function(val) {
            this.view.BlockCard.Visibleflex = val;
        });
        defineGetter(this, "BlockCardVisible", function() {
            return this.view.BlockCard.Visibleflex;
        });
        defineSetter(this, "srcarrow", function(val) {
            this.view.Apply.srcarrow = val;
        });
        defineGetter(this, "srcarrow", function() {
            return this.view.Apply.srcarrow;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
