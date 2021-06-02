/*
 * @Descripttion: 
 * @version: 
 * @Author: OpenLcuk
 * @Date: 2021-06-02 09:27:34
 * @LastEditors: OpenLcuk
 * @LastEditTime: 2021-06-02 10:40:38
 */
let http = require('http');
let https = require('https');
let fs = require('fs')
let cheerio = require("cheerio")
let url = "https://36kr.com/newsflashes"

var strHtml = "";
var results = [];
https.get(url, function (res) {
  res.on("data", function (chunk) {
    strHtml += chunk;
  })
  res.on("end", function () {
    console.log(strHtml);
  });
})