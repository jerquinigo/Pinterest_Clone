var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
let bodyParser = require("body-parser");
var logger = require("morgan");
const session = require("express-session");
const passport = require("passport");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
let photoRouter = require("./routes/photos.js");
let boardRouter = require("./routes/boards.js");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "./frontend_interest/build/")));
// app.use(express.static(path.join(__dirname, "../frontend_interest/build/")));
//
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "./frontend_interest/build/index.html"));
// });

app.use(
  session({
    secret: "aubrey",
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, "../frontend_interest/build")));
//the routes to use
app.use("/", indexRouter);
app.use("/api/users/", usersRouter);
app.use("/api/pins/", photoRouter);
app.use("/api/boards/", boardRouter);

//this needs to go below the routes
app.use("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../frontend_interest/build/index.html"));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
