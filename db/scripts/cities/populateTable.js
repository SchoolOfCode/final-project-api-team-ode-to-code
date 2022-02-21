import query from "../../connection.js";
import { citiesData } from "../../../lib/cities.js";

async function populateCitiesTable() {
  for (let i = 0; i < citiesData.length; i++) {
    const city_name = citiesData[i].city_name;
    const country = citiesData[i].country;
    const continent = citiesData[i].continent;
    const rating = citiesData[i].rating;
    const image = citiesData[i].image;
    const city_description = citiesData[i].city_description;
    const city_attractions = citiesData[i].city_attractions;
    const great_for = citiesData[i].great_for;
    const tags = citiesData[i].tags;
    const res = await query(
      `INSERT INTO cities (city_name, country, continent, rating, image, city_description, city_attractions, great_for, tags) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
      [city_name, country, continent, rating, image, city_description, city_attractions, great_for, tags]
    );
   }
}

populateCitiesTable();