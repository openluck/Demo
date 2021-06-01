/*
 * @Descripttion: 
 * @version: 
 * @Author: OpenLcuk
 * @Date: 2021-06-01 17:54:49
 * @LastEditors: OpenLcuk
 * @LastEditTime: 2021-06-01 18:12:52
 */
let https = require('https');
let url = 'https://movie.douban.com/top250'
https.get(url, function (res) {
  console.log(res);
  // 分段返回的 自己拼接
  // let html = '';
  // // 有数据产生的时候 拼接
  // res.on('data', function (chunk) {
  //   html += chunk;
  // })
  // // 拼接完成
  // res.on('end', function () {
  //   console.log(html);
  // })
})
