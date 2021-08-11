import { ActionSource } from "./enums";
import FacebookEventTracker from "./event-tracker";
import { ICustomData, IUserData } from "./types";
export default class FacebookConversion {
    pixelId: number;
    wrapperUrl: string;
    testCode?: string;
    serverSideTracker: FacebookEventTracker;
    apiKey: string;
    headers: object;
    constructor(pixelId: number, testCode?: string);
    config: (apiKey: string, wrapperUrl: string) => void;
    init: () => void;
    track: ({ eventName, actionSource, userData, customData }: {
        eventName: string;
        actionSource: ActionSource;
        userData?: IUserData | undefined;
        customData?: ICustomData | undefined;
    }) => Promise<void>;
}
