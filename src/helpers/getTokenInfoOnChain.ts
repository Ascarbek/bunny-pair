import { ethers } from 'ethers';
import erc20 from '../ABI/erc20';
import getProvider from './getProvider';
import type { IToken } from '../types/IToken';

const getTokenInfoOnChain: (chain: number, token: string) => Promise<IToken | null> = async (
  chain: number,
  token: string
) => {
  try {
    const contract = new ethers.Contract(token, erc20, getProvider(chain));
    let name = await contract.name();
    let symbol = await contract.symbol();
    let decimals = await contract.decimals();

    return {
      name,
      symbol,
      address: token,
      chain_id: chain,
      decimals: decimals,
    };
  } catch (e) {
    return null;
  }
};

export default getTokenInfoOnChain;
