var createError = require('http-errors'); // 处理http404等页面访问不到
var express = require('express');
var path = require('path'); // nodejs中的path
var cookieParser = require('cookie-parser'); // 引入解析cookie
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
 
var app = express(); // app实例

// view engine setup // 这个是视图
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev')); // 使用日志
app.use(express.json()); //  
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // 进行注册
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); // 注册路由 进行拼接
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
