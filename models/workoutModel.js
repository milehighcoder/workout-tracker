const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: Date.now,
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter an exercise type.",
      },

      name: {
        type: String,
        trim: true,
        required: "Enter an exercise name.",
      },

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
        required: "Please enter the exercise duration.",
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
