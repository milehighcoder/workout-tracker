const Workout = require("../models/workoutModel");

module.exports = (app) => {
  // Gets the Last Workout
  app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then((data) => res.json(data))
      .catch((err) => {
        console.log("error", err);
        res.json(err);
      });
  });

  // Add an Exercise
  app.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
      req.params.id,
      { $push: { exercise: req.body } },
      { new: true, runValidators: true }
    )
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log("error", err);
        res.json(err);
      });
  });

  // Creates a Workout
  app.post("/api/workouts", function (req, res) {
    Workout.create({})
      .then((data) => res.json(data))
      .catch((err) => {
        console.log("error", err);
        res.json(err);
      });
  });

  // Find Workouts
  app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .limit(10)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // Delete workout
  app.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id)
      .then(() => {
        res.json(true);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
