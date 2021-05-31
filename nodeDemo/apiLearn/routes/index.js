/*
 * @Descripttion: 
 * @version: 
 * @Author: OpenLcuk
 * @Date: 2021-05-11 09:04:34
 * @LastEditors: OpenLcuk
 * @LastEditTime: 2021-05-11 09:57:12
 */
var express = require('express');
var router = express.Router();
var dbconfig = require('../util/dbconfig')

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  var sql = "select * from cate";
  var sqlArr = [];
  var callBack = (err, data) => {
    if (err) {
      console.log(err);
      console.log('连接出错了');
    } else {
      res.send(
        {
          'list': data
        }
      )
    }
  }
  dbconfig.sqlConnect(sql, sqlArr, callBack)

});

module.exports = router;
