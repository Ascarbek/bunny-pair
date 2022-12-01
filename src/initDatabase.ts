import db from './db';
import dotenv from 'dotenv';
import loadRouters from './scripts/loadRouters';
import loadTokens from './scripts/loadTokens';

dotenv.config();

const up = process.env.DB_UP === 'true';
const down = process.env.DB_DOWN === 'true';

(async () => {
  if (down) {
    await db.schema.dropTableIfExists('router');
    await db.schema.dropTableIfExists('token');
    await db.schema.dropTableIfExists('reserve_supply');
  }

  if (up) {
    await db.schema.createTable('router', (tableBuilder) => {
      tableBuilder.increments('id');
      tableBuilder.integer('chain_id');
      tableBuilder.string('name', 200);
      tableBuilder.string('address', 100);
      tableBuilder.string('base', 100);
      tableBuilder.string('logo', 300);

      tableBuilder.unique(['chain_id', 'address'], 'router_i1');
      tableBuilder.index(['chain_id'], 'router_i2');
    });

    await db.schema.createTable('token', (tableBuilder) => {
      tableBuilder.increments('id');
      tableBuilder.integer('chain_id');
      tableBuilder.string('name', 200);
      tableBuilder.string('symbol', 100);
      tableBuilder.integer('decimals');
      tableBuilder.string('address', 100);
      tableBuilder.string('logo', 300);

      tableBuilder.unique(['chain_id', 'address'], 'token_i1');
      tableBuilder.index(['chain_id'], 'token_i2');
    });

    await db.schema.createTable('reserve_supply', (tableBuilder) => {
      tableBuilder.increments('id');

      tableBuilder.integer('chain_id');
      tableBuilder.string('router', 100);
      tableBuilder.string('factory', 100);
      tableBuilder.string('token0', 100);
      tableBuilder.string('token1', 100);
      tableBuilder.string('token0wrapped', 100);
      tableBuilder.string('token1wrapped', 100);
      tableBuilder.integer('decimals0');
      tableBuilder.integer('decimals1');
      tableBuilder.string('reserve0', 100);
      tableBuilder.string('reserve1', 100);
      tableBuilder.string('supply', 100);

      tableBuilder.index(['chain_id', 'token0', 'token1'], 'reserve_supply_i1');
      tableBuilder.index(['chain_id', 'token0wrapped', 'token1wrapped'], 'reserve_supply_i2');
    });
  }

  await loadRouters();
  await loadTokens();

  process.exit(0);
})();
