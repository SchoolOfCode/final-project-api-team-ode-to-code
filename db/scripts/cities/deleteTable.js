import query from '../../connection.js';

const deleteTableString = 'DROP TABLE cities';

async function deleteTable() {
  const res = await query(deleteTableString);
}

deleteTable();
