"use strict";
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.facebookPixelEvent = exports.initFacebookPixel = void 0;
function initFacebookPixel(pixelId) {
    !(function (f, b, e, v, n, t, s) {
        if (f.fbq)
            return;
        n = f.fbq = function () {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq)
            f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    fbq("init", pixelId);
}
exports.initFacebookPixel = initFacebookPixel;
// This is just a wrapper function for convenience
function facebookPixelEvent(eventName, eventId, eventData) {
    if (eventData === void 0) { eventData = null; }
    fbq("track", eventName, eventData, { eventID: eventId });
}
exports.facebookPixelEvent = facebookPixelEvent;
