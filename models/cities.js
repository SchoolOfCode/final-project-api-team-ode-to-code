import  query  from "../db/connection.js";

export async function getAllCities() {
  const result = await query(`SELECT * FROM cities;`);
  return result.rows;
}