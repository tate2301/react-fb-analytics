import React, {createContext} from "react";
import {ReactContextProps} from "../types";
import FacebookConversion from "../index";

export const FacebookEventTrackerContext =
    createContext<FacebookConversion | null>(null)

export const FacebookEventProvider = ({ children, config }: ReactContextProps) => {
    let fbTracker = null
    if (typeof (window) !== "undefined") {
        const fbTracker: FacebookConversion = (
            new FacebookConversion(
                config.pixelId,
                config.testCode,
            )
        )
        fbTracker.config(config.apiKey, config.wrapperUrl)
    }

    return (
        <FacebookEventTrackerContext.Provider value={fbTracker}>
            {children}
        </FacebookEventTrackerContext.Provider>
    )
}

