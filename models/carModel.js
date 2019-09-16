var mongoose = require("mongoose");

const CarSchema = mongoose.Schema(
  {
    CarBrand: {
      type: String,
      require: true
    },
    CarModel: {
      type: String,
      require: true
    },
    Color: {
      type: String,
      require: false
    },
    EngineSize: {
      type: Number,
      require: false
    },
    ProductionYear: {
      type: Number,
      require: false
    },
    RegistrationNumber: {
      type: Number,
      require: false
    },
    Mileage: {
      type: Number,
      require: false
    },
    FuelType: {
      type: String,
      require: true
    },
    BodyType: {
      type: String,
      require: false
    }
  },
  {
    timestamps: true
  }
);

// ContactFormModel - should be any name you want
module.exports = mongoose.model("CarSchema", CarSchema);
