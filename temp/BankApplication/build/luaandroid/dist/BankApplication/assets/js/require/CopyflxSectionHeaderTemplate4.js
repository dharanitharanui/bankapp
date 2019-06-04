define("CopyflxSectionHeaderTemplate4", function() {
    return function(controller) {
        var CopyflxSectionHeaderTemplate4 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "CopyflxSectionHeaderTemplate4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopysknSampleSectionHeaderTemplate1"
        }, {}, {});
        CopyflxSectionHeaderTemplate4.setDefaultUnit(kony.flex.DP);
        var lblHeading = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "CopysknSectionHeaderLabelSkin1",
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
        CopyflxSectionHeaderTemplate4.add(lblHeading);
        return CopyflxSectionHeaderTemplate4;
    }
})