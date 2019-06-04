define("frmRegisterLogiin", function() {
    return function(controller) {
        function addWidgetsfrmRegisterLogiin() {
            this.setDefaultUnit(kony.flex.DP);
            var flxLoginRegister = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxLoginRegister",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxLoginRegister",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxLoginRegister.setDefaultUnit(kony.flex.DP);
            var imgBg = new kony.ui.Image2({
                "height": "100%",
                "id": "imgBg",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "loginbg.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblWelcome = new kony.ui.Label({
                "id": "lblWelcome",
                "isVisible": true,
                "left": "5%",
                "skin": "skn",
                "text": "Welcome to",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgLogo = new kony.ui.Image2({
                "height": "50dp",
                "id": "imgLogo",
                "isVisible": true,
                "left": "18%",
                "skin": "slImage",
                "src": "test.png",
                "top": "18%",
                "width": "50dp",
                "zIndex": 4
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxLoginCustomer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "150%",
                "centerY": "65%",
                "clipBounds": true,
                "height": "200dp",
                "id": "flxLoginCustomer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "70%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxLoginCustomer.setDefaultUnit(kony.flex.DP);
            var lblLoginHeader = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblLoginHeader",
                "isVisible": true,
                "skin": "defLabel",
                "text": "Login",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxLoginCustomer.add(lblLoginHeader);
            var flxCreatemPIN = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "150%",
                "centerY": "63%",
                "clipBounds": true,
                "height": "280dp",
                "id": "flxCreatemPIN",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "70%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxCreatemPIN.setDefaultUnit(kony.flex.DP);
            var mpin = new com.mpin.mpin({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80%",
                "id": "mpin",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "mpin": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var backToLogin = new kony.ui.Button({
                "bottom": "0%",
                "centerX": "50%",
                "height": "8%",
                "id": "backToLogin",
                "isVisible": true,
                "left": "0dp",
                "onClick": controller.AS_Button_e4c8f8859218431c9db4b6197208ede5,
                "skin": "sknBtnBackToLogin",
                "text": "Back to Login",
                "top": "3%",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCreatemPIN.add(mpin, backToLogin);
            flxLoginRegister.add(imgBg, lblWelcome, imgLogo, flxLoginCustomer, flxCreatemPIN);
            this.add(flxLoginRegister);
        };
        return [{
            "addWidgets": addWidgetsfrmRegisterLogiin,
            "enabledForIdleTimeout": false,
            "id": "frmRegisterLogiin",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_h2cdf76cd6664454a7d662074bc8d5db,
            "skin": "CopyslForm0if69e589a14343"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "onDeviceBack": controller.AS_Form_ea730cc3655e41c5a7a1ea4d3d095b8f,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});