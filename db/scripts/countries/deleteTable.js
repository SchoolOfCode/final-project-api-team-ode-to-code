import query from '../../connection.js';

const deleteTableString = 'DROP TABLE countries';

async function deleteTable() {
  const res = await query(deleteTableString);
}

deleteTable();
