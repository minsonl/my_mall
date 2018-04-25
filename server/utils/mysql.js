const mysql = require('mysql');
const config = require('../config/config.js');
const connectionPool = mysql.createPool({
    'host' : config.database.host,
    'port':config.database.port,
    'user' : config.database.user,
    'password' : config.database.password,
    'database' : config.database.database,
	'insecureAuth': true, 
});

let query = ( sql, values ) => {
  return new Promise(( resolve, reject ) => {
    connectionPool.getConnection((err, connection) => {
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