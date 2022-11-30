import db from '../db';
import allTokens from './allTokens';

export default async () => {
  let all: { name: string; symbol: string; address: string; chain_id: number; decimals: number; logo: string }[] = [];

  allTokens.forEach((item) => {
    all.push({
      name: item.name,
      symbol: item.symbol,
      address: item.address.toLowerCase(),
      chain_id: item.chainId,
      decimals: item.decimals,
      logo: item.logoURI || '',
    });
  });

  for (const item of all) {
    try {
      await db('token').insert({
        ...item,
      });
    } catch (e) {
      // mute
    }
  }
};
