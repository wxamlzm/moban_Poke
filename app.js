// import express
const express = require('express');
// import pool
const pool = require('./util/pool')
// cerate web server and port
const app = express();
app.listen(8080, ()=>{
  console.log('linkstart!')
});

// add midware
app.use(express.urlencoded({
  extended:flse
}));