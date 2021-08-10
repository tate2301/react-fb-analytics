import { sendToServer } from "./conversion-client"
import { ActionSource } from "./enums"
import FacebookEventTracker from "./event-tracker"
import { makeid } from "./functions"
import { facebookPixelEvent, initFacebookPixel } from "./pixel"
import { AID_PowerPixelInit } from "./power-pixel"
import { ICustomData, IUserData } from "./types"

export default class FacebookConversion {
    pixelId: number
    wrapperUrl: string
    testCode?: string
    serverSideTracker: FacebookEventTracker
    apiKey: string
    headers: object
    dev: boolean = false

    constructor(pixelId: number, testCode?: string, dev?: boolean) {
        this.pixelId = pixelId
        this.testCode = testCode
        this.dev = dev && true
        this.init()
    }

    config = (apiKey: string, wrapperUrl: string) => {
        this.apiKey = apiKey
        this.wrapperUrl = wrapperUrl
        this.headers = {
            // this can be replace by env THOT_KEY
            "x-api-key": "tJItBhmwaCcsa0MrwR2iQa76Dd2f2fSSdEU",
        };
    }

    private init = () => {
        if (this.dev) {
            console.info("Not initialising FacebookConversion. We are in dev mode")
            return
        }
        initFacebookPixel(this.pixelId)
        AID_PowerPixelInit(this.serverSideTracker)
        this.serverSideTracker = new FacebookEventTracker({
            pixelId: this.pixelId,
            testEventCode: this.testCode
        });
    }

    track = async ({eventName, actionSource, userData, customData }: {
        eventName: string,
        actionSource: ActionSource,
        userData: IUserData,
        customData: ICustomData
    }) => {
        if (this.dev) {
            console.info("Tracking is disabled when dev mode is enabled. Please disable dev mode first to track events")
            return
        }

        if(!this.apiKey) {
            throw new Error("API Key is required for the ConversionAPI wrapper. Please call the config method providing the apiKey parameter");
            
        }

        if(!this.wrapperUrl) {
            throw new Error("Conversion API endpoint is required. Please call the config method providing the wrapperUrl parameter");
            
        }

        const eventId = makeid(16)

        this.serverSideTracker.setEventData({
            serverData: {
              eventName: eventName,
              eventSourceUrl: window?.location.pathname,
              actionSource,
              eventId
            },
            userData,
            customData
        });

        await sendToServer({
            data: this.serverSideTracker.transform(),
            headers: this.headers,
            url: this.wrapperUrl
        }).finally(() => {
            facebookPixelEvent(
                eventName, 
                eventId, 
                { 
                    fn: userData?.firstName,
                    ln: userData?.lastName,
                    em: userData?.email,
                    ...customData
            })
        })
    }

    teardown = () => {
        this.pixelId = null
        this.wrapperUrl = null
        this.testCode = null
        this.serverSideTracker = null
    }
}