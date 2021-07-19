// import express
const express = require('express');
// import pool
const pool = require('../util/pool.js');
// create route
const route = express.Router();
// addroute

route.post('/login', (req, res, next)=>{
  // trans req to obj
  let reqObj = req.body;
  let uname = reqObj.uname;
  let uwpd = reqObj.upwd;
  // execute sql
  let strSql = '';
  pool.query(strSql, [uname, upwd], (err, data)=>{
    if(err){
      next(err);
      return
    }
    if(0 == data.length){
      res.send({code:0,msg:'登录失败'});
    }else{
      res.send({code:1,msg:'登录成功'});
    }
  });
})