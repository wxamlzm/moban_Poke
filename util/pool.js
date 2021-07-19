const mysql = require('mysql');
// create pool
const pool = mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  database:'poke',
  user: 'root',
  password: '',
  connectionLimit: 15
});
// export
module.exports = pool;