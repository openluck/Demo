/*
 * @Descripttion: 
 * @version: 
 * @Author: OpenLcuk
 * @Date: 2021-06-02 11:04:42
 * @LastEditors: OpenLcuk
 * @LastEditTime: 2021-06-02 11:11:16
 */
const request = require('request')
const cheerio = require('cheerio')
const mysql = require('mysql')

function getNews(url) {
  var arr = [];
  var count = 0;
  return new Promise((resolve, reject) => {
    let $ = cheerio.load(body);
    console.log($);
  })
}

getNews('https://news.qq.com/').then((data => {
  console.log(data);
}))