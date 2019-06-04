var mobileno;
var OTP = '';
define("userfrmOtpController", {
    onNavigate: function(content) {
        try {
            mobileno = content;
            var digits = '0123456789';
            for (var i = 0; i < 4; i++) {
                OTP += digits[Math.floor(Math.random() * 10)];
            }
            var sendotp = new kony.net.HttpRequest();
            sendotp.open(constants.HTTP_METHOD_POST, "https://control.msg91.com/api/sendotp.php?otp=" + OTP + "&otp_length=4&otp_expiry=1&sender=TESTIN&mobile=+91" + mobileno + "&authkey=261425AnQWnKfJ7Fk5c596b26");
            sendotp.send();
        } catch (error) {
            alert("Error" + error);
        }
    },
    focus: function(textfocus) {
        try {
            if (textfocus.text.length !== 0) {
                if (textfocus.id === "text1") {
                    this.view.text2.setFocus(true);
                } else if (textfocus.id === "text2") {
                    this.view.text3.setFocus(true);
                } else if (textfocus.id === "text3") {
                    this.view.text4.setFocus(true);
                }
            }
        } catch (error) {
            alert("Error" + error);
        }
    },
    resend: function() {
        try {
            var resendotp = new kony.net.HttpRequest();
            resendotp.open(constants.HTTP_METHOD_POST, "https://control.msg91.com/api/retryotp.php?mobile=+91" + mobileno + "&authkey=261425AnQWnKfJ7Fk5c596b26");
            resendotp.send();
        } catch (error) {
            alert("Error" + error);
        }
    },
    verify: function() {
        try {
            var otpnumber = this.view.text1.text + this.view.text2.text + this.view.text3.text + this.view.text4.text;
            if (otpnumber.length === 4) {
                var verifyotp = new kony.net.HttpRequest();
                verifyotp.open(constants.HTTP_METHOD_POST, "https://control.msg91.com/api/verifyRequestOTP.php?authkey=261425AnQWnKfJ7Fk5c596b26&mobile=+91" + mobileno + "&otp=" + otpnumber);
                verifyotp.send();
            }
        } catch (error) {
            alert("Error" + error);
        }
    }
});
define("frmOtpControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTextChange defined for text1 **/
    AS_TextField_e0fbbf7621394b9cab153c85eecd5af8: function AS_TextField_e0fbbf7621394b9cab153c85eecd5af8(eventobject, changedtext) {
        var self = this;
        return self.focus.call(this, eventobject);
    },
    /** onTextChange defined for text2 **/
    AS_TextField_b8a21eaab72844d391ab215b6b795382: function AS_TextField_b8a21eaab72844d391ab215b6b795382(eventobject, changedtext) {
        var self = this;
        return self.focus.call(this, eventobject);
    },
    /** onTextChange defined for text3 **/
    AS_TextField_cd8e0cd713a8480fb6333331eb57d069: function AS_TextField_cd8e0cd713a8480fb6333331eb57d069(eventobject, changedtext) {
        var self = this;
        return self.focus.call(this, eventobject);
    },
    /** onTextChange defined for text4 **/
    AS_TextField_h704585aa3b84b2e89e9f480d82e04c9: function AS_TextField_h704585aa3b84b2e89e9f480d82e04c9(eventobject, changedtext) {
        var self = this;
        return self.focus.call(this, eventobject);
    },
    /** onclick defined for buttonn **/
    AS_UWI_e8223d8619b345128f74d70b9f316b43: function AS_UWI_e8223d8619b345128f74d70b9f316b43(eventobject) {
        var self = this;
        return self.resend.call(this);
    },
    /** onclick defined for buttonn1 **/
    AS_UWI_dd5602c3f826470680f7580bb0d3152d: function AS_UWI_dd5602c3f826470680f7580bb0d3152d(eventobject) {
        var self = this;
        return self.verify.call(this);
    }
});
define("frmOtpController", ["userfrmOtpController", "frmOtpControllerActions"], function() {
    var controller = require("userfrmOtpController");
    var controllerActions = ["frmOtpControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
