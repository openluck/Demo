/*
 * @Descripttion: 
 * @version: 
 * @Author: OpenLcuk
 * @Date: 2021-05-31 10:37:08
 * @LastEditors: OpenLcuk
 * @LastEditTime: 2021-05-31 10:51:53
 */
var http = require("http");        //网络请求
var https = require('https');       //网络请求
var fs = require("fs");            //操作文件，读写文件
var cheerio = require("cheerio");  //扩展模块
const wz = "https://danjuanapp.com/";

var strHtml = "";
var results = [];
https.get(wz, function (res) {
  res.on("data", function (chunk) {
    strHtml += chunk;
  })
  res.on("end", function () {
    // console.log(strHtml);
    var $ = cheerio.load(strHtml);
    $("#navi span").each((iten, i) => {
      console.log(1);
      // console.log(i);
      // console.log($(i).text());
    })
  });
})

// var https = require('https');

// https.get('https://encrypted.google.com/', function (res) {
//   console.log("statusCode: ", res.statusCode);
//   console.log("headers: ", res.headers);

//   res.on('data', function (d) {
//     // process.stdout.write(d);
//     console.log();
//   });

// }).on('error', function (e) {
//   console.error(e);
// });