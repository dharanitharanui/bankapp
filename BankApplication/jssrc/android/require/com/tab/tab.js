define(function() {
    return function(controller) {
        var tab = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "isMaster": true,
            "id": "tab",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "tab"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "tab"), extendConfig({}, controller.args[2], "tab"));
        tab.setDefaultUnit(kony.flex.DP);
        var flxTab = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxTab",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "onClick": controller.AS_tabonClick_e53bffc98fe34a5e931c9806f7b075e2,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTab"), extendConfig({
            "retainFlowHorizontalAlignment": false
        }, controller.args[1], "flxTab"), extendConfig({}, controller.args[2], "flxTab"));
        flxTab.setDefaultUnit(kony.flex.DP);
        var imgTabImage = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "30dp",
            "id": "imgTabImage",
            "isVisible": true,
            "left": "150dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "imgTabImage"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgTabImage"), extendConfig({}, controller.args[2], "imgTabImage"));
        var lblTabName = new kony.ui.Label(extendConfig({
            "id": "lblTabName",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblFntSize120Grey",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "2dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblTabName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTabName"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTabName"));
        var lblLine = new kony.ui.Label(extendConfig({
            "bottom": "0dp",
            "centerX": "50%",
            "height": "2dp",
            "id": "lblLine",
            "isVisible": true,
            "skin": "sknLblBgBlue",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblLine"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLine"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblLine"));
        flxTab.add(imgTabImage, lblTabName, lblLine);
        tab.add(flxTab);
        return tab;
    }
})