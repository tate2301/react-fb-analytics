import React, { createContext, useState } from "react";
import FacebookConversion from "../index";
export var FacebookEventTrackerContext = createContext(null);
export var FacebookEventProvider = function (_a) {
    var children = _a.children, config = _a.config;
    var fbTracker = useState(new FacebookConversion(config.pixelId, config.testCode))[0];
    fbTracker.config(config.apiKey, config.wrapperUrl);
    fbTracker.init();
    return (React.createElement(FacebookEventTrackerContext.Provider, { value: fbTracker }, children));
};
