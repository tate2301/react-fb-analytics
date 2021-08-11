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

    constructor(pixelId: number, testCode?: string) {
        this.pixelId = pixelId
        this.testCode = testCode
        this.serverSideTracker = new FacebookEventTracker({
            pixelId: this.pixelId,
            testEventCode: this.testCode
        });
        // this.init()
    }

    public config = (apiKey: string, wrapperUrl: string) => {
        this.apiKey = apiKey
        this.wrapperUrl = wrapperUrl
        this.headers = {
            "x-api-key": apiKey,
        };
    }

    init = () => {
        initFacebookPixel(this.pixelId)
        AID_PowerPixelInit(this.serverSideTracker.transform())
    }

    track = async ({eventName, actionSource, userData, customData }: {
        eventName: string,
        actionSource: ActionSource,
        userData?: IUserData,
        customData?: ICustomData
    }) => {
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
        }).catch(err => console.log(err))
        await facebookPixelEvent(
            eventName,
            eventId,
            {
                fn: userData?.firstName,
                ln: userData?.lastName,
                em: userData?.email,
                ...customData
            })
    }
}
