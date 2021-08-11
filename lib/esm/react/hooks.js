import { useContext } from "react";
import { FacebookEventTrackerContext } from "./index";
export var useFacebookEvents = function () {
    var fbTracker = useContext(FacebookEventTrackerContext);
    return { trackEvent: fbTracker === null || fbTracker === void 0 ? void 0 : fbTracker.track };
};
