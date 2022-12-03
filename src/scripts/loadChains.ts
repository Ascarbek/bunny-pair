import supportedChains from './supportedChains';
import chainList from './chainList';
import db from '../db';

export default async () => {
  for (let s = 0; s < supportedChains.length; s++) {
    const chain_id = supportedChains[s];
    const data = chainList[chain_id];
    const { name, shortName: short_name, rpc, stableCoins: stable_coins } = data;
    try {
      await db('chain').insert({
        chain_id,
        name,
        short_name,
        rpc: { items: rpc },
        stable_coins: { items: stable_coins },
      });
    } catch (e) {
      // mute
    }
  }
};
