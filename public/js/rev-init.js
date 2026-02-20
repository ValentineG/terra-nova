// public/js/rev-init.js
var tpj = jQuery;
var revapi3;

if(window.RS_MODULES === undefined) window.RS_MODULES = {};
if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};

RS_MODULES.modules["revslider31"] = {
    once: RS_MODULES.modules["revslider31"] !== undefined ? RS_MODULES.modules["revslider31"].once : undefined,
    init: function() {
        window.revapi3 = (window.revapi3 === undefined || window.revapi3 === null || window.revapi3.length === 0) ? document.getElementById("rev_slider_3_1") : window.revapi3;
        if(window.revapi3 === null || window.revapi3 === undefined || window.revapi3.length == 0) {
            window.revapi3initTry = window.revapi3initTry === undefined ? 0 : window.revapi3initTry + 1;
            if (window.revapi3initTry < 20) requestAnimationFrame(function() { RS_MODULES.modules["revslider31"].init() });
            return;
        }
        window.revapi3 = jQuery(window.revapi3);
        if(window.revapi3.revolution == undefined) {
            if(typeof revslider_showDoubleJqueryError !== "undefined") revslider_showDoubleJqueryError("rev_slider_3_1");
            return;
        }
        revapi3.revolutionInit({
            revapi: "revapi3",
            DPR: "dpr",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1920,1024,778,480",
            gridheight: "900,768,960,720",
            lazyType: "smart",
            perspective: 600,
            perspectiveType: "global",
            editorheight: "900,768,960,720",
            responsiveLevels: "1240,1024,778,480",
            progressBar: { disableProgressBar: true },
            navigation: {
                wheelCallDelay: 1000,
                onHoverStop: false,
                touch: { touchenabled: true, touchOnDesktop: true },
                arrows: {
                    enable: true,
                    style: "luxtower",
                    hide_onmobile: true,
                    hide_under: 778,
                    left: { h_align: "right", v_align: "bottom", h_offset: 90 },
                    right: { v_align: "bottom", h_offset: 0 }
                }
            },
            viewPort: { global: true, globalDist: "-200px", enable: false },
            fallbacks: { allowHTML5AutoPlayOnAndroid: true },
        });
    }
};

// Запуск перевірки
if (window.RS_MODULES.checkMinimal !== undefined) {
    window.RS_MODULES.checkMinimal();
}