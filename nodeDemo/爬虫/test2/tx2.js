/*
 * @Descripttion: 
 * @version: 
 * @Author: OpenLcuk
 * @Date: 2021-06-02 10:45:48
 * @LastEditors: OpenLcuk
 * @LastEditTime: 2021-06-02 11:05:37
 */
const request = require('request')
const cheerio = require('cheerio')
const mysql = require('mysql')
//导入库

const db = mysql.createPool({ host: 'localhost', user: 'root', password: '123456', database: 'tx2js' });
//数据库地址
function getNews(url) {
  var movieArr = []//定义数组接收数据对象
  var count = 0;
  // 定义存入数据库数据的条数
  return new Promise((resolve, reject) => {
    request(url, function (err, response, body) {
      let $ = cheerio.load(body);
      //解析
      var item = $('.item-main')
      //获取到结构下
      item.map(function (i, val) {
        let tmp = {};
        tmp.title = $(val).find('.newsflash-item').children('a').text();
        tmp.content = $(val).find('.item-desc').children('span').text();
        // console.log(tmp.title)
        movieArr.push(tmp)
        // 加入数组
        db.query(`insert into content(title,content) values('${tmp.title}','${tmp.content}')`, (err, data) => {
          if (err) {
            console.log('数据库错误')
          }
        })
        count++;
        console.log("已爬取" + count + "条记录");
      })

      //说明 数据获取完毕
      if (movieArr.length > 0) {
        resolve(movieArr)
      }
    })
  })
}

//获取事实展示的新闻
getNews('https://36kr.com/newsflashes')
  .then((data) => {
    console.log(data.length)
  })
