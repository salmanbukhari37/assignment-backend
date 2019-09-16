var mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
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
    description: {
      type: String,
      require: false
    },
    address: {
      type: String,
      require: false
    }
  },
  {
    timestamps: true
  }
);

// ContactFormModel - should be any name you want
module.exports = mongoose.model("ContactFormModel", contactSchema);
