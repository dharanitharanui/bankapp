define(function() {
    return function(controller) {
        var mpin = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "mpin",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "90%"
        }, controller.args[0], "mpin"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "mpin"), extendConfig({}, controller.args[2], "mpin"));
        mpin.setDefaultUnit(kony.flex.DP);
        var lblMpinHeader = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblMpinHeader",
            "isVisible": true,
            "skin": "sknMpinHeader",
            "text": "Create mPIN",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblMpinHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMpinHeader"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMpinHeader"));
        var lblMPin = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblMPin",
            "isVisible": true,
            "skin": "sknLblMpin",
            "text": "mPIN",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "7%",
            "width": "90%",
            "zIndex": 4
        }, controller.args[0], "lblMPin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMPin"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMPin"));
        var flxmPin = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "13%",
            "id": "flxmPin",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0e2ad5f69b9f64d",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxmPin"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "flxmPin"), extendConfig({}, controller.args[2], "flxmPin"));
        flxmPin.setDefaultUnit(kony.flex.DP);
        var flxMpin1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flxMpin1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "3%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "13%",
            "zIndex": 1
        }, controller.args[0], "flxMpin1"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "flxMpin1"), extendConfig({}, controller.args[2], "flxMpin1"));
        flxMpin1.setDefaultUnit(kony.flex.DP);
        var txtMpin1 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "90%",
            "id": "txtMpin1",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "maxTextLength": 1,
            "secureTextEntry": true,
            "skin": "sknMpinBox",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "txtMpin1"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtMpin1"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtMpin1"));
        var lblLine = new kony.ui.Label(extendConfig({
            "height": "2%",
            "id": "lblLine",
            "isVisible": true,
            "left": "10%",
            "skin": "sknLblBgBlack",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblLine"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLine"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblLine"));
        flxMpin1.add(txtMpin1, lblLine);
        var flxMpin2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flxMpin2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "1%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "13%",
            "zIndex": 1
        }, controller.args[0], "flxMpin2"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "flxMpin2"), extendConfig({}, controller.args[2], "flxMpin2"));
        flxMpin2.setDefaultUnit(kony.flex.DP);
        var txtMpin2 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "90%",
            "id": "txtMpin2",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "maxTextLength": 1,
            "secureTextEntry": true,
            "skin": "sknMpinBox",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "txtMpin2"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtMpin2"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtMpin2"));
        var lblLine2 = new kony.ui.Label(extendConfig({
            "height": "2%",
            "id": "lblLine2",
            "isVisible": true,
            "left": "10%",
            "skin": "sknLblBgBlack",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblLine2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLine2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblLine2"));
        flxMpin2.add(txtMpin2, lblLine2);
        var flxMpin3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flxMpin3",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "1%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "13%",
            "zIndex": 1
        }, controller.args[0], "flxMpin3"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "flxMpin3"), extendConfig({}, controller.args[2], "flxMpin3"));
        flxMpin3.setDefaultUnit(kony.flex.DP);
        var txtMpin3 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "90%",
            "id": "txtMpin3",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "maxTextLength": 1,
            "secureTextEntry": true,
            "skin": "sknMpinBox",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "txtMpin3"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtMpin3"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtMpin3"));
        var lblLine3 = new kony.ui.Label(extendConfig({
            "height": "2%",
            "id": "lblLine3",
            "isVisible": true,
            "left": "10%",
            "skin": "sknLblBgBlack",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblLine3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLine3"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblLine3"));
        flxMpin3.add(txtMpin3, lblLine3);
        var flxMpin4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flxMpin4",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "1%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "13%",
            "zIndex": 1
        }, controller.args[0], "flxMpin4"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "flxMpin4"), extendConfig({}, controller.args[2], "flxMpin4"));
        flxMpin4.setDefaultUnit(kony.flex.DP);
        var txtMpin4 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "90%",
            "id": "txtMpin4",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "maxTextLength": 1,
            "secureTextEntry": true,
            "skin": "sknMpinBox",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "txtMpin4"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtMpin4"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtMpin4"));
        var lblLine4 = new kony.ui.Label(extendConfig({
            "height": "2%",
            "id": "lblLine4",
            "isVisible": true,
            "left": "10%",
            "skin": "sknLblBgBlack",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblLine4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLine4"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblLine4"));
        flxMpin4.add(txtMpin4, lblLine4);
        var flxMpin5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flxMpin5",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "1%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "13%",
            "zIndex": 1
        }, controller.args[0], "flxMpin5"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "flxMpin5"), extendConfig({}, controller.args[2], "flxMpin5"));
        flxMpin5.setDefaultUnit(kony.flex.DP);
        var txtMpin5 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "90%",
            "id": "txtMpin5",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "maxTextLength": 1,
            "secureTextEntry": true,
            "skin": "sknMpinBox",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "txtMpin5"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtMpin5"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtMpin5"));
        var lblLine5 = new kony.ui.Label(extendConfig({
            "height": "2%",
            "id": "lblLine5",
            "isVisible": true,
            "left": "10%",
            "skin": "sknLblBgBlack",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblLine5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLine5"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblLine5"));
        flxMpin5.add(txtMpin5, lblLine5);
        var flxMpin6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flxMpin6",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "1%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "13%",
            "zIndex": 1
        }, controller.args[0], "flxMpin6"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "flxMpin6"), extendConfig({}, controller.args[2], "flxMpin6"));
        flxMpin6.setDefaultUnit(kony.flex.DP);
        var txtMpin6 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "90%",
            "id": "txtMpin6",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "maxTextLength": 1,
            "secureTextEntry": true,
            "skin": "sknMpinBox",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "txtMpin6"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtMpin6"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtMpin6"));
        var lblLine6 = new kony.ui.Label(extendConfig({
            "height": "2%",
            "id": "lblLine6",
            "isVisible": true,
            "left": "10%",
            "skin": "sknLblBgBlack",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblLine6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLine6"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblLine6"));
        flxMpin6.add(txtMpin6, lblLine6);
        var imgMPin = new kony.ui.Image2(extendConfig({
            "centerY": "60%",
            "height": "25px",
            "id": "imgMPin",
            "isVisible": true,
            "left": "3%",
            "skin": "slImage",
            "src": "view.png",
            "width": "25px",
            "zIndex": 1
        }, controller.args[0], "imgMPin"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgMPin"), extendConfig({}, controller.args[2], "imgMPin"));
        flxmPin.add(flxMpin1, flxMpin2, flxMpin3, flxMpin4, flxMpin5, flxMpin6, imgMPin);
        var lblErrorMpin = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblErrorMpin",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLblFntSize80Red",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "3dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblErrorMpin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorMpin"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblErrorMpin"));
        var lblConfirmMPin = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblConfirmMPin",
            "isVisible": true,
            "skin": "sknLblMpin",
            "text": "Confirm mPIN",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "4%",
            "width": "90%",
            "zIndex": 4
        }, controller.args[0], "lblConfirmMPin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblConfirmMPin"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblConfirmMPin"));
        var flxConfirmMPin = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "12%",
            "id": "flxConfirmMPin",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "1dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0e2ad5f69b9f64d",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxConfirmMPin"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "flxConfirmMPin"), extendConfig({}, controller.args[2], "flxConfirmMPin"));
        flxConfirmMPin.setDefaultUnit(kony.flex.DP);
        var flxCMpin1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flxCMpin1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "3%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "13%",
            "zIndex": 1
        }, controller.args[0], "flxCMpin1"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "flxCMpin1"), extendConfig({}, controller.args[2], "flxCMpin1"));
        flxCMpin1.setDefaultUnit(kony.flex.DP);
        var txtCMpin1 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "90%",
            "id": "txtCMpin1",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "maxTextLength": 1,
            "secureTextEntry": true,
            "skin": "sknMpinBox",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "txtCMpin1"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtCMpin1"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtCMpin1"));
        var lblCLine1 = new kony.ui.Label(extendConfig({
            "height": "2%",
            "id": "lblCLine1",
            "isVisible": true,
            "left": "10%",
            "skin": "sknLblBgBlack",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblCLine1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCLine1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCLine1"));
        flxCMpin1.add(txtCMpin1, lblCLine1);
        var flxCMpin2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flxCMpin2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "1%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "13%",
            "zIndex": 1
        }, controller.args[0], "flxCMpin2"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "flxCMpin2"), extendConfig({}, controller.args[2], "flxCMpin2"));
        flxCMpin2.setDefaultUnit(kony.flex.DP);
        var txtCMpin2 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "90%",
            "id": "txtCMpin2",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "maxTextLength": 1,
            "secureTextEntry": true,
            "skin": "sknMpinBox",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "txtCMpin2"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtCMpin2"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtCMpin2"));
        var lblCLine2 = new kony.ui.Label(extendConfig({
            "height": "2%",
            "id": "lblCLine2",
            "isVisible": true,
            "left": "10%",
            "skin": "sknLblBgBlack",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblCLine2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCLine2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCLine2"));
        flxCMpin2.add(txtCMpin2, lblCLine2);
        var flxCMpin3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flxCMpin3",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "1%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "13%",
            "zIndex": 1
        }, controller.args[0], "flxCMpin3"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "flxCMpin3"), extendConfig({}, controller.args[2], "flxCMpin3"));
        flxCMpin3.setDefaultUnit(kony.flex.DP);
        var txtCMpin3 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "90%",
            "id": "txtCMpin3",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "maxTextLength": 1,
            "secureTextEntry": true,
            "skin": "sknMpinBox",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "txtCMpin3"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtCMpin3"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtCMpin3"));
        var lblCLine3 = new kony.ui.Label(extendConfig({
            "height": "2%",
            "id": "lblCLine3",
            "isVisible": true,
            "left": "10%",
            "skin": "sknLblBgBlack",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblCLine3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCLine3"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCLine3"));
        flxCMpin3.add(txtCMpin3, lblCLine3);
        var flxCMpin4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flxCMpin4",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "1%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "13%",
            "zIndex": 1
        }, controller.args[0], "flxCMpin4"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "flxCMpin4"), extendConfig({}, controller.args[2], "flxCMpin4"));
        flxCMpin4.setDefaultUnit(kony.flex.DP);
        var txtCMpin4 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "90%",
            "id": "txtCMpin4",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "maxTextLength": 1,
            "secureTextEntry": true,
            "skin": "sknMpinBox",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "txtCMpin4"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtCMpin4"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtCMpin4"));
        var lblCLine4 = new kony.ui.Label(extendConfig({
            "height": "2%",
            "id": "lblCLine4",
            "isVisible": true,
            "left": "10%",
            "skin": "sknLblBgBlack",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblCLine4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCLine4"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCLine4"));
        flxCMpin4.add(txtCMpin4, lblCLine4);
        var flxCMpin5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flxCMpin5",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "1%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "13%",
            "zIndex": 1
        }, controller.args[0], "flxCMpin5"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "flxCMpin5"), extendConfig({}, controller.args[2], "flxCMpin5"));
        flxCMpin5.setDefaultUnit(kony.flex.DP);
        var txtCMpin5 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "90%",
            "id": "txtCMpin5",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "maxTextLength": 1,
            "secureTextEntry": true,
            "skin": "sknMpinBox",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "txtCMpin5"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtCMpin5"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtCMpin5"));
        var lblCLine5 = new kony.ui.Label(extendConfig({
            "height": "2%",
            "id": "lblCLine5",
            "isVisible": true,
            "left": "10%",
            "skin": "sknLblBgBlack",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblCLine5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCLine5"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCLine5"));
        flxCMpin5.add(txtCMpin5, lblCLine5);
        var flxCMpin6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flxCMpin6",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "1%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "13%",
            "zIndex": 1
        }, controller.args[0], "flxCMpin6"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "flxCMpin6"), extendConfig({}, controller.args[2], "flxCMpin6"));
        flxCMpin6.setDefaultUnit(kony.flex.DP);
        var txtCMpin6 = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "90%",
            "id": "txtCMpin6",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "maxTextLength": 1,
            "secureTextEntry": true,
            "skin": "sknMpinBox",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "txtCMpin6"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtCMpin6"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtCMpin6"));
        var lblCLine6 = new kony.ui.Label(extendConfig({
            "height": "2%",
            "id": "lblCLine6",
            "isVisible": true,
            "left": "10%",
            "skin": "sknLblBgBlack",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblCLine6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCLine6"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCLine6"));
        flxCMpin6.add(txtCMpin6, lblCLine6);
        var imgMPinC = new kony.ui.Image2(extendConfig({
            "centerY": "60%",
            "height": "25px",
            "id": "imgMPinC",
            "isVisible": true,
            "left": "3%",
            "skin": "slImage",
            "src": "view.png",
            "width": "25px",
            "zIndex": 1
        }, controller.args[0], "imgMPinC"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgMPinC"), extendConfig({}, controller.args[2], "imgMPinC"));
        flxConfirmMPin.add(flxCMpin1, flxCMpin2, flxCMpin3, flxCMpin4, flxCMpin5, flxCMpin6, imgMPinC);
        var lblErrorConfirmMpin = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblErrorConfirmMpin",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLblFntSize80Red",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "3dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblErrorConfirmMpin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorConfirmMpin"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblErrorConfirmMpin"));
        var btnCreate = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "height": "30dp",
            "id": "btnCreate",
            "isVisible": true,
            "skin": "sknBtnCreateMpin",
            "text": "Create",
            "top": "6%",
            "width": "40%",
            "zIndex": 4
        }, controller.args[0], "btnCreate"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCreate"), extendConfig({}, controller.args[2], "btnCreate"));
        mpin.add(lblMpinHeader, lblMPin, flxmPin, lblErrorMpin, lblConfirmMPin, flxConfirmMPin, lblErrorConfirmMpin, btnCreate);
        return mpin;
    }
})