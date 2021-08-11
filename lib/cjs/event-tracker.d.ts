import { IEventData, IPixelConfig } from "./types";
/**
 * Facebook Event Tracker
 */
export default class FacebookEventTracker {
    private config;
    private eventData;
    constructor(config: IPixelConfig);
    /**
     * Get Event Data
     * @returns {IEventData} eventData
     */
    getEventData(): {
        pixelId: number;
        testEventCode: string | undefined;
        serverData: import("./types").IServerData;
        userData?: import("./types").IUserData | undefined; /**
         * Get Event Data
         * @returns {IEventData} eventData
         */
        customData?: import("./types").ICustomData | undefined;
    };
    /**
     * Setting test event code to enable test mode
     * @param {string} eventCode - test_event_code
     */
    setTestMode(eventCode: string): void;
    /**
     * Facebook PIXEL ID
     */
    get pixelId(): number;
    /**
     * Set event data
     * @param {IEventData} eventData - list of parameters to be sent to facebook conversion api
     * https://developers.facebook.com/docs/marketing-api/conversions-api/parameters
     *
     * Refer to the types
     */
    setEventData(eventData: IEventData): void;
    /**
     * Check if test is enabled
     */
    isTestEnabled(): boolean;
    /**
     * Transform data
     */
    transform(): IEventData;
}
