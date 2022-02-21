import { query } from "../db/connection.js";

export async function getAllCities() {
  const result = query(`SELECT * FROM cities;`);
  return result.rows;
}