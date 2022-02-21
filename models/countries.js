import { query } from "../db/connection.js";

export async function getAllCountries() {
  const result = query(`SELECT * FROM countries;`);
  return result.rows;
}
