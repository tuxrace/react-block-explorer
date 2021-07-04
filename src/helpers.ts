import { ResultsParams } from "./types"

export const convertResults = (arr: ResultsParams[]) => {
    return arr.reduce((acc: any, cur: ResultsParams) => {
        if (!arr[cur?.vname as any]){
            acc[cur?.vname] = cur
        }
        return acc
    }, {})
}

export const convertStr = (value: string) => {
    return value.substring(2)
}