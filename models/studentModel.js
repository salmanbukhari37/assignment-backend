let mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  StudentName: {
    type: String,
    lowercase: true
  },
  MobileNumber: {
    type: String
  }
});

module.exports = mongoose.model("StudentSchema", StudentSchema);
