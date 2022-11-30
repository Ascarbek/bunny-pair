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
  }

  await loadRouters();
  await loadTokens();

  process.exit(0);
})();
