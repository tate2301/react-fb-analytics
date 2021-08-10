import { EventDataClass, IEventData, IPixelConfig } from "./types";

/**
 * Facebook Event Tracker
 */
 export default class FacebookEventTracker {
    private eventData!: IEventData;
    constructor(private config: IPixelConfig) {}
  
    /**
     * Get Event Data
     * @returns {IEventData} eventData
     */
    getEventData() {
      const { pixelId, testEventCode } = this.config;
  
      return {
        ...this.eventData,
        pixelId,
        testEventCode,
      };
    }
  
    /**
     * Setting test event code to enable test mode
     * @param {string} eventCode - test_event_code
     */
  
    setTestMode(eventCode: string): void {
      this.config.testEventCode = eventCode;
    }
  
    /**
     * Facebook PIXEL ID
     */
    get pixelId() {
      return this.config.pixelId;
    }
  
    /**
     * Set event data
     * @param {IEventData} eventData - list of parameters to be sent to facebook conversion api
     * https://developers.facebook.com/docs/marketing-api/conversions-api/parameters
     *
     * Refer to the types
     */
    setEventData(eventData: IEventData): void {
      this.eventData = eventData;
    }
  
    /**
     * Check if test is enabled
     */
    isTestEnabled(): boolean {
      return !!this.config?.testEventCode;
    }
    /**
     * Transform data
     */
    transform(): IEventData {
      const eventData = this.getEventData();
  
      // to clear eventData
      this.setEventData(new EventDataClass());
  
      console.log("eventData sent:", this.getEventData());
  
      return eventData;
    }
  }