"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFacebookEvents = void 0;
var react_1 = require("react");
var index_1 = require("./index");
var useFacebookEvents = function () {
    var fbTracker = react_1.useContext(index_1.FacebookEventTrackerContext);
    return { trackEvent: fbTracker === null || fbTracker === void 0 ? void 0 : fbTracker.track };
};
exports.useFacebookEvents = useFacebookEvents;
