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
    `INSERT INTO countries (country, continent, image, country_description, cities) VALUES($1,$2,$3,$4,$5)`,
    [
      newCountry.country,
      newCountry.continent,
      newCountry.image,
      newCountry.country_description,
      newCountry.cities,
    ]
  );
  return data.rows;
}
