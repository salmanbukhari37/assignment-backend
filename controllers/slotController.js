const slotSchema = require("../models/slotModel");
const assignSlotSchema = require("../models/assignedSlotModel");

const AddSlot = (req, res) => {
  let request = req.body;

  addSlot = new slotSchema(request.slot);

  addSlot.save((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

const AssignSlot = (req, res) => {
  let request = req.body;

  addAssignSlot = new assignSlotSchema(request.assignSlot);

  addAssignSlot.save((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = {
  AddSlot,
  AssignSlot
};
