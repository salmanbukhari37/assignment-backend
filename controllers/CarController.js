const carSchema = require("../models/carModel");

const CreateCar = (req, res) => {
  let request = req.body.carData;

  let CarSchema = new carSchema(request);

  CarSchema.save((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).json(result);
    }
  });
};

const UpdateCar = (req, res) => {
  var request = req.body;

  id = request.id;

  carSchema.findByIdAndUpdate(
    id,
    request.carData,
    { new: true },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        console.log(result);

        res.status(200).json({
          message: "Record updated successfully",
          result
        });
      }
    }
  );
};

const DeleteCar = (req, res) => {
  var request = req.body;

  const id = request.id;

  carSchema.findByIdAndRemove(id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).json({
        message: "Record deleted successfully",
        result
      });
    }
  });
};

const GetAllCars = (req, res) => {
  carSchema.find((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

const GetCarById = (req, res) => {
  carSchema.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = {
  CreateCar,
  UpdateCar,
  DeleteCar,
  GetAllCars,
  GetCarById
};
