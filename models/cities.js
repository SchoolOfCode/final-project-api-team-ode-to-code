import  query  from "../db/connection.js";

export async function getAllCities() {
  const result = await query(`SELECT * FROM cities;`);
  return result.rows;
}
export async function getCityName(name) {
  const result = await query(`SELECT * FROM cities WHERE city_name ILIKE '%' || $1 || '%';`,[name]);
  return result.rows;
}