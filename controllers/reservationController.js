const ReservationModel = require("../models/reservationFormModel");

const getReservationData = (req, res) => {
  ReservationModel.find((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

const saveReservation = (req, res) => {
  var request = req.body;
  // var description = req.body.description;

  let reservationObj = new ReservationModel();
  reservationObj.name = request.name;
  reservationObj.email = request.email;
  reservationObj.room_type = request.room_type;
  reservationObj.arrival_date = request.arrival_date;
  reservationObj.departure_date = request.departure_date;
  reservationObj.number_of_guest = request.number_of_guest;
  reservationObj.free_pickup = request.free_pickup;
  reservationObj.flight_number = request.flight_number;
  reservationObj.special_request = request.special_request;

  reservationObj.save((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).json({
        message: "Reservation saved successfully",
        result
      });
    }
  });
};

const getReservationById = (req, res) => {
  var request = req.body;

  const id = request.id;
  ReservationModel.findById(id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

const updateReservationDataById = (req, res) => {
  var request = req.body;

  id = request.id;

  ReservationModel.findByIdAndUpdate(
    id,
    req.body.updateData,
    { new: true },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).json({
          message: "Record updated successfully",
          result
        });
      }
    }
  );
};

const deleteReservationData = (req, res) => {
  var request = req.body;

  const id = request.id;

  ReservationModel.findByIdAndRemove(id, (err, result) => {
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
module.exports = {
  getReservationData,
  getReservationById,
  saveReservation,
  updateReservationDataById,
  deleteReservationData
};
