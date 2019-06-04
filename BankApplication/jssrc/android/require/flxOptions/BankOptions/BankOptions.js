define(function() {
    return function(controller) {
        var BankOptions = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "isMaster": true,
            "id": "BankOptions",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "BankOptions"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "BankOptions"), extendConfig({}, controller.args[2], "BankOptions"));
        BankOptions.setDefaultUnit(kony.flex.DP);
        var flxDashBoard = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxDashBoard",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "onClick": controller.AS_onClick_fb9145162bf04e62b85638f728072029,
            "onTouchEnd": controller.AS_onTouchEnd1_fb9145162bf04e62b85638f728072029,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxDashBoard"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "flxDashBoard"), extendConfig({}, controller.args[2], "flxDashBoard"));
        flxDashBoard.setDefaultUnit(kony.flex.DP);
        var imgIcon = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "id": "imgIcon",
            "isVisible": true,
            "left": "5%",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "9%",
            "zIndex": 2
        }, controller.args[0], "imgIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgIcon"), extendConfig({}, controller.args[2], "imgIcon"));
        var lblBankOptions = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "lblBankOptions",
            "isVisible": true,
            "left": "25%",
            "skin": "sknlblFntBgBlackFntSize150",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblBankOptions"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBankOptions"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblBankOptions"));
        var ImgArrow = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "id": "ImgArrow",
            "isVisible": false,
            "left": "86%",
            "skin": "slImage",
            "src": "down_2.png",
            "top": "0dp",
            "width": "9%",
            "zIndex": 2
        }, controller.args[0], "ImgArrow"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "ImgArrow"), extendConfig({}, controller.args[2], "ImgArrow"));
        flxDashBoard.add(imgIcon, lblBankOptions, ImgArrow);
        BankOptions.add(flxDashBoard);
        return BankOptions;
    }
})