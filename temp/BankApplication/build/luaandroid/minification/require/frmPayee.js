define("frmPayee", function() {
    return function(controller) {
        function addWidgetsfrmPayee() {
            this.setDefaultUnit(kony.flex.DP);
            var flxPayee = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPayee",
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
            flxPayee.setDefaultUnit(kony.flex.DP);
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
            var flxPayeeSeg = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "90%",
                "horizontalScrollIndicator": true,
                "id": "flxPayeeSeg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "55dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxPayeeSeg.setDefaultUnit(kony.flex.DP);
            var segPayee = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "BtnPay": "Pay",
                    "btnDelete": "",
                    "lblAmmount": "₹30,000",
                    "lblIntial": "S",
                    "lblName": "Santhosh",
                    "lblTime": "21 Apr 2019",
                    "lblTransId": "01234567891012"
                }, {
                    "BtnPay": "Pay",
                    "btnDelete": "",
                    "lblAmmount": "₹30,000",
                    "lblIntial": "S",
                    "lblName": "Santhosh",
                    "lblTime": "21 Apr 2019",
                    "lblTransId": "01234567891012"
                }, {
                    "BtnPay": "Pay",
                    "btnDelete": "",
                    "lblAmmount": "₹30,000",
                    "lblIntial": "S",
                    "lblName": "Santhosh",
                    "lblTime": "21 Apr 2019",
                    "lblTransId": "01234567891012"
                }, {
                    "BtnPay": "Pay",
                    "btnDelete": "",
                    "lblAmmount": "₹30,000",
                    "lblIntial": "S",
                    "lblName": "Santhosh",
                    "lblTime": "21 Apr 2019",
                    "lblTransId": "01234567891012"
                }, {
                    "BtnPay": "Pay",
                    "btnDelete": "",
                    "lblAmmount": "₹30,000",
                    "lblIntial": "S",
                    "lblName": "Santhosh",
                    "lblTime": "21 Apr 2019",
                    "lblTransId": "01234567891012"
                }, {
                    "BtnPay": "Pay",
                    "btnDelete": "",
                    "lblAmmount": "₹30,000",
                    "lblIntial": "S",
                    "lblName": "Santhosh",
                    "lblTime": "21 Apr 2019",
                    "lblTransId": "01234567891012"
                }, {
                    "BtnPay": "Pay",
                    "btnDelete": "",
                    "lblAmmount": "₹30,000",
                    "lblIntial": "S",
                    "lblName": "Santhosh",
                    "lblTime": "21 Apr 2019",
                    "lblTransId": "01234567891012"
                }, {
                    "BtnPay": "Pay",
                    "btnDelete": "",
                    "lblAmmount": "₹30,000",
                    "lblIntial": "S",
                    "lblName": "Santhosh",
                    "lblTime": "21 Apr 2019",
                    "lblTransId": "01234567891012"
                }, {
                    "BtnPay": "Pay",
                    "btnDelete": "",
                    "lblAmmount": "₹30,000",
                    "lblIntial": "S",
                    "lblName": "Santhosh",
                    "lblTime": "21 Apr 2019",
                    "lblTransId": "01234567891012"
                }, {
                    "BtnPay": "Pay",
                    "btnDelete": "",
                    "lblAmmount": "₹30,000",
                    "lblIntial": "S",
                    "lblName": "Santhosh",
                    "lblTime": "21 Apr 2019",
                    "lblTransId": "01234567891012"
                }],
                "groupCells": false,
                "id": "segPayee",
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
            flxPayeeSeg.add(segPayee);
            flxPayee.add(Head, flxPayeeSeg);
            this.add(flxPayee);
        };
        return [{
            "addWidgets": addWidgetsfrmPayee,
            "enabledForIdleTimeout": false,
            "id": "frmPayee",
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