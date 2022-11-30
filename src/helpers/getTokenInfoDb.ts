import db from '../db';
import type { IToken } from '../types/IToken';

const getTokenInfoDb: (chain: number, token: string) => Promise<IToken | null> = async (
  chain: number,
  token: string
) => {
  const rows = await db('token').where('chain_id', chain).andWhere('address', token);
  if (rows.length) {
    const row: any = rows[0];
    return {
      id: row.id,
      name: row.name,
      symbol: row.symbol,
      address: row.address,
      chain_id: row.chain_id,
      decimals: row.decimals,
      logo: row.logo,
    };
  } else {
    return null;
  }
};

export default getTokenInfoDb;
