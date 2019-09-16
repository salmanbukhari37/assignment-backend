var mongoose = require("mongoose");
// var Schema = mongoose.Schema;

const slotSchema = mongoose.Schema(
  {
    SlotName: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true
  }
);

slotSchema.index({ SlotName: 1 }, { unique: true });

module.exports = mongoose.model("SlotSchema", slotSchema);
