export type RpcParams = {
    id?: string;
    jsonrpc?: string;
    method?: string;
    params?: any;
}

export type ResultsParams = {
    type?: string;
    value?: string;
    vname: string | number;
}

export enum CoinTypes {
    Alice = 'AliceCoin',
    Bob = 'BobCoin',
    Doge = 'Doge'
}