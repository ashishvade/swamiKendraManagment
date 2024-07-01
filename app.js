const createError = require('http-errors');
const express = require('express');
const cors = require("cors");
const path = require('path');
// const sha512 = require('js-sha512');
const cookieParser = require('cookie-parser');
const bodyParser= require('body-parser')
const logger = require('morgan');
require('dotenv').config();
const indexRouter = require('./routes/index');
const mongo = require("./config/mongo.utility");

const app = express();
mongo.connect();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));

app.use(cors({
  origin: [ 'http://43.205.140.194', 'http://localhost:3000' ],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],
  credentials: true,
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' } 
}));

app.use('/v1/', indexRouter);
app.use(function (req, res, next) {
  res.status(404).json({
    status: 404, message: "Not Found",
    route: req.originalUrl,
    description: "The requested URL was not found on the server"
  })
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
