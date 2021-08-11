import React, {createContext, useState} from "react";
import {ReactContextProps} from "../types";
import FacebookConversion from "../index";

export const FacebookEventTrackerContext =
    createContext<FacebookConversion | null>(null)

export const FacebookEventProvider = ({ children, config }: ReactContextProps) => {
    const [fbTracker] = useState<FacebookConversion>(new FacebookConversion(
        config.pixelId,
        config.testCode,
    ))

    fbTracker.config(config.apiKey, config.wrapperUrl)
    fbTracker.init()

    return (
        <FacebookEventTrackerContext.Provider value={fbTracker}>
            {children}
        </FacebookEventTrackerContext.Provider>
    )
}

