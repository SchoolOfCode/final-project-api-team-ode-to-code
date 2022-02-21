import query from "../../connection.js";

const createTableString = "CREATE TABLE IF NOT EXISTS countries (id SERIAL PRIMARY KEY, country TEXT, continent TEXT, image TEXT, country_description TEXT, cities TEXT [])";

async function createCountriesTable() {
  const res = await query(createTableString);
}

createCountriesTable();