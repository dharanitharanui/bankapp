define("frmDeletePayee", function() {
    return function(controller) {
        function addWidgetsfrmDeletePayee() {
            this.setDefaultUnit(kony.flex.DP);
            var flxDeletePayee = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDeletePayee",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxDeletePayee.setDefaultUnit(kony.flex.DP);
            var Head = new com.Head({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "Head",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "lblHead": {
                        "text": "Delete Payee"
                    },
                    "Head": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "height": "viz.val_cleared",
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
            var flxDeleteSeg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDeleteSeg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxDeleteSeg.setDefaultUnit(kony.flex.DP);
            var segDelete = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "BtnPay": "",
                    "btnDelete": "bank_delete.png",
                    "lblAmmount": "",
                    "lblIntial": "S",
                    "lblName": "Santhosh",
                    "lblTime": "",
                    "lblTransId": "HDFC"
                }, {
                    "BtnPay": "",
                    "btnDelete": "bank_delete.png",
                    "lblAmmount": "",
                    "lblIntial": "S",
                    "lblName": "Santhosh",
                    "lblTime": "",
                    "lblTransId": "Axis Bank"
                }, {
                    "BtnPay": "",
                    "btnDelete": "bank_delete.png",
                    "lblAmmount": "",
                    "lblIntial": "S",
                    "lblName": "Santhosh",
                    "lblTime": "",
                    "lblTransId": "Central Bank"
                }],
                "groupCells": false,
                "id": "segDelete",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxPayment",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "BtnPay": "BtnPay",
                    "btnDelete": "btnDelete",
                    "flxLine": "flxLine",
                    "flxPayment": "flxPayment",
                    "flxRound": "flxRound",
                    "lblAmmount": "lblAmmount",
                    "lblIntial": "lblIntial",
                    "lblName": "lblName",
                    "lblTime": "lblTime",
                    "lblTransId": "lblTransId"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDeleteSeg.add(segDelete);
            flxDeletePayee.add(Head, flxDeleteSeg);
            this.add(flxDeletePayee);
        };
        return [{
            "addWidgets": addWidgetsfrmDeletePayee,
            "enabledForIdleTimeout": false,
            "id": "frmDeletePayee",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});