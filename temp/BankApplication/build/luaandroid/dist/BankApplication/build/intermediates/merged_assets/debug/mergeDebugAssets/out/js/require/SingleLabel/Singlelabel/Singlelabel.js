define(function() {
    return function(controller) {
        var Singlelabel = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "5%",
            "id": "Singlelabel",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "Singlelabel"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "Singlelabel"), extendConfig({}, controller.args[2], "Singlelabel"));
        Singlelabel.setDefaultUnit(kony.flex.DP);
        var flxLabel = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxLabel",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "onClick": controller.AS_onClick_fb18d56ef14a4b8e811520259b488ead,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLabel"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "flxLabel"), extendConfig({}, controller.args[2], "flxLabel"));
        flxLabel.setDefaultUnit(kony.flex.DP);
        var lblSingleLabel = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblSingleLabel",
            "isVisible": true,
            "left": 0,
            "skin": "sknlblFntSize120FntBgBlack",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblSingleLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSingleLabel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSingleLabel"));
        flxLabel.add(lblSingleLabel);
        Singlelabel.add(flxLabel);
        return Singlelabel;
    }
})