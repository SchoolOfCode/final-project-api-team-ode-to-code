import e from 'express';
import query from '../db/connection.js';

export async function getAllCountries() {
  const result = await query(`SELECT * FROM countries;`);
  return result.rows;
}

export async function getCountryName(name) {
  const result = await query(
    `SELECT * FROM countries WHERE country ILIKE '%' || $1 || '%';`,
    [name]
  );
  return result.rows;
}

export async function addCountry(newCountry) {
  const data = await query(
    `INSERT INTO countries (country, continent, image, image2, country_description, cities) VALUES($1,$2,$3,$4,$5,$6) RETURNING *`,
    [
      newCountry.country,
      newCountry.continent,
      newCountry.image,
      newCountry.image2,
      newCountry.country_description,
      newCountry.cities,
    ]
  );
  return data.rows;
}


//updates entire row of particular country

export async function updateCountry(countryData, countryName) {
  const data = await query(`UPDATE countries SET (country, continent, image, image2, country_description, cities) = ($1,$2,$3,$4,$5,$6) WHERE country=$7 RETURNING *`,[countryData.country, countryData.continent,countryData.image, countryData.image2, countryData.country_description,countryData.cities,countryName]);
  return data.rows;
}

// patch request needs to contain {"column":"", "data":""} to specify which column in the database to update

// used regex data validation to make sure column name is letters/underscore only and prevent any SQL injection

export async function patchCountry(countryData, countryName) {
  const regex = /^[a-zA-Z_0-9]+$/
  if (regex.test(countryData.column)){
  const data = await query(`UPDATE countries SET ${countryData.column} = $1 WHERE country=$2 RETURNING *`,[countryData.data, countryName]);
  return data.rows;}
  else {
    throw e;
  }
}

export async function deleteCountryByName( countryName) {
  const data = await query(`DELETE FROM countries WHERE country=$1 RETURNING *`,[countryName]);
  return data.rows;
}