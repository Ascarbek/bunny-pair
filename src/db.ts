import knex from 'knex';
import connection from './datasource.json';

const instance = knex({
  client: 'pg',
  connection: {
    ...connection,
  },
});

export default instance;
