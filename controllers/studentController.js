const StudentSchema = require("../models/studentModel");

const GetStudent = (req, res) => {
  StudentSchema.find((err, result) => {
    res.send(result);
  });
};

const AddStudent = (req, res) => {
  var request = req.body;

  addStudent = new StudentSchema(request.student);

  addStudent.save((err, result) => {
    if (err) {
      res.status(500).json({
        message: "Some Technical error"
      });
    } else {
      res.status(200).json({
        message: "Student saved successfully",
        data: result
      });
    }
  });
};

module.exports = {
  GetStudent,
  AddStudent
};
