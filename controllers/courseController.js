const CourseSchema = require("../models/courseModel");

const GetCourse = (req, res) => {
  CourseSchema.find((err, result) => {
    res.send(result);
  });
};

const AddCourse = (req, res) => {
  var request = req.body;

  newCourse = new CourseSchema(request.course);

  newCourse.save((err, result) => {
    if (err) {
      res.status(500).json({
        message: "Some Technical error"
      });
    } else {
      res.status(200).json({
        message: "Course saved successfully",
        data: result
      });
    }
  });
};

module.exports = {
  GetCourse,
  AddCourse
};
