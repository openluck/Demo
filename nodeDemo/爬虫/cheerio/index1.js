/*
 * @Descripttion: 
 * @version: 
 * @Author: OpenLcuk
 * @Date: 2021-06-02 13:15:10
 * @LastEditors: OpenLcuk
 * @LastEditTime: 2021-06-02 13:29:03
 */
// cheerio 是 nodejs 的抓取页面模块，
// 为服务器特别定制的，快速、灵活、实施的 jQuery 核心实现。
// 适合各种 Web 爬虫程序。

let cheerio = require('cheerio');
let url ="https://sobooks.cc/"

$ = cheerio.load(url)
// let content = $('.title').text()
console.log($.html());