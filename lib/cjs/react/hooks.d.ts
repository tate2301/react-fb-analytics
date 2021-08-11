export declare const useFacebookEvents: () => {
    trackEvent: (({ eventName, actionSource, userData, customData }: {
        eventName: string;
        actionSource: import("../enums").ActionSource;
        userData?: import("../types").IUserData | undefined;
        customData?: import("../types").ICustomData | undefined;
    }) => Promise<void>) | undefined;
};
