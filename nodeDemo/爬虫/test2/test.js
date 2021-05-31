/*
 * @Descripttion: 
 * @version: 
 * @Author: OpenLcuk
 * @Date: 2021-05-31 10:23:53
 * @LastEditors: OpenLcuk
 * @LastEditTime: 2021-05-31 10:40:19
 */
var http = require("http");        //网络请求
var fs = require("fs");            //操作文件，读写文件
var cheerio = require("cheerio");  //扩展模块

var http = require("http");

var fs = require("fs");

var cheerio = require("cheerio");

const wz = "http://news.baidu.com/";

var strHtml = "";
var results = [];
http.get(wz, function (res) {
  res.on("data", function (chunk) {
    strHtml += chunk;
  })
  res.on("end", function () {
    //console.log(strHtml);
    var $ = cheerio.load(strHtml);
    $("#channel-all li").each((iten, i) => {
      console.log($(i).text());
    })
  });
})