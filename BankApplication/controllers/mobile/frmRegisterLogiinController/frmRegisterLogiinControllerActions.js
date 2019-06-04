define({
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
        self.view.flxLoginCustomer.animate(
        kony.ui.createAnimation({
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