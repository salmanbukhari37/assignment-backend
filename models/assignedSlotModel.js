var mongoose = require("mongoose");
// var Schema = mongoose.Schema;

const assignedSlotSchema = mongoose.Schema(
  {
    SlotId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SlotSchema",
      require: true
    },
    UserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserSchema",
      require: true
    },
    AssginedTime: {
      type: Date,
      require: true
    }
  },
  {
    timestamps: true
  }
);

assignedSlotSchema.index(
  { SlotId: 1, UserId: 1, AssginedTime: 1 },
  { unique: true }
);

module.exports = mongoose.model("AssignedSlotSchema", assignedSlotSchema);
