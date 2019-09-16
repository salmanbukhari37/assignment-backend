const UserSchema = require("../models/userModel");

const CreateUser = (req, res) => {
  let request = req.body.userData;

  let userSchema = new UserSchema(request);

  userSchema.save((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).json(result);
    }
  });
};

module.exports = {
  CreateUser
};
