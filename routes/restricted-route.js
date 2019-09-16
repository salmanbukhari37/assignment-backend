var express = require("express");
var router = express.Router();
const CarController = require("../controllers/CarController");

// Sign up - Create User
router.get("/car/:id", CarController.GetCarById);
router.get("/car", CarController.GetAllCars);
router.post("/car", CarController.CreateCar);
router.put("/car", CarController.UpdateCar);
router.delete("/car", CarController.DeleteCar);

module.exports = {
  router: router
};
