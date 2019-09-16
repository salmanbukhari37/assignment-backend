var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");
var userRoute = require("./routes/route");
var restrictedRoute = require("./routes/restricted-route");
require("./dbConfig/config");
const jwt = require("jsonwebtoken");

const UserSchema = require("./models/userModel");

const PORT = 5000;

var app = express();

app.use(cors());

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/login", (req, res) => {
  let request = req.body,
    username = request.loginCredentials.username,
    password = request.loginCredentials.password;

  UserSchema.findOne({ Username: username }, (err, result) => {
    if (!result) {
      res.json({
        msg: "Username/Password is not correct"
      });
    } else {
      result.comparePassword(password, (err, isMatch) => {
        if (isMatch) {
          jwt.sign(
            { result },
            "secretKey",
            { expiresIn: "30000s" },
            (err, token) => {
              if (err) {
                err.status(403).send(err);
              } else {
                res.status(200).json({
                  result,
                  token
                });
              }
            }
          );
        } else {
          res.json({
            msg: "Username/Password is not correct",
            isMatch: isMatch
          });
        }
      });
    }
  });
});

// // api routes
app.use("/", userRoute.router);
app.use("/api", restrictedRoute.router);

app.listen(process.env.PORT || PORT, () => {
  console.log(`listening on port ${PORT}`);
});

// verify token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];

  // check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // split at the space
    const bearer = bearerHeader.split(" ");

    // Get token from Array
    const bearerToken = bearer[1];

    // set the token
    req.token = bearerToken;

    // next middleware
    jwt.verify(req.token, "secretKey", (err, authData) => {
      if (err) {
        res.status(403).send(err);
      } else {
        req.authData = authData;
        next();
      }
    });
  } else {
    res.status(403).send("Forbidden");
  }
}
