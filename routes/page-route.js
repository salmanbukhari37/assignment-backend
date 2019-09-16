var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");
const contactController = require("../controllers/contactController");

router.get("/contact-form", contactController.getContactForm);
router.get("/", userController.test);

module.exports = {
  pageRouter: router
};
