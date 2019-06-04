var boolHamburger = true;
define("userfrmHelpandContactController", {
    Label: function() {
        this.view.flxHelpContactHeader.shadowType = constants.VIEW_BOUNDS_SHADOW;
        this.view.flxHelpContactHeader.shadowDepth = 8;
        this.view.flxMainHelp.shadowType = constants.VIEW_BOUNDS_SHADOW;
        this.view.flxMainHelp.shadowDepth = 10;
        this.view.Question1.LabelText = "What are the features of DPS BANK MobileBanking?";
        this.view.Question2.LabelText = "What if I change my mobile number?";
        this.view.Question3.LabelText = "What are the charges for accessing this application?";
        this.view.Question4.LabelText = "Can I access the same bills which are registered in my Retail NetBanking?";
        this.view.Question5.LabelText = "What is IMPS?";
        this.view.Question6.LabelText = "What happens in case you enter a wrong beneficiary mobile number for remittance transaction in IMPS?";
        this.view.Question7.LabelText = "What should I do if I forget my MPIN?";
        this.view.Question8.LabelText = "When will my MobileBanking application gets blocked? What do I do if my MobileBanking application gets blocked?";
        this.view.Question9.LabelText = "What beneficiary details does the customer need to affect and IMPS remittance transaction?";
        this.view.Question10.LabelText = "What if you do not have a valid Retail NetBanking Registration in place when you download the mobile application?";
    },
    Answer1: function() {
        this.view.flxAnswers.isVisible = true;
        this.view.rchTxtAnswer.text = "<b>1.</b> No additional login credentials" + " " + "required as Retail NetBanking credentials are used for log-in to the application." + "<br>" + " " + "<b>2.</b> 24x7, Real Time - Inter Bank funds transfer by using IMPS" + "<br>" + " " + "<b>3.</b> Additional security of 4 digit secret MPIN for all transactions";
    },
    Answer2: function() {
        this.view.flxAnswers.isVisible = true;
        this.view.rchTxtAnswer.text = "You can update your mobile number with DPS BANK and then re-register for the service.";
    },
    Answer3: function() {
        this.view.flxAnswers.isVisible = true;
        this.view.rchTxtAnswer.text = "There are absolutely no registration or service charges for this application.However charges for your GPRS plan or SMS usage will be applicable as peryour data plan with your telecom service provider.";
    },
    Answer4: function() {
        this.view.flxAnswers.isVisible = true;
        this.view.rchTxtAnswer.text = "Currently the bill payments module is not synchronized with DPS BANK" + " MobileBanking and thus they operate as two separate modules. However we" + "will be integrating the same in next phase of the project and we will inform you" + "through SMS";
    },
    Answer5: function() {
        this.view.flxAnswers.isVisible = true;
        this.view.rchTxtAnswer.text = "Interbank Mobile Payment Service (IMPS) is an instant interbank electronic" + "fund transfer service through mobile phones. IMPS facilitates customers to use " + "mobile instruments as a channel for accessing their banks accounts (interbank)" + "and also fund transfer between these accounts." + "IMPS transactions can be sent and received at any time and any day. There are" + "no timing or holiday restrictions on IMPS remittances.";
    },
    Answer6: function() {
        this.view.flxAnswers.isVisible = true;
        this.view.rchTxtAnswer.text = "The beneficiary details required for making a remittance are mobile number and" + "MMID. The transaction will get declined in case anyone of these two numbers is" + "erroneous and the amount gets reversed instantly.";
    },
    Answer7: function() {
        this.view.flxAnswers.isVisible = true;
        this.view.rchTxtAnswer.text = "Your application has a Forgot MPIN option. You can set your new MPIN by" + "answering the secret question’s answer which was provided during the" + "registration process.";
    },
    Answer8: function() {
        this.view.flxAnswers.isVisible = true;
        this.view.rchTxtAnswer.text = "When you enter invalid login credentials for three times, your MobileBanking" + "application will get blocked." + "You can unblock your MobileBanking application by using the option” Unblock" + "your Account” where you can unblock your application using MPIN and secret" + "question answer.";
    },
    Answer9: function() {
        this.view.flxAnswers.isVisible = true;
        this.view.rchTxtAnswer.text = "The beneficiary details required are:" + "<br>" + "<b>a.</b> Beneficiary’s mobile number" + "<br>" + "<b>b</b> MMID of the beneficiary customer ";
    },
    Answer10: function() {
        this.view.flxAnswers.isVisible = true;
        this.view.rchTxtAnswer.text = "You can register for Retail NetBanking separately and then download this mobile" + "application and login using those credentials.";
    },
    HamburgerIn: function(eventobject, x, y) {
        var self = this;

        function TRANSFORM_ACTION____c6159badc89b440cadccf6631cce6bc0_Callback() {}
        if (boolHamburger === true) {
            self.view.flxMainHelp.animate(kony.ui.createAnimation({
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
        this.view.flxAnswers.isVisible = true;
        this.view.flxAnswers.skin = "slFbox";
        this.view.flxPopUp.isVisible = false;
    },
    HamurgerOut: function(eventobject, x, y) {
            var self = this;

            function TRANSFORM_ACTION____ec6685af401341b58cde7ec99ee11a17_Callback() {}
            self.view.flxMainHelp.animate(kony.ui.createAnimation({
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
            this.view.flxAnswers.isVisible = false;
            this.view.flxAnswers.skin = "sknFlxBgBlackOp70";
            this.view.flxPopUp.isVisible = true;
        }
        //Type your controller code here 
});
define("frmHelpandContactControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for Question1 **/
    AS_UWI_b5cb541e6e5543acb3ea3f2b1a3e86cd: function AS_UWI_b5cb541e6e5543acb3ea3f2b1a3e86cd(eventobject) {
        var self = this;
        return self.Answer1.call(this);
    },
    /** onClick defined for Question2 **/
    AS_UWI_j1668e0240b449b9b7f431d7744e3f68: function AS_UWI_j1668e0240b449b9b7f431d7744e3f68(eventobject) {
        var self = this;
        return self.Answer2.call(this);
    },
    /** onClick defined for Question3 **/
    AS_UWI_f13b623977934156ab3a5b1e4661a5af: function AS_UWI_f13b623977934156ab3a5b1e4661a5af(eventobject) {
        var self = this;
        return self.Answer3.call(this);
    },
    /** onClick defined for Question4 **/
    AS_UWI_h22c43e725b74914b9c691fd09e879df: function AS_UWI_h22c43e725b74914b9c691fd09e879df(eventobject) {
        var self = this;
        return self.Answer4.call(this);
    },
    /** onClick defined for Question5 **/
    AS_UWI_fe70bab814964ae9b36c8d1dad531f4e: function AS_UWI_fe70bab814964ae9b36c8d1dad531f4e(eventobject) {
        var self = this;
        return self.Answer5.call(this);
    },
    /** onClick defined for Question6 **/
    AS_UWI_e9a3a28b1b504e45a3d1cc24a5534d38: function AS_UWI_e9a3a28b1b504e45a3d1cc24a5534d38(eventobject) {
        var self = this;
        return self.Answer6.call(this);
    },
    /** onClick defined for Question7 **/
    AS_UWI_f929229713264b6bb55a6cf3a53fbf5d: function AS_UWI_f929229713264b6bb55a6cf3a53fbf5d(eventobject) {
        var self = this;
        return self.Answer7.call(this);
    },
    /** onClick defined for Question8 **/
    AS_UWI_cf1ccaf958ed4697a64fe2b3d6027964: function AS_UWI_cf1ccaf958ed4697a64fe2b3d6027964(eventobject) {
        var self = this;
        return self.Answer8.call(this);
    },
    /** onClick defined for Question9 **/
    AS_UWI_ec6d9b68c1e7426aac108d4b7ad8acf4: function AS_UWI_ec6d9b68c1e7426aac108d4b7ad8acf4(eventobject) {
        var self = this;
        return self.Answer9.call(this);
    },
    /** onClick defined for Question10 **/
    AS_UWI_b0f34b65a7d844879ea1b67f5cba3215: function AS_UWI_b0f34b65a7d844879ea1b67f5cba3215(eventobject) {
        var self = this;
        return self.Answer10.call(this);
    },
    /** onClick defined for flxAnswers **/
    AS_FlexContainer_i070b2a18ebb4a7288275a77433e5d24: function AS_FlexContainer_i070b2a18ebb4a7288275a77433e5d24(eventobject) {
        var self = this;
        this.HamurgerOut();
    },
    /** preShow defined for frmHelpandContact **/
    AS_Form_f8d2d0dae69a4f13aa94572f9353d7a8: function AS_Form_f8d2d0dae69a4f13aa94572f9353d7a8(eventobject) {
        var self = this;
        return self.Label.call(this);
    }
});
define("frmHelpandContactController", ["userfrmHelpandContactController", "frmHelpandContactControllerActions"], function() {
    var controller = require("userfrmHelpandContactController");
    var controllerActions = ["frmHelpandContactControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
