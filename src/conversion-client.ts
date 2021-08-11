import axios from "axios"
import {ServerProps} from "./types";

export const sendToServer = async ({data, headers, url}: ServerProps) => {
    return axios.post(url, data, {headers: headers})
}
