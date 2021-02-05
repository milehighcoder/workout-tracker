const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
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
        },

        sets: {
          type: Number,
        },

        reps: {
          type: Number,
        },

        distance: {
          type: Number,
        },

        duration: {
          type: Number,
          required: "Enter an exercise duration.",
        },
      },
    ],
  },

  { toJSON: { virtuals: true } }
);

// Virtual adds total duration to workout
// Reduce simplifies the value into a round number
WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
