import { createPool, QueryOptions } from "mariadb";

export const pool = createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as number | undefined,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 5,
});

export async function makeQuery(
  query: string | QueryOptions,
  values?: unknown
) {
  let conn;
  try {
    conn = await pool.getConnection();
    return conn.query(query, values);
  } catch (error) {
    throw error;
  } finally {
    if (conn) conn.end();
  }
}
