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


//updates entire row of particular city

export async function updateCity(cityData, cityName) {
  const data = await query(`UPDATE cities SET (city_name, country, continent, rating, image, city_description, city_attractions, great_for, tags) = ($1,$2,$3,$4,$5,$6,$7,$8,$9) WHERE city_name=$10 RETURNING *`,[cityData.city_name, cityData.country, cityData.continent, cityData.rating, cityData.image, cityData.city_description, cityData.city_attractions, cityData.great_for, cityData.tags, cityName]);
  return data.rows;
}

// patch request needs to contain {"column":"", "data":""} to specify which column in the database to update

export async function patchCity(cityData, cityName) {
  const data = await query(`UPDATE cities SET ${cityData.column} = $1 WHERE city_name=$3 RETURNING *`,[cityData.column, cityData.data, cityName]);
  return data.rows;
}

