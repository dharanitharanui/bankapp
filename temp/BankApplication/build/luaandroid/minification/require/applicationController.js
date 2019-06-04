define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.buttonn", "buttonn", "buttonnController");
        kony.application.registerMaster({
            "namespace": "com",
            "classname": "buttonn",
            "name": "com.buttonn"
        });
        kony.mvc.registry.add("com.Head", "Head", "HeadController");
        kony.application.registerMaster({
            "namespace": "com",
            "classname": "Head",
            "name": "com.Head"
        });
        kony.mvc.registry.add("com.mpin.mpin", "mpin", "mpinController");
        kony.application.registerMaster({
            "namespace": "com.mpin",
            "classname": "mpin",
            "name": "com.mpin.mpin"
        });
        kony.mvc.registry.add("com.tab", "tab", "tabController");
        kony.application.registerMaster({
            "namespace": "com",
            "classname": "tab",
            "name": "com.tab"
        });
        kony.mvc.registry.add("com.text", "text", "textController");
        kony.application.registerMaster({
            "namespace": "com",
            "classname": "text",
            "name": "com.text"
        });
        kony.mvc.registry.add("flxOptions.BankOptions", "BankOptions", "BankOptionsController");
        kony.application.registerMaster({
            "namespace": "flxOptions",
            "classname": "BankOptions",
            "name": "flxOptions.BankOptions"
        });
        kony.mvc.registry.add("SingleLabel.Singlelabel", "Singlelabel", "SinglelabelController");
        kony.application.registerMaster({
            "namespace": "SingleLabel",
            "classname": "Singlelabel",
            "name": "SingleLabel.Singlelabel"
        });
        kony.mvc.registry.add("Hamburger.Hamburger", "Hamburger", "HamburgerController");
        kony.application.registerMaster({
            "namespace": "Hamburger",
            "classname": "Hamburger",
            "name": "Hamburger.Hamburger"
        });
        kony.mvc.registry.add("CopyflxSampleRowTemplate1", "CopyflxSampleRowTemplate1", "CopyflxSampleRowTemplate1Controller");
        kony.mvc.registry.add("CopyflxSampleRowTemplate4", "CopyflxSampleRowTemplate4", "CopyflxSampleRowTemplate4Controller");
        kony.mvc.registry.add("CopyflxSectionHeaderTemplate1", "CopyflxSectionHeaderTemplate1", "CopyflxSectionHeaderTemplate1Controller");
        kony.mvc.registry.add("CopyflxSectionHeaderTemplate4", "CopyflxSectionHeaderTemplate4", "CopyflxSectionHeaderTemplate4Controller");
        kony.mvc.registry.add("flxSampleRowTemplate", "flxSampleRowTemplate", "flxSampleRowTemplateController");
        kony.mvc.registry.add("flxSectionHeaderTemplate", "flxSectionHeaderTemplate", "flxSectionHeaderTemplateController");
        kony.mvc.registry.add("flxAds", "flxAds", "flxAdsController");
        kony.mvc.registry.add("flxBank", "flxBank", "flxBankController");
        kony.mvc.registry.add("flxPayment", "flxPayment", "flxPaymentController");
        kony.mvc.registry.add("frmAccountsSettings", "frmAccountsSettings", "frmAccountsSettingsController");
        kony.mvc.registry.add("frmAddAccountDetails", "frmAddAccountDetails", "frmAddAccountDetailsController");
        kony.mvc.registry.add("frmDashBoard", "frmDashBoard", "frmDashBoardController");
        kony.mvc.registry.add("frmDeletePayee", "frmDeletePayee", "frmDeletePayeeController");
        kony.mvc.registry.add("frmFundTransfer", "frmFundTransfer", "frmFundTransferController");
        kony.mvc.registry.add("frmHelpandContact", "frmHelpandContact", "frmHelpandContactController");
        kony.mvc.registry.add("frmIfsc", "frmIfsc", "frmIfscController");
        kony.mvc.registry.add("frmOtp", "frmOtp", "frmOtpController");
        kony.mvc.registry.add("frmPayee", "frmPayee", "frmPayeeController");
        kony.mvc.registry.add("frmRegisterLogiin", "frmRegisterLogiin", "frmRegisterLogiinController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmDashBoard").navigate();
    }
});