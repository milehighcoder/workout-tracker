const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter the exercise name.",
  },

  weight: {
    type: Number,
    trim: true,
    required: "Please enter the amount of weight.",
  },

  sets: {
    type: Number,
    trim: true,
    required: "Please enter the number of sets.",
  },

  reps: {
    type: Number,
    trim: true,
    required: "Please enter the number of reps.",
  },

  duration: {
    type: Number,
    unique: true,
    required: "Please enter the duration.",
  },
});

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;
