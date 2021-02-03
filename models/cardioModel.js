const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter the exercise name.",
  },

  distance: {
    type: Number,
    trim: true,
    required: "Please enter the distance.",
  },

  duration: {
    type: Number,
    unique: true,
    required: "Please enter the duration.",
  },
});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;
