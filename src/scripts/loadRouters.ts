import db from '../db';
import { Routers } from '../handlers/Routers';

(async () => {
  let all: { chain_id: number; name: string; address: string; base: string; logo: string }[] = [];
  Object.keys(Routers).forEach((id) => {
    Routers[parseInt(id)].forEach((item) => {
      all.push({
        chain_id: parseInt(id),
        name: item.name,
        address: item.address,
        base: item.base,
        logo: item.logoURI || '',
      });
    });
  });

  for (const item of all) {
    try {
      await db('router').insert({
        ...item,
      });
    } catch (e) {
      // mute
    }
  }

  process.exit(0);
})();
