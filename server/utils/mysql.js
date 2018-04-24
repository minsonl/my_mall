const mysql = require('mysql');
const config = require('../config/config.js');

//var connectionPool = mysql.createPool({
//  'host' : config.database.host,
//  'port':config.database.port,
//  'user' : config.database.user,
//  'password' : config.database.password,
//  'database' : config.database.database
//});

//const pool = mysql.createPool({
//host     :  '127.0.0.1',
//user     :  'root',
//password :  '123456',
//database :  'my_mall'
//})

const pool = mysql.createPool({
host     :  'qdm17025567.my3w.com',
user     :  'qdm17025567',
password :  'minson520',
database :  'qdm17025567_db',
insecureAuth: true, 
})

let query = ( sql, values ) => {
  return new Promise(( resolve, reject ) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, result) => {
          if ( err ) {
            reject( err )
          } else {
            resolve( result )
          }
          connection.release()
        })
      }
    })
  })
}

module.exports = { query }