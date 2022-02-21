import query from "../../connection.js";

const deleteTableString = "DELETE FROM cities";

async function deleteTable() {
  const res = await query(deleteTableString);
}

deleteTable();