import query from "../../connection.js";

const createTableString = "CREATE TABLE IF NOT EXISTS cities (id SERIAL PRIMARY KEY, city_name TEXT, country TEXT, continent TEXT, rating INT, image TEXT, city_description TEXT, city_attractions TEXT [], great_for TEXT [], tags TEXT [], budget TEXT, holiday_type TEXT)";

async function createCitiesTable() {
  const res = await query(createTableString);
}

createCitiesTable();