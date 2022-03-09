import e from "express";
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
  const data = await query(`INSERT INTO cities (city_name, country, continent, rating, image, image2, city_description, city_attractions, great_for, tags,budget,holiday_type) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *`,[newCity.city_name, newCity.country, newCity.continent, newCity.rating, newCity.image, newCity.image2, newCity.city_description, newCity.city_attractions, newCity.great_for, newCity.tags,newCity.budget,newCity.holiday_type]);
  return data.rows;
}


//updates entire row of particular city

export async function updateCity(cityData, cityName) {
  const data = await query(`UPDATE cities SET (city_name, country, continent, rating, image, image2, city_description, city_attractions, great_for, tags,budget, holiday_type) = ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) WHERE city_name=$13 RETURNING *`,[cityData.city_name, cityData.country, cityData.continent, cityData.rating, cityData.image, cityData.image2, cityData.city_description, cityData.city_attractions, cityData.great_for, cityData.tags,cityData.budget,cityData.holiday_type, cityName]);
  return data.rows;
}

// patch request needs to contain {"column":"", "data":""} to specify which column in the database to update

// used regex data validation to make sure column name is letters/underscore only and prevent any SQL injection

export async function patchCity(cityData, cityName) {
  const regex = /^[a-zA-Z_0-9]+$/
  if (regex.test(cityData.column)) {
    const data = await query(`UPDATE cities SET ${cityData.column} = $1 WHERE city_name=$2 RETURNING *`,[cityData.data, cityName]);
    return data.rows
}
else {
  throw e;
};
}

export async function deleteCityByName( cityName) {
  const data = await query(`DELETE FROM cities WHERE city_name=$1 RETURNING *`,[cityName]);
  return data.rows;
}