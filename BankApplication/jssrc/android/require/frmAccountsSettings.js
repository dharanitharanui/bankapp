define("frmAccountsSettings", function() {
    return function(controller) {
        function addWidgetsfrmAccountsSettings() {
            this.setDefaultUnit(kony.flex.DP);
            var flxAccountSettings = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAccountSettings",
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
            flxAccountSettings.setDefaultUnit(kony.flex.DP);
            var flxDetailsSettings = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDetailsSettings",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_ee9e5694b9ae45c9b0d74c6e85980084,
                "skin": "sknFlxBgWhite",
                "top": "0%",
                "width": "100%",
                "zIndex": 2
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxDetailsSettings.setDefaultUnit(kony.flex.DP);
            var flxAccounDetailsHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7%",
                "id": "flxAccounDetailsHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 2
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxAccounDetailsHeader.setDefaultUnit(kony.flex.DP);
            flxAccounDetailsHeader.add();
            var flxDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "93%",
                "id": "flxDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgWhite",
                "top": "7%",
                "width": "100%",
                "zIndex": 2
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxDetails.setDefaultUnit(kony.flex.DP);
            var AccountDetails = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5%",
                "id": "AccountDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5%",
                "width": "90%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "Account Details",
                        "skin": "sknlblFntSize120FntBgBlue"
                    },
                    "flxLabel": {
                        "skin": "sknlblFntSize120FntBgBlue"
                    },
                    "Singlelabel": {
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
                    "lblSingleLabel": {
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
                    }
                }
            }, {
                "overrides": {}
            });
            var flxAccountDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "36%",
                "id": "flxAccountDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxBglightGreyOp40",
                "top": "1%",
                "width": "90%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxAccountDetails.setDefaultUnit(kony.flex.DP);
            var AccountNumber = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "AccountNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5%",
                "width": "48%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "Account Number",
                        "height": "25dp",
                        "skin": "sknlblFntSize120FntBgBlack",
                        "width": kony.flex.USE_PREFFERED_SIZE
                    },
                    "flxLabel": {
                        "skin": "sknlblFntBgBlackFntSize120Op60"
                    },
                    "Singlelabel": {
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
                    "lblSingleLabel": {
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT
                    }
                }
            }, {
                "overrides": {}
            });
            var Account = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "Account",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "51%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5%",
                "width": "50%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "123456789123456",
                        "height": kony.flex.USE_PREFFERED_SIZE,
                        "skin": "sknlblFntSize120FntBgBlack",
                        "width": kony.flex.USE_PREFFERED_SIZE
                    },
                    "flxLabel": {
                        "skin": "sknlblFntBgBlackFntSize120Op60"
                    },
                    "Singlelabel": {
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
                    "lblSingleLabel": {
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
                    }
                }
            }, {
                "overrides": {}
            });
            var AccountType = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "13%",
                "id": "AccountType",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "19.50%",
                "width": "48%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "Account Type",
                        "skin": "sknlblFntSize120FntBgBlack"
                    },
                    "flxLabel": {
                        "skin": "sknlblFntBgBlackFntSize120Op60"
                    },
                    "Singlelabel": {
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
                    "lblSingleLabel": {
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT
                    }
                }
            }, {
                "overrides": {}
            });
            var TypeAccount = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "13%",
                "id": "TypeAccount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "51%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "19.50%",
                "width": "50%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "Savings Account",
                        "height": kony.flex.USE_PREFFERED_SIZE,
                        "skin": "sknlblFntSize120FntBgBlack"
                    },
                    "flxLabel": {
                        "height": "100%",
                        "skin": "sknlblFntBgBlackFntSize120Op60"
                    },
                    "Singlelabel": {
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
                    "lblSingleLabel": {
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
                    }
                }
            }, {
                "overrides": {}
            });
            var CategoryCode = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "13%",
                "id": "CategoryCode",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "34.50%",
                "width": "48%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "Category Code",
                        "skin": "sknlblFntSize120FntBgBlack"
                    },
                    "flxLabel": {
                        "skin": "sknlblFntBgBlackFntSize120Op60"
                    },
                    "Singlelabel": {
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
                    "lblSingleLabel": {
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT
                    }
                }
            }, {
                "overrides": {}
            });
            var CodeCategory = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "13%",
                "id": "CodeCategory",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "51%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "34.50%",
                "width": "50%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "ABCDE",
                        "height": kony.flex.USE_PREFFERED_SIZE,
                        "skin": "sknlblFntSize120FntBgBlack"
                    },
                    "flxLabel": {
                        "skin": "sknlblFntBgBlackFntSize120Op60"
                    },
                    "Singlelabel": {
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
                    "lblSingleLabel": {
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
                    }
                }
            }, {
                "overrides": {}
            });
            var IFSCCode = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "13%",
                "id": "IFSCCode",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "49.50%",
                "width": "48%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "IFSC Code",
                        "skin": "sknlblFntSize120FntBgBlack"
                    },
                    "flxLabel": {
                        "skin": "sknlblFntBgBlackFntSize120Op60"
                    },
                    "Singlelabel": {
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
                    "lblSingleLabel": {
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT
                    }
                }
            }, {
                "overrides": {}
            });
            var CodeIFSC = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "13%",
                "id": "CodeIFSC",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "51%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "49.50%",
                "width": "50%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "AAAAAAAAAAA",
                        "height": kony.flex.USE_PREFFERED_SIZE,
                        "skin": "sknlblFntSize120FntBgBlack"
                    },
                    "flxLabel": {
                        "skin": "sknlblFntBgBlackFntSize120Op60"
                    },
                    "Singlelabel": {
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
                    "lblSingleLabel": {
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
                    }
                }
            }, {
                "overrides": {}
            });
            var OpenDate = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "13%",
                "id": "OpenDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "64.50%",
                "width": "48%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "Open Date",
                        "skin": "sknlblFntSize120FntBgBlack"
                    },
                    "flxLabel": {
                        "skin": "sknlblFntBgBlackFntSize120Op60"
                    },
                    "Singlelabel": {
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
                    "lblSingleLabel": {
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT
                    }
                }
            }, {
                "overrides": {}
            });
            var Accountdate = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "13%",
                "id": "Accountdate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "51%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "64.50%",
                "width": "50%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "30/05/2019",
                        "height": kony.flex.USE_PREFFERED_SIZE,
                        "skin": "sknlblFntSize120FntBgBlack"
                    },
                    "flxLabel": {
                        "skin": "sknlblFntBgBlackFntSize120Op60"
                    },
                    "Singlelabel": {
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
                    "lblSingleLabel": {
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
                    }
                }
            }, {
                "overrides": {}
            });
            var Status = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "13%",
                "id": "Status",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "79.50%",
                "width": "48%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "Status",
                        "skin": "sknlblFntSize120FntBgBlack"
                    },
                    "flxLabel": {
                        "skin": "sknlblFntBgBlackFntSize120Op60"
                    },
                    "Singlelabel": {
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
                    "lblSingleLabel": {
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT
                    }
                }
            }, {
                "overrides": {}
            });
            var AccountStatus = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "13%",
                "id": "AccountStatus",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "51%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "79.50%",
                "width": "50%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "Active",
                        "height": kony.flex.USE_PREFFERED_SIZE,
                        "skin": "sknlblFntSize120FntBgBlack"
                    },
                    "flxLabel": {
                        "skin": "sknlblFntBgBlackFntSize120Op60"
                    },
                    "Singlelabel": {
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
                    "lblSingleLabel": {
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
                    }
                }
            }, {
                "overrides": {}
            });
            flxAccountDetails.add(AccountNumber, Account, AccountType, TypeAccount, CategoryCode, CodeCategory, IFSCCode, CodeIFSC, OpenDate, Accountdate, Status, AccountStatus);
            var PersonalDetails = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5%",
                "id": "PersonalDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "1%",
                "width": "90%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "Personal Details",
                        "skin": "sknlblFntSize120FntBgBlue"
                    },
                    "flxLabel": {
                        "skin": "sknlblFntSize120FntBgBlue"
                    },
                    "Singlelabel": {
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
                    "lblSingleLabel": {
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
                    }
                }
            }, {
                "overrides": {}
            });
            var flxPersonalDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "38%",
                "id": "flxPersonalDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxBglightGreyOp40",
                "top": "2%",
                "width": "90%",
                "zIndex": 1
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxPersonalDetails.setDefaultUnit(kony.flex.DP);
            var CustomerId = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "CustomerId",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5%",
                "width": "45%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "Customer Id",
                        "skin": "sknlblFntSize110FntBgBlackOp50"
                    },
                    "flxLabel": {
                        "skin": "sknlblFntBgBlackFntSize120Op60"
                    },
                    "Singlelabel": {
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
                    "lblSingleLabel": {
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT
                    }
                }
            }, {
                "overrides": {}
            });
            var IdNumber = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "IdNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "55%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5%",
                "width": "45%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "999999999",
                        "skin": "sknlblFntSize110FntBgBlackOp50"
                    },
                    "flxLabel": {
                        "skin": "sknlblFntBgBlackFntSize120Op60"
                    },
                    "Singlelabel": {
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
                    "lblSingleLabel": {
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
                    }
                }
            }, {
                "overrides": {}
            });
            var AccountHolder = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "AccountHolder",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "19.50%",
                "width": "45%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "Account Holder",
                        "skin": "sknlblFntSize110FntBgBlackOp50"
                    },
                    "flxLabel": {
                        "skin": "sknlblFntBgBlackFntSize120Op60"
                    },
                    "Singlelabel": {
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
                    "lblSingleLabel": {
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT
                    }
                }
            }, {
                "overrides": {}
            });
            var AccountHolderName = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "AccountHolderName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "55%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "19.50%",
                "width": "45%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "Pushaan Reddy",
                        "skin": "sknlblFntSize110FntBgBlackOp50"
                    },
                    "flxLabel": {
                        "skin": "sknlblFntBgBlackFntSize120Op60"
                    },
                    "Singlelabel": {
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
                    "lblSingleLabel": {
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
                    }
                }
            }, {
                "overrides": {}
            });
            var Address = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "Address",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "34.50%",
                "width": "45%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "Address",
                        "skin": "sknlblFntSize110FntBgBlackOp50"
                    },
                    "flxLabel": {
                        "skin": "sknlblFntBgBlackFntSize120Op60"
                    },
                    "Singlelabel": {
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
                    "lblSingleLabel": {
                        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT
                    }
                }
            }, {
                "overrides": {}
            });
            var HolderAddress = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70%",
                "id": "HolderAddress",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "55%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "34.50%",
                "width": "45%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "1st Floor, Tower 1, Amrita Towers, New Chennai Township - Multi Services SEZ, Marg.",
                        "height": "120dp",
                        "skin": "sknlblFntSize110FntBgBlackOp50"
                    },
                    "flxLabel": {
                        "height": "100%",
                        "skin": "sknlblFntBgBlackFntSize120Op60"
                    },
                    "Singlelabel": {
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
                    "lblSingleLabel": {
                        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT
                    }
                }
            }, {
                "overrides": {}
            });
            flxPersonalDetails.add(CustomerId, IdNumber, AccountHolder, AccountHolderName, Address, HolderAddress);
            flxDetails.add(AccountDetails, flxAccountDetails, PersonalDetails, flxPersonalDetails);
            var flxSettings = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "93%",
                "id": "flxSettings",
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
            flxSettings.setDefaultUnit(kony.flex.DP);
            var ChangemPin = new flxOptions.BankOptions({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "ChangemPin",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "3%",
                "width": "100%",
                "overrides": {
                    "lblBankOptions": {
                        "text": "Change mPIN",
                        "centerY": "viz.val_cleared",
                        "left": "5%",
                        "skin": "sknlblFntSize120FntBgBlackOp80"
                    },
                    "imgIcon": {
                        "isVisible": false
                    },
                    "ImgArrow": {
                        "isVisible": true,
                        "src": "bank_settings_frontarrow.png"
                    },
                    "BankOptions": {
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
            var RefreshAccounts = new flxOptions.BankOptions({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "RefreshAccounts",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "lblBankOptions": {
                        "text": "Refresh Accounts",
                        "centerY": "viz.val_cleared",
                        "left": "5%",
                        "skin": "sknlblFntSize120FntBgBlackOp80"
                    },
                    "imgIcon": {
                        "isVisible": false
                    },
                    "ImgArrow": {
                        "isVisible": true,
                        "src": "bank_settings_frontarrow.png"
                    },
                    "BankOptions": {
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
            var DeRegister = new flxOptions.BankOptions({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "DeRegister",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "overrides": {
                    "lblBankOptions": {
                        "text": "De-Register",
                        "centerY": "viz.val_cleared",
                        "left": "5%",
                        "skin": "sknlblFntSize120FntBgBlackOp80"
                    },
                    "imgIcon": {
                        "isVisible": false
                    },
                    "ImgArrow": {
                        "isVisible": true,
                        "src": "bank_settings_frontarrow.png"
                    },
                    "BankOptions": {
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
            flxSettings.add(ChangemPin, RefreshAccounts, DeRegister);
            flxDetailsSettings.add(flxAccounDetailsHeader, flxDetails, flxSettings);
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
            flxAccountSettings.add(flxDetailsSettings, flxHamburger);
            this.add(flxAccountSettings);
        };
        return [{
            "addWidgets": addWidgetsfrmAccountsSettings,
            "enabledForIdleTimeout": false,
            "id": "frmAccountsSettings",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_fea8241a193848c0ab062098e9e97c92(eventobject);
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