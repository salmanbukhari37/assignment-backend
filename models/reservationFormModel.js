var mongoose = require("mongoose");

const reservationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true,
      index: {
        unique: true
      }
    },
    room_type: {
      type: String,
      require: false
    },
    arrival_date: {
      type: Date,
      require: false
    },
    departure_date: {
      type: Date,
      require: true
    },
    number_of_guest: {
      type: Number,
      require: false
    },
    free_pickup: {
      type: String,
      require: false
    },
    flight_number: {
      type: String,
      require: false
    },
    special_request: {
      type: String,
      require: false
    }
  },
  {
    timestamps: true
  }
);

// ContactFormModel - should be any name you want
module.exports = mongoose.model("ReservationFormModel", reservationSchema);
