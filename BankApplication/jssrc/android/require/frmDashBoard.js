define("frmDashBoard", function() {
    return function(controller) {
        function addWidgetsfrmDashBoard() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMainDashBoard = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMainDashBoard",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgWhite",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxMainDashBoard.setDefaultUnit(kony.flex.DP);
            var flxDashBoard = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDashBoard",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgWhite",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxDashBoard.setDefaultUnit(kony.flex.DP);
            var flxdata = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "93%",
                "id": "flxdata",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgWhite",
                "top": "7%",
                "width": "100%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxdata.setDefaultUnit(kony.flex.DP);
            var flxAccountBalance = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "flxAccountBalance",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "4%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxAccountBalance.setDefaultUnit(kony.flex.DP);
            var AccountBalance = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "height": "30%",
                "id": "AccountBalance",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "overrides": {
                    "lblSingleLabel": {
                        "text": "Total Account Balance"
                    },
                    "flxLabel": {
                        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                        "skin": "sknlblFntSize120Bold"
                    },
                    "Singlelabel": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {
                    "lblSingleLabel": {
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER
                    }
                }
            }, {
                "overrides": {}
            });
            var Cost = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "Cost",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "overrides": {
                    "lblSingleLabel": {
                        "text": "Rs.1,234.56"
                    },
                    "flxLabel": {
                        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                        "skin": "sknlblFntSize180FntBgBlackOp90"
                    },
                    "Singlelabel": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {
                    "lblSingleLabel": {
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER
                    }
                }
            }, {
                "overrides": {}
            });
            flxAccountBalance.add(AccountBalance, Cost);
            var flxBankOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "47%",
                "id": "flxBankOptions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5.00%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "1.00%",
                "width": "90%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxBankOptions.setDefaultUnit(kony.flex.DP);
            var Account = new flxOptions.BankOptions({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "height": "46.50%",
                "id": "Account",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "48%",
                "overrides": {
                    "lblBankOptions": {
                        "text": "Accounts",
                        "centerX": "50%",
                        "centerY": "viz.val_cleared",
                        "height": "20%",
                        "skin": "sknlblFntSize110FntBgBlackOp50",
                        "top": "65%",
                        "width": "100%"
                    },
                    "imgIcon": {
                        "isVisible": true,
                        "centerX": "50%",
                        "centerY": "40%",
                        "left": "viz.val_cleared",
                        "src": "accounts.png",
                        "top": "0dp",
                        "width": "25%"
                    },
                    "flxDashBoard": {
                        "height": "100%",
                        "skin": "sknFlxBglightGrey"
                    },
                    "BankOptions": {
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
                "overrides": {
                    "lblBankOptions": {
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER
                    }
                }
            }, {
                "overrides": {}
            });
            Account.onClick = controller.AS_UWI_b5c3424518e24ddaadf53ad075335b44;
            var IMPS = new flxOptions.BankOptions({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "height": "46.50%",
                "id": "IMPS",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "51.50%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "48%",
                "overrides": {
                    "lblBankOptions": {
                        "text": "IMPS",
                        "centerX": "50%",
                        "centerY": "viz.val_cleared",
                        "height": "20%",
                        "left": "25%",
                        "skin": "sknlblFntSize110FntBgBlackOp50",
                        "top": "65%",
                        "width": "100%"
                    },
                    "imgIcon": {
                        "isVisible": true,
                        "centerX": "50%",
                        "centerY": "40%",
                        "left": "viz.val_cleared",
                        "src": "imps.png",
                        "width": "60%"
                    },
                    "flxDashBoard": {
                        "height": "100%",
                        "skin": "sknFlxBglightGrey"
                    },
                    "BankOptions": {
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
                "overrides": {
                    "lblBankOptions": {
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER
                    }
                }
            }, {
                "overrides": {}
            });
            IMPS.onClick = controller.AS_UWI_f5103658965543ed89dd169db29e5e60;
            var FundTransfer = new flxOptions.BankOptions({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "height": "46.50%",
                "id": "FundTransfer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "51%",
                "width": "48%",
                "overrides": {
                    "lblBankOptions": {
                        "text": "Fund Transfer",
                        "centerX": "50%",
                        "centerY": "viz.val_cleared",
                        "height": "20%",
                        "left": "25%",
                        "skin": "sknlblFntSize110FntBgBlackOp50",
                        "top": "65%",
                        "width": "100%"
                    },
                    "imgIcon": {
                        "isVisible": true,
                        "centerX": "50%",
                        "centerY": "40%",
                        "height": "30%",
                        "left": "viz.val_cleared",
                        "src": "loan.png",
                        "width": "25%"
                    },
                    "flxDashBoard": {
                        "height": "100%",
                        "skin": "sknFlxBglightGrey"
                    },
                    "BankOptions": {
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
                "overrides": {
                    "lblBankOptions": {
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER
                    }
                }
            }, {
                "overrides": {}
            });
            FundTransfer.onClick = controller.AS_UWI_h7f64707fe7a4336b3dde61c37fbeda2;
            var TransactionHistory = new flxOptions.BankOptions({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "height": "46.50%",
                "id": "TransactionHistory",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "51.50%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "51%",
                "width": "48%",
                "overrides": {
                    "lblBankOptions": {
                        "text": "Transaction History",
                        "centerX": "50%",
                        "centerY": "viz.val_cleared",
                        "height": "20%",
                        "left": "viz.val_cleared",
                        "skin": "sknlblFntSize110FntBgBlackOp50",
                        "top": "65%",
                        "width": "100%"
                    },
                    "imgIcon": {
                        "isVisible": true,
                        "centerX": "50%",
                        "centerY": "40%",
                        "height": "30%",
                        "left": "viz.val_cleared",
                        "src": "paymenthistory.png",
                        "width": "25%"
                    },
                    "flxDashBoard": {
                        "height": "100%",
                        "skin": "sknFlxBglightGrey"
                    },
                    "BankOptions": {
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
                "overrides": {
                    "lblBankOptions": {
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER
                    }
                }
            }, {
                "overrides": {}
            });
            flxBankOptions.add(Account, IMPS, FundTransfer, TransactionHistory);
            var flxAds = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "30%",
                "horizontalScrollIndicator": true,
                "id": "flxAds",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "2%",
                "verticalScrollIndicator": true,
                "width": "90%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxAds.setDefaultUnit(kony.flex.DP);
            var SegmentAds = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "ImgAds": "bank_adas_car_loan.png"
                }, {
                    "ImgAds": "bank_ads_home_loan.png"
                }, {
                    "ImgAds": "bank_ads_education_loan.png"
                }, {
                    "ImgAds": "bank_ads_gold_loan.png"
                }, {
                    "ImgAds": "bank_ads_personal_loan.png"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "SegmentAds",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxAds",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
                "widgetDataMap": {
                    "ImgAds": "ImgAds",
                    "flxAds": "flxAds"
                },
                "width": "100%",
                "zIndex": 2
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAds.add(SegmentAds);
            flxdata.add(flxAccountBalance, flxBankOptions, flxAds);
            var flxIconDashBoard = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7%",
                "id": "flxIconDashBoard",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxIconDashBoard.setDefaultUnit(kony.flex.DP);
            flxIconDashBoard.add();
            var flxBlack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "93%",
                "id": "flxBlack",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_a57b1df64b544e14a077aa0d5ae3a1ae,
                "skin": "slFbox",
                "top": "7%",
                "width": "100%",
                "zIndex": 2
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxBlack.setDefaultUnit(kony.flex.DP);
            flxBlack.add();
            var flxImpsPopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxImpsPopup",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgBlackOp70",
                "top": "0dp",
                "width": "100%",
                "zIndex": 13
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxImpsPopup.setDefaultUnit(kony.flex.DP);
            var flxPopUp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "30%",
                "id": "flxPopUp",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxBgWhiteBr1BrBgblue",
                "width": "70%",
                "zIndex": 13
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxPopUp.setDefaultUnit(kony.flex.DP);
            flxPopUp.add();
            flxImpsPopup.add(flxPopUp);
            flxDashBoard.add(flxdata, flxIconDashBoard, flxBlack, flxImpsPopup);
            var flxHamburger = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxHamburger",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxBgWhite",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxHamburger.setDefaultUnit(kony.flex.DP);
            var SideMenu = new Hamburger.Hamburger({
                "clipBounds": true,
                "height": "100%",
                "id": "SideMenu",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFSbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "Hamburger": {
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
            flxHamburger.add(SideMenu);
            flxMainDashBoard.add(flxDashBoard, flxHamburger);
            this.add(flxMainDashBoard);
        };
        return [{
            "addWidgets": addWidgetsfrmDashBoard,
            "enabledForIdleTimeout": false,
            "id": "frmDashBoard",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_b0f1744a080340c7b95de8502ad6fe9b,
            "preShow": function(eventobject) {
                controller.AS_Form_j566416c12a8433baf884fc5c3afd565(eventobject);
            },
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