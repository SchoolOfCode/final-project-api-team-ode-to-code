import query from '../../connection.js';
import { countriesData } from '../../../lib/countries.js';

async function populateCountriesTable() {
  for (let i = 0; i < countriesData.length; i++) {
    const country = countriesData[i].country;
    const continent = countriesData[i].continent;
    const image = countriesData[i].image;
    const image2 = countriesData[i].image2;
    const country_description = countriesData[i].country_description;
    const cities = countriesData[i].cities;
    const res = await query(
      `INSERT INTO countries (country, continent, image, image2, country_description, cities) VALUES($1,$2,$3,$4,$5,$6)`,
      [country, continent, image, image2, country_description, cities]
    );
  }
}

populateCountriesTable();
