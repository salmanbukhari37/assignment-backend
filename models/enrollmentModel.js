let mongoose = require("mongoose");

const enrollmentSchema = mongoose.Schema({
  StudentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "StudentSchema"
  },
  CourseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CourseSchema"
  }
});
enrollmentSchema.index({ StudentId: 1, CourseId: 1 }, { unique: true });

module.exports = mongoose.model("EnrollmentSchema", enrollmentSchema);
