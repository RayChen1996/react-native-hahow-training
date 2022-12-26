import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
 
const tableName = 'readerData';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({ name: 'soca-remote.db', location: 'default' });
};

export const createReaderTable = async (db) => {
  var db = openDatabase({ name: 'soca_remote.db' });
  db.transaction(function (txn) {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS reader(
         id INTEGER PRIMARY KEY AUTOINCREMENT, 
         no INTEGER,
         name VARCHAR(20), 
         port INT(255), 
         ip_address VARCHAR(255))
      `,
      []
    );
  });
  // enablePromise(true);
  // // create table if not exists
  // const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
  //       id TEXT NOT NULL,
  //       rno INTEGER ,
  //       name TEXT NOT NULL,
  //       type INTEGER NOT NULL,
  //       tcp_ip TEXT ,
  //       tcp_port INTEGER,
  //       timeout INTEGER , 
  //       param TEXT ,
  //       packetNum INTEGER
  //   );`;

  // await db.executeSql(query);
};

export const getReaderItems = async (db) => {
  try {
    const todoItems = [];
    const results = await db.executeSql(`SELECT * FROM ${tableName}`);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index))
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const saveReaderItems = async (db, todoItems) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${tableName}(rowid, name ,rno, tcp_ip , tcp_port,timeout  ) values` +
    todoItems.map( i => 
      `(${i.id}, '${i.name}', '${i.no}', '${i.ip}', '${i.port}', '${i.timeout}')`
    ).join(',');

  return db.executeSql(insertQuery);
};

export const deleteReaderItem = async (db, id) => {
  const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
  await db.executeSql(deleteQuery);
};

export const deleteReaderTable = async (db) => {
  const query = `drop table ${tableName}`;

  await db.executeSql(query);
};