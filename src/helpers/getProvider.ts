import { ethers } from 'ethers';
import db from '../db';

const getProvider = async (chain_id: number) => {
  const row = await db('chain').where('chain_id', chain_id).first();

  return new ethers.providers.JsonRpcProvider(row.rpc.items[0], chain_id);
};

export default getProvider;
