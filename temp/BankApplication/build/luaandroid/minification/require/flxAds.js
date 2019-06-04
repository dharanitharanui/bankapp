define("flxAds", function() {
    return function(controller) {
        var flxAds = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAds",
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
        flxAds.setDefaultUnit(kony.flex.DP);
        var ImgAds = new kony.ui.Image2({
            "height": "150dp",
            "id": "ImgAds",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxAds.add(ImgAds);
        return flxAds;
    }
})