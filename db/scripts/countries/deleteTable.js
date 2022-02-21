import query from "../../connection.js";

const deleteTableString = "DELETE FROM countries";

async function deleteTable() {
  const res = await query(deleteTableString);
}

deleteTable();