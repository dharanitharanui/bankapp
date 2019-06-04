define(function() {
    return function(controller) {
        var text = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "isMaster": true,
            "id": "text",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "100%"
        }, controller.args[0], "text"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "text"), extendConfig({}, controller.args[2], "text"));
        text.setDefaultUnit(kony.flex.DP);
        var flxText = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxText",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxText"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "flxText"), extendConfig({}, controller.args[2], "flxText"));
        flxText.setDefaultUnit(kony.flex.DP);
        var txtText = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopysknTxtFntSize",
            "height": "45dp",
            "id": "txtText",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "10%",
            "secureTextEntry": false,
            "skin": "CopysknTxtFntSize",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "txtText"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtText"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "sknTxtFntSize130Grey",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtText"));
        var lblLine = new kony.ui.Label(extendConfig({
            "height": "1dp",
            "id": "lblLine",
            "isVisible": true,
            "left": "10%",
            "skin": "CopysknLblBgBlack",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "45dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblLine"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLine"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblLine"));
        var lblError = new kony.ui.Label(extendConfig({
            "id": "lblError",
            "isVisible": true,
            "left": "10%",
            "skin": "CopysknLblFntSize",
            "text": "Account number fields cannot be empty.",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "47dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblError"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblError"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblError"));
        flxText.add(txtText, lblLine, lblError);
        text.add(flxText);
        return text;
    }
})