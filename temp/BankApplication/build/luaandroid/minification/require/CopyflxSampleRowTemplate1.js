define("CopyflxSampleRowTemplate1", function() {
    return function(controller) {
        var CopyflxSampleRowTemplate1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "CopyflxSampleRowTemplate1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopysknSampleRowTemplate"
        }, {}, {});
        CopyflxSampleRowTemplate1.setDefaultUnit(kony.flex.DP);
        var lblHeading = new kony.ui.Label({
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "CopysknLblRowHeading",
            "text": "Heading",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "8.00%",
            "width": "45%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblDescription = new kony.ui.Label({
            "bottom": "10%",
            "id": "lblDescription",
            "isVisible": true,
            "left": "4%",
            "maxNumberOfLines": 3,
            "maxWidth": "70%",
            "skin": "CopysknLblBgBlack",
            "text": "Sub-Heading",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
            "top": "42%",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblTime = new kony.ui.Label({
            "id": "lblTime",
            "isVisible": true,
            "right": "9%",
            "skin": "CopysknLblTimeStamp",
            "text": "Timestamp",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblStrip = new kony.ui.Label({
            "height": "100%",
            "id": "lblStrip",
            "isVisible": true,
            "left": "0dp",
            "maxWidth": "1%",
            "skin": "CopysknLblStrip",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        CopyflxSampleRowTemplate1.add(lblHeading, lblDescription, lblTime, lblStrip);
        return CopyflxSampleRowTemplate1;
    }
})