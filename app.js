const express = require("express");
// const mongoose = require("mongoose");
const { engine } = require('express-handlebars')
const path = require('path')
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const port = 3000


// const navinfoRouter = require("./routes/navinfo");
const indexRouter = require('./routes/index')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.engine('hbs', engine({
  layoutsDir: path.join(__dirname, 'views/layouts'),
  defaultLayout: 'layout',
  extname: 'hbs',
  partialsDir: [
    path.join(__dirname, 'views/partials')
  ],
  runtimeOptions: {
    allowProtoMethodsByDefault: true,
    allowProtoPropertiesByDefault: true
  }
}))

app.use(express.static(path.join(__dirname, 'public')));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/', indexRouter)

app.listen(port, () => {
  console.log(`Express working on ${port} port`);
})

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;