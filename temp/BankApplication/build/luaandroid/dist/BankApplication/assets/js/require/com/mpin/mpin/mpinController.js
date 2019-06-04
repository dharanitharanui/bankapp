var bool = false;
define("com/mpin/mpin/usermpinController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            //Create mPIN
            this.view.btnCreate.onClick = this.createMpin;
            // For auto focus function call
            this.view.txtMpin1.onTextChange = this.mPinFocus;
            this.view.txtMpin2.onTextChange = this.mPinFocus;
            this.view.txtMpin3.onTextChange = this.mPinFocus;
            this.view.txtMpin4.onTextChange = this.mPinFocus;
            this.view.txtMpin5.onTextChange = this.mPinFocus;
            this.view.txtMpin6.onTextChange = this.mPinFocus;
            this.view.txtCMpin1.onTextChange = this.mPinFocus;
            this.view.txtCMpin2.onTextChange = this.mPinFocus;
            this.view.txtCMpin3.onTextChange = this.mPinFocus;
            this.view.txtCMpin4.onTextChange = this.mPinFocus;
            this.view.txtCMpin5.onTextChange = this.mPinFocus;
            this.view.txtCMpin6.onTextChange = this.mPinFocus;
            // For auto focus function call end
            this.view.imgMPin.onTouchStart = this.showMpin;
            this.view.imgMPinC.onTouchStart = this.showCMpin;
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        // mPIN Function
        mPinFocus: function(eventObj) {
            //alert(eventObj.id);
            if (eventObj.id === "txtMpin1") {
                this.view.txtMpin2.setFocus(true);
            } else if (eventObj.id === "txtMpin2") {
                this.view.txtMpin3.setFocus(true);
            } else if (eventObj.id === "txtMpin3") {
                this.view.txtMpin4.setFocus(true);
            } else if (eventObj.id === "txtMpin4") {
                this.view.txtMpin5.setFocus(true);
            } else if (eventObj.id === "txtMpin5") {
                this.view.txtMpin6.setFocus(true);
            } else if (eventObj.id === "txtMpin6") {
                this.view.txtCMpin1.setFocus(true);
            } else if (eventObj.id === "txtCMpin1") {
                this.view.txtCMpin2.setFocus(true);
            } else if (eventObj.id === "txtCMpin2") {
                this.view.txtCMpin3.setFocus(true);
            } else if (eventObj.id === "txtCMpin3") {
                this.view.txtCMpin4.setFocus(true);
            } else if (eventObj.id === "txtCMpin4") {
                this.view.txtCMpin5.setFocus(true);
            } else if (eventObj.id === "txtCMpin5") {
                this.view.txtCMpin6.setFocus(true);
            } else if (eventObj.id === "txtCMpin6") {
                this.empty();
            }
        },
        empty: function() {},
        showMpin: function() {
            if (this.view.imgMPin.src === "view.png") {
                this.view.imgMPin.src = "maskview.png";
                this.view.txtMpin1.secureTextEntry = false;
                this.view.txtMpin2.secureTextEntry = false;
                this.view.txtMpin3.secureTextEntry = false;
                this.view.txtMpin4.secureTextEntry = false;
                this.view.txtMpin5.secureTextEntry = false;
                this.view.txtMpin6.secureTextEntry = false;
            } else if (this.view.imgMPin.src === "maskview.png") {
                this.view.imgMPin.src = "view.png";
                this.view.txtMpin1.secureTextEntry = true;
                this.view.txtMpin2.secureTextEntry = true;
                this.view.txtMpin3.secureTextEntry = true;
                this.view.txtMpin4.secureTextEntry = true;
                this.view.txtMpin5.secureTextEntry = true;
                this.view.txtMpin6.secureTextEntry = true;
            }
        },
        showCMpin: function() {
            if (this.view.imgMPinC.src === "view.png") {
                this.view.imgMPinC.src = "maskview.png";
                this.view.txtCMpin1.secureTextEntry = false;
                this.view.txtCMpin2.secureTextEntry = false;
                this.view.txtCMpin3.secureTextEntry = false;
                this.view.txtCMpin4.secureTextEntry = false;
                this.view.txtCMpin5.secureTextEntry = false;
                this.view.txtCMpin6.secureTextEntry = false;
            } else if (this.view.imgMPinC.src === "maskview.png") {
                this.view.imgMPinC.src = "view.png";
                this.view.txtCMpin1.secureTextEntry = true;
                this.view.txtCMpin2.secureTextEntry = true;
                this.view.txtCMpin3.secureTextEntry = true;
                this.view.txtCMpin4.secureTextEntry = true;
                this.view.txtCMpin5.secureTextEntry = true;
                this.view.txtCMpin6.secureTextEntry = true;
            }
        },
        clearMpin: function() {
            this.view.txtMpin1.text = "";
            this.view.txtMpin2.text = "";
            this.view.txtMpin3.text = "";
            this.view.txtMpin4.text = "";
            this.view.txtMpin5.text = "";
            this.view.txtMpin6.text = "";
            this.view.txtCMpin1.text = "";
            this.view.txtCMpin2.text = "";
            this.view.txtCMpin3.text = "";
            this.view.txtCMpin4.text = "";
            this.view.txtCMpin5.text = "";
            this.view.txtCMpin6.text = "";
        },
        createMpin: function() {
            //alert("Function Called");
            if (this.view.txtMpin1.text === null || this.view.txtMpin1.text === "" || this.view.txtMpin2.text === null || this.view.txtMpin2.text === "" || this.view.txtMpin3.text === null || this.view.txtMpin3.text === "" || this.view.txtMpin4.text === null || this.view.txtMpin4.text === "" || this.view.txtMpin5.text === null || this.view.txtMpin5.text === "" || this.view.txtMpin6.text === null || this.view.txtMpin6.text === "") {
                //alert("mpin is mandatory");
                this.view.lblErrorMpin.text = "* mPIN is mandatory";
            } else if (this.view.txtCMpin1.text === null || this.view.txtCMpin1.text === "" || this.view.txtCMpin2.text === null || this.view.txtCMpin2.text === "" || this.view.txtCMpin3.text === null || this.view.txtCMpin3.text === "" || this.view.txtCMpin4.text === null || this.view.txtCMpin4.text === "" || this.view.txtCMpin5.text === null || this.view.txtCMpin5.text === "" || this.view.txtCMpin6.text === null || this.view.txtCMpin6.text === "") {
                //alert(" Confirm mpin is mandatory");
                this.view.lblErrorMpin.text = "";
                this.view.lblErrorConfirmMpin.text = "* Comfirm mPIN is mandatory";
            } else {
                this.view.lblErrorMpin.text = "";
                this.view.lblErrorConfirmMpin.text = "";
                // mPIN
                var mpinFirstDigit = this.view.txtMpin1.text;
                var mpinSecondDigit = this.view.txtMpin2.text;
                var mpinThirdDigit = this.view.txtMpin3.text;
                var mpinFourDigit = this.view.txtMpin4.text;
                var mpinFiveDigit = this.view.txtMpin5.text;
                var mpinSixDigit = this.view.txtMpin6.text;
                // Confirm mPIN
                var mpinFirstDigitC = this.view.txtCMpin1.text;
                var mpinSecondDigitC = this.view.txtCMpin2.text;
                var mpinThirdDigitC = this.view.txtCMpin3.text;
                var mpinFourDigitC = this.view.txtCMpin4.text;
                var mpinFiveDigitC = this.view.txtCMpin5.text;
                var mpinSixDigitC = this.view.txtCMpin6.text;
                // Concordinate all the individual numbers
                var mpin = mpinFirstDigit.toString() + mpinSecondDigit.toString() + mpinThirdDigit.toString() + mpinFourDigit.toString() + mpinFiveDigit.toString() + mpinSixDigit.toString();
                var confirmMpin = mpinFirstDigitC.toString() + mpinSecondDigitC.toString() + mpinThirdDigitC.toString() + mpinFourDigitC.toString() + mpinFiveDigitC.toString() + mpinSixDigitC.toString();
                //
                if (confirmMpin !== mpin) {
                    this.view.lblErrorConfirmMpin.text = "* mPINs should be same";
                } else {
                    alert("Success");
                    this.clearMpin();
                }
            }
        }
    };
});
define("com/mpin/mpin/mpinControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/mpin/mpin/mpinController", ["com/mpin/mpin/usermpinController", "com/mpin/mpin/mpinControllerActions"], function() {
    var controller = require("com/mpin/mpin/usermpinController");
    var actions = require("com/mpin/mpin/mpinControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "mPin1", function(val) {
            this.view.txtMpin1.text = val;
        });
        defineGetter(this, "mPin1", function() {
            return this.view.txtMpin1.text;
        });
        defineSetter(this, "mPin2", function(val) {
            this.view.txtMpin2.text = val;
        });
        defineGetter(this, "mPin2", function() {
            return this.view.txtMpin2.text;
        });
        defineSetter(this, "mPin3", function(val) {
            this.view.txtMpin3.text = val;
        });
        defineGetter(this, "mPin3", function() {
            return this.view.txtMpin3.text;
        });
        defineSetter(this, "mPin4", function(val) {
            this.view.txtMpin4.text = val;
        });
        defineGetter(this, "mPin4", function() {
            return this.view.txtMpin4.text;
        });
        defineSetter(this, "mPin5", function(val) {
            this.view.txtMpin5.text = val;
        });
        defineGetter(this, "mPin5", function() {
            return this.view.txtMpin5.text;
        });
        defineSetter(this, "mPin6", function(val) {
            this.view.txtMpin6.text = val;
        });
        defineGetter(this, "mPin6", function() {
            return this.view.txtMpin6.text;
        });
        defineSetter(this, "mCPin1", function(val) {
            this.view.txtCMpin1.text = val;
        });
        defineGetter(this, "mCPin1", function() {
            return this.view.txtCMpin1.text;
        });
        defineSetter(this, "mCPin2", function(val) {
            this.view.txtCMpin2.text = val;
        });
        defineGetter(this, "mCPin2", function() {
            return this.view.txtCMpin2.text;
        });
        defineSetter(this, "mCPin3", function(val) {
            this.view.txtCMpin3.text = val;
        });
        defineGetter(this, "mCPin3", function() {
            return this.view.txtCMpin3.text;
        });
        defineSetter(this, "mCPin4", function(val) {
            this.view.txtCMpin4.text = val;
        });
        defineGetter(this, "mCPin4", function() {
            return this.view.txtCMpin4.text;
        });
        defineSetter(this, "mCPin5", function(val) {
            this.view.txtCMpin5.text = val;
        });
        defineGetter(this, "mCPin5", function() {
            return this.view.txtCMpin5.text;
        });
        defineSetter(this, "mCPin6", function(val) {
            this.view.txtCMpin6.text = val;
        });
        defineGetter(this, "mCPin6", function() {
            return this.view.txtCMpin6.text;
        });
        defineSetter(this, "mask1", function(val) {
            this.view.txtMpin1.secureTextEntry = val;
        });
        defineGetter(this, "mask1", function() {
            return this.view.txtMpin1.secureTextEntry;
        });
        defineSetter(this, "mask2", function(val) {
            this.view.txtMpin2.secureTextEntry = val;
        });
        defineGetter(this, "mask2", function() {
            return this.view.txtMpin2.secureTextEntry;
        });
        defineSetter(this, "mask3", function(val) {
            this.view.txtMpin3.secureTextEntry = val;
        });
        defineGetter(this, "mask3", function() {
            return this.view.txtMpin3.secureTextEntry;
        });
        defineSetter(this, "mask4", function(val) {
            this.view.txtMpin4.secureTextEntry = val;
        });
        defineGetter(this, "mask4", function() {
            return this.view.txtMpin4.secureTextEntry;
        });
        defineSetter(this, "mask5", function(val) {
            this.view.txtMpin5.secureTextEntry = val;
        });
        defineGetter(this, "mask5", function() {
            return this.view.txtMpin5.secureTextEntry;
        });
        defineSetter(this, "mask6", function(val) {
            this.view.txtMpin6.secureTextEntry = val;
        });
        defineGetter(this, "mask6", function() {
            return this.view.txtMpin6.secureTextEntry;
        });
        defineSetter(this, "cmask1", function(val) {
            this.view.txtCMpin1.secureTextEntry = val;
        });
        defineGetter(this, "cmask1", function() {
            return this.view.txtCMpin1.secureTextEntry;
        });
        defineSetter(this, "cmask2", function(val) {
            this.view.txtCMpin2.secureTextEntry = val;
        });
        defineGetter(this, "cmask2", function() {
            return this.view.txtCMpin2.secureTextEntry;
        });
        defineSetter(this, "cmask3", function(val) {
            this.view.txtCMpin3.secureTextEntry = val;
        });
        defineGetter(this, "cmask3", function() {
            return this.view.txtCMpin3.secureTextEntry;
        });
        defineSetter(this, "cmask4", function(val) {
            this.view.txtCMpin4.secureTextEntry = val;
        });
        defineGetter(this, "cmask4", function() {
            return this.view.txtCMpin4.secureTextEntry;
        });
        defineSetter(this, "cmask5", function(val) {
            this.view.txtCMpin5.secureTextEntry = val;
        });
        defineGetter(this, "cmask5", function() {
            return this.view.txtCMpin5.secureTextEntry;
        });
        defineSetter(this, "cmask6", function(val) {
            this.view.txtCMpin6.secureTextEntry = val;
        });
        defineGetter(this, "cmask6", function() {
            return this.view.txtCMpin6.secureTextEntry;
        });
        defineSetter(this, "srcCMpin", function(val) {
            this.view.imgMPinC.src = val;
        });
        defineGetter(this, "srcCMpin", function() {
            return this.view.imgMPinC.src;
        });
        defineSetter(this, "srcMpin", function(val) {
            this.view.imgMPin.src = val;
        });
        defineGetter(this, "srcMpin", function() {
            return this.view.imgMPin.src;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
