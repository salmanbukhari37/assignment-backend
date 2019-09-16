const enrollmentSchema = require("../models/enrollmentModel");

const GetEnrollment = (req, res) => {
  enrollmentSchema.find((err, result) => {
    res.send(result);
  });
};

const AddEnrollment = (req, res) => {
  var request = req.body;

  newEnrollment = new enrollmentSchema(request.enrollment);

  newEnrollment.save((err, result) => {
    if (err) {
      res.status(500).json({
        message: "Some Technical error"
      });
    } else {
      res.status(200).json({
        message: "Enrollment saved successfully",
        data: result
      });
    }
  });
};

module.exports = {
  GetEnrollment,
  AddEnrollment
};
