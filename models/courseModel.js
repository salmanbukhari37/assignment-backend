let mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  CourseCode: {
    type: String,
    lowercase: true
  },
  CourseName: {
    type: String
  }
});

module.exports = mongoose.model("CourseSchema", courseSchema);
