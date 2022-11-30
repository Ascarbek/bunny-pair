import { ethers } from 'ethers';

const getProvider = (chain_id: number) =>
  new ethers.providers.JsonRpcProvider('https://bsc-dataseed1.binance.org', chain_id);

export default getProvider;
