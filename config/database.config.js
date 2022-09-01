const config = {
  server: 'mentonestdbserver.database.windows.net',
  authentication: {
    type: 'default',
    options: {
      userName: process.env.SQL_SERVER_USER,
      password: process.env.SQL_SERVER_PASSWORD
    }
  },
  options: {
    database:'mentonestdatbase',
    port: 1433
  }
};


module.exports = {
    config
}



// function createTable() {
//   const sql = `CREATE TABLE ${table} (c1 int UNIQUE) `;
//   const request = new Request(sql, (err, rowCount) => {
//     if (err) {
//       console.log('error occured!');
//       throw err;
//     }

//     console.log(`'${table}' created!`);

//     createTransaction();
//   });

//   connection.execSql(request);
// }

// // Setting up SQL Command
// //--------------------------------------------------------------------------------
// function createTransaction() {
//     const sql = `INSERT INTO ${table} VALUES ('1')`;
  
//     const request = new Request(sql, (err, rowCount) => {
//       if (err) {
//         console.log('Insert failed');
//         throw err;
//       }
  
//       console.log('new Request cb');
  
//       // Call connection.beginTransaction() method in this 'new Request' call back function
//       beginTransaction();
//     });
  
//     connection.execSql(request);
//   }
  
//   // SQL: Begin Transaction
//   //--------------------------------------------------------------------------------
//   function beginTransaction() {
//     connection.beginTransaction((err) => {
//       if (err) {
//         // If error in begin transaction, roll back!
//         rollbackTransaction(err);
//       } else {
//         console.log('beginTransaction() done');
//         // If no error, commit transaction!
//         commitTransaction();
//       }
//     });
//   }
  
//   // SQL: Commit Transaction (if no errors)
//   //--------------------------------------------------------------------------------
//   function commitTransaction() {
//     connection.commitTransaction((err) => {
//       if (err) {
//         console.log('commit transaction err: ', err);
//       }
//       console.log('commitTransaction() done!');
//       console.log('DONE!');
//       connection.close();
//     });
//   }
  
//   // SQL: Rolling Back Transaction - due to errors during transaction process.
//   //--------------------------------------------------------------------------------
//   function rollbackTransaction(err) {
//     console.log('transaction err: ', err);
//     connection.rollbackTransaction((err) => {
//       if (err) {
//         console.log('transaction rollback error: ', err);
//       }
//     });
//     connection.close();
//   }