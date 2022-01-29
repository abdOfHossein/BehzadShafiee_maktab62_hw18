const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');


const dashboard = require('./routes/dashboard');
const loginPageRoute = require('./routes/loginRoute');
const registerRoute = require('./routes/registerRoute');

const port = process.env.PORT || 3000;
const app = express();
const dotenv=require('dotenv');
const config=dotenv.config();
if(config.error){
  return console.log(error);
};
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    key: "user_side",
    secret: "mySecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60000
    }
  })
);

console.log(process.env.USER_NAME);

//1:login> set session
//2:dashboard checksession
//3: logout clearsession
//4:clearcookie>if(!session)


app.use('/login', loginPageRoute);
app.use('/register', registerRoute);
app.use('/auth', dashboard);

// catch 404 and forward to error handler
app.use(function (req, res, next) {

  next(createError(404));

});




// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;


app.listen(port, () => {

  console.log(`server is running on port:${port}`);

})