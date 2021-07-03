import axios from "axios"
import { API_URL } from "./config"
import { RpcParams } from "./types"

export const getContracts = async (params: RpcParams) => {
    const res = await axios.post(API_URL, {
        id: '1',
        jsonrpc: '2.0',
        ...params
    })

    return res?.data?.result
}
