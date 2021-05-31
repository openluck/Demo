/*
 * @Descripttion: 
 * @version: 
 * @Author: OpenLcuk
 * @Date: 2021-05-31 10:33:19
 * @LastEditors: OpenLcuk
 * @LastEditTime: 2021-05-31 10:35:49
 */
var http = require("http");
var https = require("https");
var fs = require("fs");
var cheerio = require("cheerio");
//保存网络图片
function saveImage(imageUrl) {
  http.get(imageUrl, function (res) {
    res.setEncoding('binary');      //二进制(binary)

    var imageData = '';
    res.on('data', function (data) {  //图片加载到内存变量
      imageData += data;
    }).on('end', function () {        //加载完毕保存图片
      if (!fs.existsSync("./images")) {
        fs.mkdirSync("./images");
      }
      fs.writeFile('images/' + Math.random() + '.png', imageData, 'binary', function (err) {  //以二进制格式保存
        if (err) throw err;
        console.log('保存成功');
      });
    });
  });
}