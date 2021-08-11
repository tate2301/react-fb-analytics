import React, { createContext } from "react";
import FacebookConversion from "../index";
export var FacebookEventTrackerContext = createContext(null);
export var FacebookEventProvider = function (_a) {
    var children = _a.children, config = _a.config;
    var fbTracker = null;
    if (typeof (window) !== "undefined") {
        var fbTracker_1 = (new FacebookConversion(config.pixelId, config.testCode));
        fbTracker_1.config(config.apiKey, config.wrapperUrl);
    }
    return (React.createElement(FacebookEventTrackerContext.Provider, { value: fbTracker }, children));
};
