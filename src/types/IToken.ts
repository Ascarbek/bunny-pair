export interface IToken {
  id?: number;
  name: string;
  symbol: string;
  address: string;
  chain_id: number;
  decimals: number;
  logo?: string;
}
