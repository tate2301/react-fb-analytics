import { ServerProps } from "./types";
export declare const sendToServer: ({ data, headers, url }: ServerProps) => Promise<import("axios").AxiosResponse<any>>;
