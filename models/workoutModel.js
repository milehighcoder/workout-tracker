const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: Date.now,
  exercises: [
    {
      type: String,
      name: String,

      weight: {
        type: Number,
        trim: true,
      },

      sets: {
        type: Number,
        trim: true,
      },

      reps: {
        type: Number,
        trim: true,
      },

      distance: {
        type: Number,
        trim: true,
      },

      duration: {
        type: Number,
        unique: true,
        required: "Please enter the duration.",
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
