import db from './db';
import pairReserves from './helpers/getPairReserves';

(async () => {
  const rows = await db('token');

  // const all = await Promise.all(rows.map((row) => pairReserves(56, 'eth', row.address)));
  let all: any[] = [];

  for (let r = 0; r < rows.length; r++) {
    try {
      const res = await pairReserves(56, 'eth', rows[r].address);

      all = [...all, ...res];
    } catch (e) {
      console.log('skip: ', rows[r]);
    }
  }

  for (let a = 0; a < all.length; a++) {
    await db('reserve_supply').insert({
      chain_id: all[a].chain_id,
      router: all[a].router,
      factory: all[a].factory,
      token0: all[a].token0,
      token1: all[a].token1,
      token0wrapped: all[a].token0wrapped,
      token1wrapped: all[a].token1wrapped,
      decimals0: all[a].decimals0,
      decimals1: all[a].decimals1,
      reserve0: all[a].reserve0,
      reserve1: all[a].reserve1,
      supply: all[a].supply,
    });
  }
})();

/* await db('reserve_supply').insert({
      chain_id: chain_id,
      router: routerAddress.toLowerCase(),
      factory: factoryAddress.toLowerCase(),
      token0: inOrder ? token0.toLowerCase() : token1.toLowerCase(),
      token1: inOrder ? token1.toLowerCase() : token0.toLowerCase(),
      token0wrapped: pairToken0.toLowerCase(),
      token1wrapped: pairToken1.toLowerCase(),
      decimals0,
      decimals1,
      reserve0,
      reserve1,
      supply,
    })
    */
