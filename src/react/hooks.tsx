import {useContext} from "react";
import {FacebookEventTrackerContext} from "./index";

export const useFacebookEvents = () => {
    const fbTracker = useContext(FacebookEventTrackerContext)

    return { trackEvent: fbTracker?.track }
}
