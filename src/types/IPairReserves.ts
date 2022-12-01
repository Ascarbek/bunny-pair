export interface IPairReserves  {
    chain_id:number;
    router: string;
    factory: string;
    token0: string;
    token1: string;
    token0wrapped: string;
    token1wrapped: string;
    decimals0: number;
    decimals1: number;
    reserve0: string;
    reserve1: string;
    supply: string;
}