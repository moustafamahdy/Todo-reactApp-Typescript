const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  type: String,
  color: String,
  quantity: Number,
});

module.exports = mongoose.model("Car", carSchema);
