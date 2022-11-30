import { ethers } from 'ethers';
import erc20 from '../ABI/erc20';
import getProvider from './getProvider';

const getTokenInfo = async (chain: number, token: string) => {
  const contract = new ethers.Contract(token, erc20, getProvider(chain));
  let name = await contract.name();
  let symbol = await contract.symbol();
  let decimals = await contract.decimals();

  return {
    name,
    symbol,
    decimals,
  };
};

export default getTokenInfo;
