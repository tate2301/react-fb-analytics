import axios from "axios"

export const sendToServer = async ({data, headers, url}) => {
    return axios.post(url, data, {headers: headers})
}