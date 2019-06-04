define("flxPayment", function() {
    return function(controller) {
        var flxPayment = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPayment",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {
            "retainFlowHorizontalAlignment": false
        }, {});
        flxPayment.setDefaultUnit(kony.flex.DP);
        var flxRound = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxRound",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "3%",
            "isModalContainer": false,
            "skin": "sknFlxRounded",
            "top": "8dp",
            "width": "50dp",
            "zIndex": 2
        }, {
            "retainFlowHorizontalAlignment": false
        }, {});
        flxRound.setDefaultUnit(kony.flex.DP);
        var lblIntial = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblIntial",
            "isVisible": true,
            "skin": "defLabel",
            "text": "S",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxRound.add(lblIntial);
        var lblName = new kony.ui.Label({
            "id": "lblName",
            "isVisible": true,
            "left": "20%",
            "skin": "sknLblFntSize110Black",
            "text": "Santhosh",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblTransId = new kony.ui.Label({
            "id": "lblTransId",
            "isVisible": true,
            "left": "20%",
            "skin": "sknLblFntSize120Grey",
            "text": "01234567891012",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "35dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAmmount = new kony.ui.Label({
            "id": "lblAmmount",
            "isVisible": true,
            "right": "13%",
            "skin": "sknLblFntSize110Black",
            "text": "₹30,000",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblTime = new kony.ui.Label({
            "id": "lblTime",
            "isVisible": true,
            "right": "3%",
            "skin": "sknLblFntSize120Grey",
            "text": "21 Apr 2019",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "35dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var BtnPay = new kony.ui.Button({
            "id": "BtnPay",
            "isVisible": true,
            "right": "3%",
            "skin": "sknBtnFntSize130BlueBg0",
            "text": "Pay",
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxLine = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "17%",
            "isModalContainer": false,
            "skin": "sknFlxBgGrey",
            "top": "70dp",
            "width": "83%",
            "zIndex": 1
        }, {
            "retainFlowHorizontalAlignment": false
        }, {});
        flxLine.setDefaultUnit(kony.flex.DP);
        flxLine.add();
        var btnDelete = new kony.ui.Button({
            "height": "30dp",
            "id": "btnDelete",
            "isVisible": true,
            "right": "5%",
            "skin": "sknBtnBgImageDelete",
            "top": "20dp",
            "width": "8%",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxPayment.add(flxRound, lblName, lblTransId, lblAmmount, lblTime, BtnPay, flxLine, btnDelete);
        return flxPayment;
    }
})