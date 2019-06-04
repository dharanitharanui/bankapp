define("CopyflxSectionHeaderTemplate1", function() {
    return function(controller) {
        var CopyflxSectionHeaderTemplate1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "CopyflxSectionHeaderTemplate1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopysknSampleSectionHeaderTemplate"
        }, {}, {});
        CopyflxSectionHeaderTemplate1.setDefaultUnit(kony.flex.DP);
        var lblHeading = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "CopysknSectionHeaderLabelSkin",
            "text": "Heading",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "75%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        CopyflxSectionHeaderTemplate1.add(lblHeading);
        return CopyflxSectionHeaderTemplate1;
    }
})