define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for Head **/
    AS_UWI_ce277151670a45caaf4e53d0ed4bb72d: function AS_UWI_ce277151670a45caaf4e53d0ed4bb72d(eventobject) {
        var self = this;
        return self.HamburgerIn.call(this, null, null, null);
    },
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
    /** onClick defined for flxBlack **/
    AS_FlexContainer_a57b1df64b544e14a077aa0d5ae3a1ae: function AS_FlexContainer_a57b1df64b544e14a077aa0d5ae3a1ae(eventobject) {
        var self = this;
        return self.Empty.call(this);
    },
    /** onClick defined for Close **/
    AS_UWI_a2e9d1f020b7468eb62b2960375b1c47: function AS_UWI_a2e9d1f020b7468eb62b2960375b1c47(eventobject) {
        var self = this;
        this.view.flxImpsPopup.isVisible = false;
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