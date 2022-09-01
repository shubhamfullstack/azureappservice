const { Request, Connection } = require("tedious");
const { config } = require("../config/database.config");

function getData(connection,req,res){
    const sql = `SELECT * FROM [dbo].[posts]`
    const request = new Request(sql,(err,rowCount)=>{
        if(err){
            res.send('error occured!');
            throw err; 
        }
    })

    request.on("row", columns => {
        let cols = [];
        columns.forEach(column => {
          let key = column.metadata.colName;
          cols.push({[key]:column.value})
        });
        res.json(cols)
    });

    connection.execSql(request);
}

function getUserDetails(req,res){
    const connection = new Connection(config);
    connection.connect((err) => {
        if (err) {
          res.send(config,err);
          throw err;
        }
      
        getData(connection,req,res);
      });
}

module.exports = {
    getUserDetails
}