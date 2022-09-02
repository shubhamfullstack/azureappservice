const config = {
  server: 'mentonestdbserver.database.windows.net',
  authentication: {
    type: 'default',
    options: {
      userName: 'mentonest',
      password: process.env.SQLCONNSTR_DB_PASSWORD
    }
  },
  options: {
    encrypt: true,
    trustServerCertificate:false,
    database:'mentonestdatbase',
    port: 1433
  }
};


module.exports = {
    config
}


