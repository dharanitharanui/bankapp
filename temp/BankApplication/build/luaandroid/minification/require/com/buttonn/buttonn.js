define(function() {
    return function(controller) {
        var buttonn = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "isMaster": true,
            "id": "buttonn",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "buttonn"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "buttonn"), extendConfig({}, controller.args[2], "buttonn"));
        buttonn.setDefaultUnit(kony.flex.DP);
        var flxButton = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxButton",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxButton"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "flxButton"), extendConfig({}, controller.args[2], "flxButton"));
        flxButton.setDefaultUnit(kony.flex.DP);
        var btn = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "height": "40dp",
            "id": "btn",
            "isVisible": true,
            "onClick": controller.AS_onclick_eef6c66361e34a94a789744b4649c833,
            "skin": "CopysknBtnBgBlueFntSize",
            "text": "Continue",
            "top": "0dp",
            "width": "45%",
            "zIndex": 1
        }, controller.args[0], "btn"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btn"), extendConfig({}, controller.args[2], "btn"));
        flxButton.add(btn);
        buttonn.add(flxButton);
        return buttonn;
    }
})