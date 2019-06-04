define("frmFundTransfer", function() {
    return function(controller) {
        function addWidgetsfrmFundTransfer() {
            this.setDefaultUnit(kony.flex.DP);
            var flxFundTransfer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxFundTransfer",
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
            flxFundTransfer.setDefaultUnit(kony.flex.DP);
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
                        "text": "Fund Transfer"
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
            var flxTab = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxTab",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "58dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxTab.setDefaultUnit(kony.flex.DP);
            var tab = new com.tab({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "tab",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "3dp",
                "width": "34%",
                "overrides": {
                    "lblTabName": {
                        "skin": "sknLblFntSize120Blue",
                        "text": "Recent"
                    },
                    "imgTabImage": {
                        "src": "bank_recent_blue.png"
                    },
                    "lblLine": {
                        "isVisible": true
                    },
                    "tab": {
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
            tab.tabonClick = controller.AS_UWI_a503c24e837c4932b814c27bbd7e90e5;
            var tab1 = new com.tab({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "tab1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "3dp",
                "width": "33%",
                "overrides": {
                    "imgTabImage": {
                        "src": "bank_upcoming_grey.png"
                    },
                    "lblLine": {
                        "isVisible": false
                    },
                    "lblTabName": {
                        "text": "Upcoming"
                    },
                    "tab": {
                        "left": "viz.val_cleared",
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "height": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            tab1.tabonClick = controller.AS_UWI_e002eba031d943498c08e2cf5d086af4;
            var tab2 = new com.tab({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "tab2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "right": "0%",
                "skin": "slFbox",
                "top": "3dp",
                "width": "33%",
                "overrides": {
                    "imgTabImage": {
                        "src": "bank_all_payee_grey.png"
                    },
                    "lblLine": {
                        "isVisible": false
                    },
                    "lblTabName": {
                        "text": "All Payees"
                    },
                    "tab": {
                        "left": "viz.val_cleared",
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
            tab2.tabonClick = controller.AS_UWI_c05999a0a5264a058040ba61a0ec4863;
            flxTab.add(tab, tab1, tab2);
            var flxSeg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxSeg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "130dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxSeg.setDefaultUnit(kony.flex.DP);
            var segDetails = new kony.ui.SegmentedUI2({
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
                    "lblAmmount": "₹30",
                    "lblIntial": "S",
                    "lblName": "Santhosh",
                    "lblTime": "21 Apr 2019",
                    "lblTransId": "01234567891012"
                }, {
                    "BtnPay": "Pay",
                    "btnDelete": "",
                    "lblAmmount": "₹500",
                    "lblIntial": "S",
                    "lblName": "Santhosh",
                    "lblTime": "21 Apr 2019",
                    "lblTransId": "01234567891012"
                }],
                "groupCells": false,
                "id": "segDetails",
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
                "separatorRequired": true,
                "separatorThickness": 0,
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
            flxSeg.add(segDetails);
            var flxUpcoming = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxUpcoming",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "-100%",
                "skin": "slFbox",
                "top": "130dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxUpcoming.setDefaultUnit(kony.flex.DP);
            var segUpcoming = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "BtnPay": "Pay",
                    "btnDelete": "",
                    "lblAmmount": "₹30,000",
                    "lblIntial": "S",
                    "lblName": "Santhosh",
                    "lblTime": "21 Apr 2019",
                    "lblTransId": "Pending"
                }, {
                    "BtnPay": "Pay",
                    "btnDelete": "",
                    "lblAmmount": "₹30",
                    "lblIntial": "S",
                    "lblName": "Santhosh",
                    "lblTime": "21 Apr 2019",
                    "lblTransId": "Pending"
                }, {
                    "BtnPay": "Pay",
                    "btnDelete": "",
                    "lblAmmount": "₹500",
                    "lblIntial": "S",
                    "lblName": "Santhosh",
                    "lblTime": "21 Apr 2019",
                    "lblTransId": "Pending"
                }],
                "groupCells": false,
                "id": "segUpcoming",
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
                "separatorRequired": true,
                "separatorThickness": 0,
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
            flxUpcoming.add(segUpcoming);
            var flxAllpayee = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80%",
                "id": "flxAllpayee",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "-100%",
                "skin": "slFbox",
                "top": "130dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxAllpayee.setDefaultUnit(kony.flex.DP);
            var text = new com.text({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "text",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "100%",
                "overrides": {
                    "txtText": {
                        "focusSkin": "sknTxtFntSize130BlackRounded",
                        "placeholder": "Search for payee or account number",
                        "skin": "sknTxtFntSize130BlackRounded",
                        "width": "80%"
                    },
                    "lblLine": {
                        "isVisible": false
                    },
                    "lblError": {
                        "isVisible": false
                    },
                    "text": {
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
                "overrides": {
                    "txtText": {
                        "padding": [1, 0, 0, 0]
                    }
                }
            }, {
                "overrides": {
                    "txtText": {
                        "placeholderSkin": "sknTxtFntSize130GreyRounded"
                    }
                }
            });
            var lblTransfer = new kony.ui.Label({
                "id": "lblTransfer",
                "isVisible": true,
                "left": "10%",
                "skin": "sknLblFntSize110Black",
                "text": "Transfer money to",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxFirst = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50%",
                "id": "flxFirst",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10.03%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "24.19%",
                "width": "80%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxFirst.setDefaultUnit(kony.flex.DP);
            var tab3 = new com.tab({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45%",
                "id": "tab3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "45%",
                "overrides": {
                    "lblTabName": {
                        "centerX": "50%",
                        "skin": "sknLblFntSize110Black",
                        "text": "DPS Bank Payee",
                        "width": "50%"
                    },
                    "flxTab": {
                        "height": "100%",
                        "skin": "sknFlxBgGrey"
                    },
                    "lblLine": {
                        "isVisible": false
                    },
                    "imgTabImage": {
                        "top": "10%"
                    },
                    "tab": {
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
            tab3.tabonClick = controller.AS_UWI_b7ed5a51ae5a4f31bb23bd6a4e42d6e7;
            var tab4 = new com.tab({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45%",
                "id": "tab4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "right": "0%",
                "skin": "slFbox",
                "top": "0dp",
                "width": "45%",
                "overrides": {
                    "lblTabName": {
                        "centerX": "50%",
                        "skin": "sknLblFntSize110Black",
                        "text": "Other Bank Payee",
                        "width": "50%"
                    },
                    "flxTab": {
                        "height": "100%",
                        "skin": "sknFlxBgGrey"
                    },
                    "imgTabImage": {
                        "src": "bank_other_payee.png",
                        "top": "10%"
                    },
                    "lblLine": {
                        "isVisible": false
                    },
                    "tab": {
                        "left": "viz.val_cleared",
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
            tab4.tabonClick = controller.AS_UWI_d9a84357bfc44ee191a5f384f100b441;
            var tab5 = new com.tab({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "45%",
                "id": "tab5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "45%",
                "overrides": {
                    "lblTabName": {
                        "centerX": "50%",
                        "skin": "sknLblFntSize110Black",
                        "text": "Mobile Payee",
                        "width": "50%"
                    },
                    "flxTab": {
                        "height": "100%",
                        "skin": "sknFlxBgGrey"
                    },
                    "imgTabImage": {
                        "src": "bank_mobile_payee.png",
                        "top": "10%"
                    },
                    "lblLine": {
                        "isVisible": false
                    },
                    "tab": {
                        "right": "viz.val_cleared",
                        "top": "viz.val_cleared",
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
            tab5.tabonClick = controller.AS_UWI_hf5e10d902af4e8aa9d861d06e217068;
            var tab6 = new com.tab({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "45%",
                "id": "tab6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "right": "0%",
                "skin": "slFbox",
                "width": "45%",
                "overrides": {
                    "lblTabName": {
                        "centerX": "50%",
                        "skin": "sknLblFntSize110Black",
                        "text": "Favourite Payee",
                        "width": "50%"
                    },
                    "flxTab": {
                        "height": "100%",
                        "skin": "sknFlxBgGrey"
                    },
                    "imgTabImage": {
                        "src": "bank_favourite.png",
                        "top": "10%"
                    },
                    "lblLine": {
                        "isVisible": false
                    },
                    "tab": {
                        "left": "viz.val_cleared",
                        "top": "viz.val_cleared",
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
            tab6.tabonClick = controller.AS_UWI_b22a74866ec441c0b49f5404c9773fce;
            flxFirst.add(tab3, tab4, tab5, tab6);
            var flxSearchPayee = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "80%",
                "horizontalScrollIndicator": true,
                "id": "flxSearchPayee",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "1%",
                "verticalScrollIndicator": true,
                "width": "80%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxSearchPayee.setDefaultUnit(kony.flex.DP);
            var segSearch = new kony.ui.SegmentedUI2({
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
                "id": "segSearch",
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
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
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
            flxSearchPayee.add(segSearch);
            flxAllpayee.add(text, lblTransfer, flxFirst, flxSearchPayee);
            var flxBtm = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxBtm",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxBtm.setDefaultUnit(kony.flex.DP);
            var buttonn = new com.buttonn({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "buttonn",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "overrides": {
                    "btn": {
                        "height": "55dp",
                        "skin": "sknBtnBgBlueFntSize120WhiteUnrounded",
                        "text": "Add Payee",
                        "width": "100%"
                    },
                    "buttonn": {
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
            buttonn.onclick = controller.AS_UWI_ic974eb0919d434cb77de15d9621fbda;
            var lblLine = new kony.ui.Label({
                "centerY": "50%",
                "height": "55dp",
                "id": "lblLine",
                "isVisible": true,
                "left": "0%",
                "skin": "CopysknLblBgBlack",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "0.20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var buttonn1 = new com.buttonn({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "buttonn1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "overrides": {
                    "btn": {
                        "height": "55dp",
                        "skin": "sknBtnBgBlueFntSize120WhiteUnrounded",
                        "text": "Delete Payee",
                        "width": "100%"
                    },
                    "buttonn": {
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
            buttonn1.onclick = controller.AS_UWI_a6e0ca10e8484bd69e478ecf5c8cb8f2;
            flxBtm.add(buttonn, lblLine, buttonn1);
            var flxBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBack",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgBlack50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxBack.setDefaultUnit(kony.flex.DP);
            var flxPopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "35%",
                "id": "flxPopup",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxBgWhiteBorder1Blue",
                "width": "70%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxPopup.setDefaultUnit(kony.flex.DP);
            var btnClose = new kony.ui.Button({
                "height": "10%",
                "id": "btnClose",
                "isVisible": true,
                "onClick": controller.AS_Button_a908eea299334a9bb4931cca46086a9e,
                "right": "2%",
                "skin": "sknBtnImageClose",
                "top": "4%",
                "width": "9%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var buttonn2 = new com.buttonn({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "height": "25%",
                "id": "buttonn2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "btn": {
                        "height": "45dp",
                        "skin": "sknBtnBgBlueFntSize120WhiteUnrounded",
                        "width": "100%"
                    },
                    "buttonn": {
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
            var buttonn3 = new com.buttonn({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "height": "25%",
                "id": "buttonn3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "25%",
                "width": "100%",
                "overrides": {
                    "btn": {
                        "height": "45dp",
                        "skin": "sknBtnFntSize130BlueBg0",
                        "text": "DPS Bank Payee",
                        "width": "100%"
                    },
                    "buttonn": {
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
            var buttonn4 = new com.buttonn({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "height": "25%",
                "id": "buttonn4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "50%",
                "width": "100%",
                "overrides": {
                    "btn": {
                        "height": "45dp",
                        "skin": "sknBtnFntSize130BlueBg0",
                        "text": "Other Bank Payee",
                        "width": "100%"
                    },
                    "buttonn": {
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
            var buttonn5 = new com.buttonn({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "height": "25%",
                "id": "buttonn5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "75%",
                "width": "100%",
                "overrides": {
                    "btn": {
                        "height": "45dp",
                        "skin": "sknBtnFntSize130BlueBg0",
                        "text": "Mobile Payee",
                        "width": "100%"
                    },
                    "buttonn": {
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
            flxPopup.add(btnClose, buttonn2, buttonn3, buttonn4, buttonn5);
            flxBack.add(flxPopup);
            flxFundTransfer.add(Head, flxTab, flxSeg, flxUpcoming, flxAllpayee, flxBtm, flxBack);
            this.add(flxFundTransfer);
        };
        return [{
            "addWidgets": addWidgetsfrmFundTransfer,
            "enabledForIdleTimeout": false,
            "id": "frmFundTransfer",
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