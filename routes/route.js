var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");

// Sign up - Create User
router.post("/user", userController.CreateUser);

module.exports = {
  router: router
};
