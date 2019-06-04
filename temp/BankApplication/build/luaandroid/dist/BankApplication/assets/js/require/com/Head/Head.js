define(function() {
    return function(controller) {
        var Head = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "isMaster": true,
            "id": "Head",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "Head"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "Head"), extendConfig({}, controller.args[2], "Head"));
        Head.setDefaultUnit(kony.flex.DP);
        var flxHead = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxHead",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgBlue",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHead"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "flxHead"), extendConfig({}, controller.args[2], "flxHead"));
        flxHead.setDefaultUnit(kony.flex.DP);
        var btnMenu = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "height": "60%",
            "id": "btnMenu",
            "isVisible": true,
            "left": "3%",
            "skin": "sknBtnBgImage",
            "width": "7%",
            "zIndex": 1
        }, controller.args[0], "btnMenu"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnMenu"), extendConfig({}, controller.args[2], "btnMenu"));
        var lblHead = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblHead",
            "isVisible": true,
            "skin": "sknLblFntSize150White",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblHead"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHead"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblHead"));
        flxHead.add(btnMenu, lblHead);
        Head.add(flxHead);
        return Head;
    }
})