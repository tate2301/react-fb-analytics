import React, { createContext } from "react";
import FacebookConversion from "./index";
export var FacebookEventTrackerContext = createContext(null);
export var FacebookEventProvider = function (_a) {
    var children = _a.children, config = _a.config;
    var fbTracker = (new FacebookConversion(config.pixelId, config.testCode, config.dev));
    fbTracker.config(config.apiKey, config.wrapperUrl);
    return (React.createElement(FacebookEventTrackerContext.Provider, { value: fbTracker }, children));
};
export var useFacebookEvents = function () {
};
