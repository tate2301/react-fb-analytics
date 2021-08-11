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
    dev: boolean;
    constructor(pixelId: number, testCode?: string, dev?: boolean);
    config: (apiKey: string, wrapperUrl: string) => void;
    private init;
    track: ({ eventName, actionSource, userData, customData }: {
        eventName: string;
        actionSource: ActionSource;
        userData?: IUserData | undefined;
        customData?: ICustomData | undefined;
    }) => Promise<void>;
}
