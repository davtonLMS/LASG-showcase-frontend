_N2.r('documentReady', function () {
    _N2.r(["documentReady", "smartslider-frontend", "SmartSliderWidgetArrowImage",
        "SmartSliderWidgetThumbnailDefaultHorizontal", "ss-simple"
    ], function () {
        new _N2.SmartSliderSimple('n2-ss-6', {
            "admin": false,
            "callbacks": "",
            "background.video.mobile": 1,
            "alias": {
                "id": 0,
                "smoothScroll": 0,
                "slideSwitch": 0,
                "scroll": 1
            },
            "align": "normal",
            "isDelayed": 0,
            "responsive": {
                "mediaQueries": {
                    "all": false,
                    "desktopportrait": ["(min-width: 1200px)"],
                    "tabletportrait": [
                        "(orientation: landscape) and (max-width: 1199px) and (min-width: 901px)",
                        "(orientation: portrait) and (max-width: 1199px) and (min-width: 701px)"
                    ],
                    "mobileportrait": [
                        "(orientation: landscape) and (max-width: 900px)",
                        "(orientation: portrait) and (max-width: 700px)"
                    ]
                },
                "base": {
                    "slideOuterWidth": 1200,
                    "slideOuterHeight": 600,
                    "sliderWidth": 1200,
                    "sliderHeight": 600,
                    "slideWidth": 1200,
                    "slideHeight": 600
                },
                "hideOn": {
                    "desktopLandscape": false,
                    "desktopPortrait": false,
                    "tabletLandscape": false,
                    "tabletPortrait": false,
                    "mobileLandscape": false,
                    "mobilePortrait": false
                },
                "onResizeEnabled": true,
                "type": "fullwidth",
                "sliderHeightBasedOn": "real",
                "focusUser": 1,
                "focusEdge": "auto",
                "breakpoints": [{
                    "device": "tabletPortrait",
                    "type": "max-screen-width",
                    "portraitWidth": 1199,
                    "landscapeWidth": 1199
                }, {
                    "device": "mobilePortrait",
                    "type": "max-screen-width",
                    "portraitWidth": 700,
                    "landscapeWidth": 900
                }],
                "enabledDevices": {
                    "desktopLandscape": 0,
                    "desktopPortrait": 1,
                    "tabletLandscape": 0,
                    "tabletPortrait": 1,
                    "mobileLandscape": 0,
                    "mobilePortrait": 1
                },
                "sizes": {
                    "desktopPortrait": {
                        "width": 1200,
                        "height": 600,
                        "max": 3000,
                        "min": 1200
                    },
                    "tabletPortrait": {
                        "width": 701,
                        "height": 350,
                        "customHeight": false,
                        "max": 1199,
                        "min": 701
                    },
                    "mobilePortrait": {
                        "width": 320,
                        "height": 160,
                        "customHeight": false,
                        "max": 900,
                        "min": 320
                    }
                },
                "overflowHiddenPage": 0,
                "focus": {
                    "offsetTop": "#wpadminbar",
                    "offsetBottom": ""
                }
            },
            "controls": {
                "mousewheel": 0,
                "touch": "horizontal",
                "keyboard": 1,
                "blockCarouselInteraction": 1
            },
            "playWhenVisible": 1,
            "playWhenVisibleAt": 0.5,
            "lazyLoad": 0,
            "lazyLoadNeighbor": 0,
            "blockrightclick": 0,
            "maintainSession": 0,
            "autoplay": {
                "enabled": 1,
                "start": 1,
                "duration": 8000,
                "autoplayLoop": 1,
                "allowReStart": 0,
                "pause": {
                    "click": 1,
                    "mouse": "0",
                    "mediaStarted": 1
                },
                "resume": {
                    "click": 0,
                    "mouse": "0",
                    "mediaEnded": 1,
                    "slidechanged": 0
                },
                "interval": 1,
                "intervalModifier": "loop",
                "intervalSlide": "current"
            },
            "perspective": 1500,
            "layerMode": {
                "playOnce": 0,
                "playFirstLayer": 1,
                "mode": "skippable",
                "inAnimation": "mainInEnd"
            },
            "bgAnimations": 0,
            "mainanimation": {
                "type": "horizontal",
                "duration": 400,
                "delay": 0,
                "ease": "easeOutQuad",
                "shiftedBackgroundAnimation": 0
            },
            "carousel": 1,
            "initCallbacks": function () {
                new _N2.SmartSliderWidgetArrowImage(this);
                new _N2.SmartSliderWidgetThumbnailDefaultHorizontal(this, {
                    "action": "click",
                    "minimumThumbnailCount": 1
                });
            }
        });
    });
});