var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { EventDataClass } from "./types";
/**
 * Facebook Event Tracker
 */
var FacebookEventTracker = /** @class */ (function () {
    function FacebookEventTracker(config) {
        this.config = config;
    }
    /**
     * Get Event Data
     * @returns {IEventData} eventData
     */
    FacebookEventTracker.prototype.getEventData = function () {
        var _a = this.config, pixelId = _a.pixelId, testEventCode = _a.testEventCode;
        return __assign(__assign({}, this.eventData), { pixelId: pixelId, testEventCode: testEventCode });
    };
    /**
     * Setting test event code to enable test mode
     * @param {string} eventCode - test_event_code
     */
    FacebookEventTracker.prototype.setTestMode = function (eventCode) {
        this.config.testEventCode = eventCode;
    };
    Object.defineProperty(FacebookEventTracker.prototype, "pixelId", {
        /**
         * Facebook PIXEL ID
         */
        get: function () {
            return this.config.pixelId;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Set event data
     * @param {IEventData} eventData - list of parameters to be sent to facebook conversion api
     * https://developers.facebook.com/docs/marketing-api/conversions-api/parameters
     *
     * Refer to the types
     */
    FacebookEventTracker.prototype.setEventData = function (eventData) {
        this.eventData = eventData;
    };
    /**
     * Check if test is enabled
     */
    FacebookEventTracker.prototype.isTestEnabled = function () {
        var _a;
        return !!((_a = this.config) === null || _a === void 0 ? void 0 : _a.testEventCode);
    };
    /**
     * Transform data
     */
    FacebookEventTracker.prototype.transform = function () {
        var eventData = this.getEventData();
        // to clear eventData
        this.setEventData(new EventDataClass());
        console.log("eventData sent:", this.getEventData());
        return eventData;
    };
    return FacebookEventTracker;
}());
export default FacebookEventTracker;
