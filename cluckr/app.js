var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// require('bootstrap');
const indexRouter = require('./routes/index');
// const welcomeRouter = require('./routes/welcome');
const cluckRouter = require('./routes/cluck');
//var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/', indexRouter);

app.use('/new_cluck',cluckRouter);
//app.use('/users', usersRouter);
//  username into cookies
app.use((req, res, next) => {
  const username = req.cookies.username;

  console.log('cookies: ', req.cookies);
  
  res.locals.username = "";
  if (username) {
    // response locals are available in all templates
    res.locals.username = username;
    console.log(`users username is ${username}`);
  }
  
  next();
});


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
const PORT = 4555;
const DOMAIN = 'localhost';
app.listen(PORT, DOMAIN, () => {
    console.log(`Express listening on http://${DOMAIN}:${PORT}`);
});