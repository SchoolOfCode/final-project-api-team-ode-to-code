import  query  from "../db/connection.js";

export async function getAllCities() {
  const result = await query(`SELECT * FROM cities;`);
  return result.rows;
}
export async function getCityName(name) {
  const result = await query(`SELECT * FROM cities WHERE city_name ILIKE '%' || $1 || '%';`,[name]);
  return result.rows;
}

export async function addCity(newCity) {
  const data = await query(`INSERT INTO cities (city_name, country, continent, rating, image, city_description, city_attractions, great_for, tags) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)`,[newCity.city_name, newCity.country, newCity.continent, newCity.rating, newCity.image, newCity.city_description, newCity.city_attractions, newCity.great_for, newCity.tags]);
  return data.rows;
}
