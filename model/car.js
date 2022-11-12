const mongoose = require("mongoose");

const carSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isElectric: {
      type: Boolean,
      required: true,
    },
    modelYear: {
      type: Number,
      required: true,
    },
    seater: {
      type: Number,
      required: true,
    },
  },
  {
    timestramps: true,
  }
);

const carModel = mongoose.model("car", carSchema);

module.exports = carModel;
