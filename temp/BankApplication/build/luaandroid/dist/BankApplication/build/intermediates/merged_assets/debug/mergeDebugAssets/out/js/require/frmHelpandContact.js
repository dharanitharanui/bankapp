define("frmHelpandContact", function() {
    return function(controller) {
        function addWidgetsfrmHelpandContact() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHelpandContact = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHelpandContact",
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
            flxHelpandContact.setDefaultUnit(kony.flex.DP);
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
            var flxMainHelp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMainHelp",
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
            flxMainHelp.setDefaultUnit(kony.flex.DP);
            var flxScrlHelp = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "92.50%",
                "horizontalScrollIndicator": true,
                "id": "flxScrlHelp",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknflxScrlBgWhite",
                "top": "7%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxScrlHelp.setDefaultUnit(kony.flex.DP);
            var Question1 = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11%",
                "id": "Question1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "94%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "What are the features of DPS BANK MobileBanking?",
                        "left": "5%",
                        "width": "90%"
                    },
                    "flxLabel": {
                        "height": "100%",
                        "skin": "sknlblFntSize120FntBgBlackBr1BrBgGrey"
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
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER
                    }
                }
            }, {
                "overrides": {}
            });
            Question1.onClick = controller.AS_UWI_b5cb541e6e5543acb3ea3f2b1a3e86cd;
            var Question2 = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "6%",
                "id": "Question2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "94%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "What if I change my mobile number?",
                        "left": "5%",
                        "top": "0%",
                        "width": "90%"
                    },
                    "flxLabel": {
                        "height": "100%",
                        "skin": "sknlblFntSize120FntBgBlackBr1BrBgGrey"
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
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER
                    }
                }
            }, {
                "overrides": {}
            });
            Question2.onClick = controller.AS_UWI_j1668e0240b449b9b7f431d7744e3f68;
            var Question3 = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11%",
                "id": "Question3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "94%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "What are the charges for accessing this application?",
                        "left": "5%",
                        "width": "90%"
                    },
                    "flxLabel": {
                        "height": "100%",
                        "skin": "sknlblFntSize120FntBgBlackBr1BrBgGrey"
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
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER
                    }
                }
            }, {
                "overrides": {}
            });
            Question3.onClick = controller.AS_UWI_f13b623977934156ab3a5b1e4661a5af;
            var Question4 = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "16%",
                "id": "Question4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "94%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "Can I access the same bills which are registered in my Retail NetBanking?",
                        "left": "5%",
                        "width": "90%"
                    },
                    "flxLabel": {
                        "height": "100%",
                        "skin": "sknlblFntSize120FntBgBlackBr1BrBgGrey"
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
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER
                    }
                }
            }, {
                "overrides": {}
            });
            Question4.onClick = controller.AS_UWI_h22c43e725b74914b9c691fd09e879df;
            var Question5 = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "6%",
                "id": "Question5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "94%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "What is IMPS?",
                        "left": "5%",
                        "width": "90%"
                    },
                    "flxLabel": {
                        "height": "100%",
                        "skin": "sknlblFntSize120FntBgBlackBr1BrBgGrey"
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
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER
                    }
                }
            }, {
                "overrides": {}
            });
            Question5.onClick = controller.AS_UWI_fe70bab814964ae9b36c8d1dad531f4e;
            var Question6 = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20%",
                "id": "Question6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "94%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "What happens in case you enter a wrong beneficiary mobile number for remittance transaction in IMPS?",
                        "left": "5%",
                        "width": "90%"
                    },
                    "flxLabel": {
                        "height": "100%",
                        "skin": "sknlblFntSize120FntBgBlackBr1BrBgGrey"
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
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER
                    }
                }
            }, {
                "overrides": {}
            });
            Question6.onClick = controller.AS_UWI_e9a3a28b1b504e45a3d1cc24a5534d38;
            var Question7 = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11%",
                "id": "Question7",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "94%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "What should I do if I forget my MPIN?",
                        "left": "5%",
                        "width": "90%"
                    },
                    "flxLabel": {
                        "height": "100%",
                        "skin": "sknlblFntSize120FntBgBlackBr1BrBgGrey"
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
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER
                    }
                }
            }, {
                "overrides": {}
            });
            Question7.onClick = controller.AS_UWI_f929229713264b6bb55a6cf3a53fbf5d;
            var Question8 = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "23%",
                "id": "Question8",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "94%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "When will my MobileBanking application gets blocked? What do I do if my MobileBanking application gets blocked?",
                        "left": "5%",
                        "width": "90%"
                    },
                    "flxLabel": {
                        "height": "100%",
                        "skin": "sknlblFntSize120FntBgBlackBr1BrBgGrey"
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
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER
                    }
                }
            }, {
                "overrides": {}
            });
            Question8.onClick = controller.AS_UWI_cf1ccaf958ed4697a64fe2b3d6027964;
            var Question9 = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20%",
                "id": "Question9",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "94%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "What beneficiary details does the customer need to affect and IMPS remittance transaction?",
                        "left": "5%",
                        "width": "90%"
                    },
                    "flxLabel": {
                        "height": "100%",
                        "skin": "sknlblFntSize120FntBgBlackBr1BrBgGrey"
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
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER
                    }
                }
            }, {
                "overrides": {}
            });
            Question9.onClick = controller.AS_UWI_ec6d9b68c1e7426aac108d4b7ad8acf4;
            var Question10 = new SingleLabel.Singlelabel({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20%",
                "id": "Question10",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "93%",
                "overrides": {
                    "lblSingleLabel": {
                        "text": "What if you do not have a valid Retail NetBanking Registration in place when you download the mobile application?",
                        "left": "5%",
                        "width": "90%"
                    },
                    "flxLabel": {
                        "height": "100%",
                        "skin": "sknlblFntSize120FntBgBlackBr1BrBgGrey"
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
                        "contentAlignment": constants.CONTENT_ALIGN_CENTER
                    }
                }
            }, {
                "overrides": {}
            });
            Question10.onClick = controller.AS_UWI_b0f34b65a7d844879ea1b67f5cba3215;
            flxScrlHelp.add(Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10);
            var flxAnswers = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAnswers",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_i070b2a18ebb4a7288275a77433e5d24,
                "skin": "sknFlxBgBlackOp70",
                "top": "0dp",
                "width": "100%",
                "zIndex": 13
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxAnswers.setDefaultUnit(kony.flex.DP);
            var flxPopUp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "id": "flxPopUp",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxBgWhiteBr1BrBgblue",
                "top": "10%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 13
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxPopUp.setDefaultUnit(kony.flex.DP);
            var rchTxtAnswer = new kony.ui.RichText({
                "id": "rchTxtAnswer",
                "isVisible": true,
                "left": "5%",
                "linkSkin": "defRichTextLink",
                "skin": "sknrxhtxtFntSize130FntBgBlack",
                "text": "RichText",
                "top": "0dp",
                "width": "90%",
                "zIndex": 13
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPopUp.add(rchTxtAnswer);
            flxAnswers.add(flxPopUp);
            var flxHelpContactHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7%",
                "id": "flxHelpContactHeader",
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
            flxHelpContactHeader.setDefaultUnit(kony.flex.DP);
            flxHelpContactHeader.add();
            flxMainHelp.add(flxScrlHelp, flxAnswers, flxHelpContactHeader);
            var flxContactUs = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "93%",
                "id": "flxContactUs",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgWhite",
                "top": "7%",
                "width": "100%",
                "zIndex": 2
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxContactUs.setDefaultUnit(kony.flex.DP);
            var flxContactDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "38%",
                "id": "flxContactDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxBglightGreyOp40",
                "top": "2%",
                "width": "90%",
                "zIndex": 2
            }, {
                "retainFlowHorizontalAlignment": false
            }, {});
            flxContactDetails.setDefaultUnit(kony.flex.DP);
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
                        "text": "Bank"
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
                        "text": "DPS"
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
                        "text": "Account Holder"
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
                        "text": "Pushaan Reddy"
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
                "overrides": {}
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
                        "text": "Address"
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
                        "text": "1st Floor, Tower 1, Amrita Towers, New Chennai Township - Multi Services SEZ, Marg."
                    },
                    "flxLabel": {
                        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
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
            flxContactDetails.add(CustomerId, IdNumber, AccountHolder, AccountHolderName, Address, HolderAddress);
            flxContactUs.add(flxContactDetails);
            flxHelpandContact.add(flxHamburger, flxMainHelp, flxContactUs);
            this.add(flxHelpandContact);
        };
        return [{
            "addWidgets": addWidgetsfrmHelpandContact,
            "enabledForIdleTimeout": false,
            "id": "frmHelpandContact",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_f8d2d0dae69a4f13aa94572f9353d7a8(eventobject);
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