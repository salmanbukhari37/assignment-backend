const UserSchema = require("../models/userModel");

const Login = (req, res) => {
  let request = req.body,
    email = request.email,
    password = request.password;

  UserSchema.findOne({ Email: email }, (err, result) => {
    console.log(result);
    result.comparePassword(password, (err, isMatch) => {
      if (isMatch) {
        res.json({
          msg: "Logged in successfully",
          isMatch: isMatch
        });
      } else {
        res.json({
          msg: "Username/Password is not correct.",
          isMatch: isMatch
        });
      }
    });
  });
};

module.exports = {
  login
};
