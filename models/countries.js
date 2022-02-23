import  query  from "../db/connection.js";

export async function getAllCountries() {
  const result = await query(`SELECT * FROM countries;`);
  return result.rows;
}

export async function getCountryName(name) {
  const result = await query(`SELECT * FROM countries WHERE country ILIKE '%' || $1 || '%';`,[name]);
  return result.rows;
}