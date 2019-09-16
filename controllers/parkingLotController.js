const UserSchema = require("../models/userModel");
const SlotSchema = require("../models/slotModel");

const GetLogin = (req, res) => {
  res.send("Welcome to login form");
};

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
    // if (res.status(200) && result != "") {
    //   // SlotSchemaData = new SlotSchema();
    //   // SlotSchemaData.UserId = result._id;
    //   // SlotSchemaData.SlotAssigned = "1";
    //   // SlotSchemaData.save((err, result) => {
    //   //   if (err) {
    //   //     res.send(err);
    //   //   } else {
    //   //     res.status(200).send("data saved");
    //   //   }
    //   // });
    //   // res.json({
    //   //   msg: "You've logged in successfully."
    //   // });
    // } else {
    //   res.json({
    //     msg: "Please check username/password"
    //   });
    // }

    // res.status(200).json({ code: 200, result: result });
  });
};

const Logout = (req, res) => {
  let request = req.body,
    email = request.email,
    password = request.password;

  UserSchema.find({ Email: email, Password: password }, (err, result) => {
    if (res.status(200) && result != "") {
      SlotSchemaData = new SlotSchema();

      //   console.log(result[0]._id);

      //   console.log(SlotSchemaData);
      //   return false;

      SlotSchemaData.UserId = result[0]._id;
      SlotSchemaData.SlotAssigned = "0";
      SlotSchemaData.LogoutTime = Date.now();

      SlotSchemaData.save((err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.status(200).send("data saved");
        }
      });

      //   res.json({
      //     msg: "You've logged out successfully."
      //   });
    } else {
      res.json({
        msg: "Please check username/password"
      });
    }
  });
};

const CreateUser = (req, res) => {
  let request = req.body;

  let userSchema = new UserSchema();

  userSchema.FirstName = request.first_name;
  userSchema.LastName = request.last_name;
  userSchema.Email = request.email;
  userSchema.Password = request.password;
  userSchema.PhoneNo = request.phone_no;

  userSchema.save((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).json(result);
    }
  });
};

const GetUser = (req, res) => {
  UserSchema.find((err, result) => {
    res.json(result);
  });
};

module.exports = {
  GetLogin,
  Login,
  Logout,
  CreateUser,
  GetUser
};
