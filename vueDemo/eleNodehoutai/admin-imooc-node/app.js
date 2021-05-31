const express = require("express");

// 创建 express 应用
const app = express();

// 监听 / 路径的 get 请求
app.get("/", function (req, res) {
  res.send("hello node");
});

// 使 express 监听 5000 端口号发起的 http 请求
const server = app.listen(5000, function () {
  const { address, port } = server.address();
  console.log("Http Server is running on http://%s:%s", address, port);
});


// 中间件是一个回调函数，在请求和响应式周期中被顺序调用
// 浏览器中的地址栏都是get请求
// 中间件需要在响应结束前被调用