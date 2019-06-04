define(function() {
    return function(controller) {
        var Hamburger = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "isMaster": true,
            "height": "100%",
            "horizontalScrollIndicator": true,
            "id": "Hamburger",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%"
        }, controller.args[0], "Hamburger"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "Hamburger"), extendConfig({}, controller.args[2], "Hamburger"));
        Hamburger.setDefaultUnit(kony.flex.DP);
        var imgBankLogo = new kony.ui.Image2(extendConfig({
            "id": "imgBankLogo",
            "isVisible": true,
            "left": "22.50%",
            "skin": "slImage",
            "src": "logo.png",
            "top": "2%",
            "width": "18%",
            "zIndex": 1
        }, controller.args[0], "imgBankLogo"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBankLogo"), extendConfig({}, controller.args[2], "imgBankLogo"));
        var Home = new flxOptions.BankOptions(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "Home",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "2%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "overrides": {
                "lblBankOptions": {
                    "text": "Home",
                    "centerY": "50%",
                    "height": kony.flex.USE_PREFFERED_SIZE,
                    "skin": "sknlblFntSize110FntBgBlack",
                    "top": "8%"
                },
                "imgIcon": {
                    "isVisible": true,
                    "src": "homeblack.png"
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
        }, controller.args[0], "Home"), extendConfig({
            "overrides": {
                "lblBankOptions": {
                    "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
                }
            }
        }, controller.args[1], "Home"), extendConfig({
            "overrides": {}
        }, controller.args[2], "Home"));
        Home.onClick = controller.AS_UWI_fe6ffbc5d586416885aa124070932a32;
        var Apply = new flxOptions.BankOptions(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "Apply",
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
                    "text": "Apply",
                    "skin": "sknlblFntSize110FntBgBlack"
                },
                "ImgArrow": {
                    "isVisible": true,
                    "left": "55%"
                },
                "imgIcon": {
                    "src": "apply_black.png"
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
        }, controller.args[0], "Apply"), extendConfig({
            "overrides": {}
        }, controller.args[1], "Apply"), extendConfig({
            "overrides": {}
        }, controller.args[2], "Apply"));
        Apply.onClick = controller.AS_UWI_c72a8bf431684aa99636334175fe1c6a;
        var Credit = new flxOptions.BankOptions(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "Credit",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20%",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "50%",
            "overrides": {
                "lblBankOptions": {
                    "text": "Credit",
                    "isVisible": true,
                    "left": "30%",
                    "skin": "sknlblFntSize110FntBgBlack",
                    "top": "8%"
                },
                "imgIcon": {
                    "isVisible": true,
                    "height": "100%",
                    "src": "card_black.png",
                    "width": "20%"
                },
                "flxDashBoard": {
                    "isVisible": true
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
        }, controller.args[0], "Credit"), extendConfig({
            "overrides": {
                "lblBankOptions": {
                    "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
                }
            }
        }, controller.args[1], "Credit"), extendConfig({
            "overrides": {}
        }, controller.args[2], "Credit"));
        var Debit = new flxOptions.BankOptions(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "Debit",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20%",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "50%",
            "overrides": {
                "lblBankOptions": {
                    "text": "Debit",
                    "isVisible": true,
                    "left": "30%",
                    "skin": "sknlblFntSize110FntBgBlack",
                    "top": "8%"
                },
                "imgIcon": {
                    "isVisible": true,
                    "src": "card_black.png",
                    "width": "20%"
                },
                "flxDashBoard": {
                    "isVisible": true
                },
                "ImgArrow": {
                    "isVisible": false
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
        }, controller.args[0], "Debit"), extendConfig({
            "overrides": {
                "lblBankOptions": {
                    "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
                }
            }
        }, controller.args[1], "Debit"), extendConfig({
            "overrides": {}
        }, controller.args[2], "Debit"));
        var Loan = new flxOptions.BankOptions(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "Loan",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20%",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "50%",
            "overrides": {
                "lblBankOptions": {
                    "text": "Loan",
                    "isVisible": true,
                    "left": "30%",
                    "skin": "sknlblFntSize110FntBgBlack",
                    "top": "8%"
                },
                "imgIcon": {
                    "isVisible": true,
                    "src": "loan.png",
                    "width": "20%"
                },
                "flxDashBoard": {
                    "isVisible": true
                },
                "ImgArrow": {
                    "isVisible": false
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
        }, controller.args[0], "Loan"), extendConfig({
            "overrides": {
                "lblBankOptions": {
                    "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
                }
            }
        }, controller.args[1], "Loan"), extendConfig({
            "overrides": {}
        }, controller.args[2], "Loan"));
        var BlockCard = new flxOptions.BankOptions(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "BlockCard",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20%",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "50%",
            "overrides": {
                "lblBankOptions": {
                    "text": "BlockCard",
                    "isVisible": true,
                    "height": "100%",
                    "left": "30%",
                    "skin": "sknlblFntSize110FntBgBlack",
                    "top": "8%"
                },
                "imgIcon": {
                    "isVisible": true,
                    "height": "90%",
                    "left": "2%",
                    "src": "cardblock.png",
                    "top": "25%",
                    "width": "22%"
                },
                "flxDashBoard": {
                    "isVisible": true
                },
                "ImgArrow": {
                    "isVisible": false
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
        }, controller.args[0], "BlockCard"), extendConfig({
            "overrides": {
                "lblBankOptions": {
                    "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
                }
            }
        }, controller.args[1], "BlockCard"), extendConfig({
            "overrides": {}
        }, controller.args[2], "BlockCard"));
        var RecentTransaction = new flxOptions.BankOptions(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "RecentTransaction",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "1%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "overrides": {
                "lblBankOptions": {
                    "text": "Recent Transaction",
                    "centerX": "50%",
                    "skin": "sknlblFntSize110FntBgBlack",
                    "top": "8%",
                    "width": kony.flex.USE_PREFFERED_SIZE
                },
                "imgIcon": {
                    "src": "recent_transactionblack.png"
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
        }, controller.args[0], "RecentTransaction"), extendConfig({
            "overrides": {
                "lblBankOptions": {
                    "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
                }
            }
        }, controller.args[1], "RecentTransaction"), extendConfig({
            "overrides": {}
        }, controller.args[2], "RecentTransaction"));
        var Addpayee = new flxOptions.BankOptions(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "Addpayee",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "1%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "overrides": {
                "lblBankOptions": {
                    "text": "Add Payee",
                    "centerX": "50%",
                    "skin": "sknlblFntSize110FntBgBlack",
                    "top": "8%"
                },
                "imgIcon": {
                    "src": "add_payee_black.png"
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
        }, controller.args[0], "Addpayee"), extendConfig({
            "overrides": {
                "lblBankOptions": {
                    "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
                }
            }
        }, controller.args[1], "Addpayee"), extendConfig({
            "overrides": {}
        }, controller.args[2], "Addpayee"));
        var ContactUs = new flxOptions.BankOptions(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "ContactUs",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "1%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "overrides": {
                "lblBankOptions": {
                    "text": "Contact Us",
                    "centerX": "50%",
                    "skin": "sknlblFntSize110FntBgBlack",
                    "top": "8%"
                },
                "imgIcon": {
                    "src": "contact_us_black.png"
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
        }, controller.args[0], "ContactUs"), extendConfig({
            "overrides": {
                "lblBankOptions": {
                    "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
                }
            }
        }, controller.args[1], "ContactUs"), extendConfig({
            "overrides": {}
        }, controller.args[2], "ContactUs"));
        var Help = new flxOptions.BankOptions(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "Help",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "1%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "overrides": {
                "lblBankOptions": {
                    "text": "Help",
                    "centerX": "50%",
                    "skin": "sknlblFntSize110FntBgBlack",
                    "top": "8%"
                },
                "imgIcon": {
                    "src": "help_black.png"
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
        }, controller.args[0], "Help"), extendConfig({
            "overrides": {
                "lblBankOptions": {
                    "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
                }
            }
        }, controller.args[1], "Help"), extendConfig({
            "overrides": {}
        }, controller.args[2], "Help"));
        Help.onClick = controller.AS_UWI_j522c49109274d9abb87230fa281459d;
        var settings = new flxOptions.BankOptions(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "settings",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "1%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "overrides": {
                "lblBankOptions": {
                    "text": "Settings",
                    "centerX": "50%",
                    "skin": "sknlblFntSize110FntBgBlack",
                    "top": "8%"
                },
                "imgIcon": {
                    "src": "settings_black1.png"
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
        }, controller.args[0], "settings"), extendConfig({
            "overrides": {
                "lblBankOptions": {
                    "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
                }
            }
        }, controller.args[1], "settings"), extendConfig({
            "overrides": {}
        }, controller.args[2], "settings"));
        settings.onClick = controller.AS_UWI_c9c74f574a56460084f6ab16feda31ba;
        var Logout = new flxOptions.BankOptions(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "Logout",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "1%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "overrides": {
                "lblBankOptions": {
                    "text": "Logout",
                    "centerX": "50%",
                    "centerY": "50%",
                    "height": kony.flex.USE_PREFFERED_SIZE,
                    "skin": "sknlblFntSize110FntBgBlack",
                    "top": "8%",
                    "width": "viz.val_cleared"
                },
                "imgIcon": {
                    "src": "logout.png"
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
        }, controller.args[0], "Logout"), extendConfig({
            "overrides": {
                "lblBankOptions": {
                    "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
                }
            }
        }, controller.args[1], "Logout"), extendConfig({
            "overrides": {}
        }, controller.args[2], "Logout"));
        Hamburger.add(imgBankLogo, Home, Apply, Credit, Debit, Loan, BlockCard, RecentTransaction, Addpayee, ContactUs, Help, settings, Logout);
        return Hamburger;
    }
})