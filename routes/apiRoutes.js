const Workout = require("../models/workoutModel");

module.exports = function (app) {
  // Gets and retrieves exercises in the Mongo database
  app.get("/api/workouts", function (req, res) {
    Workout.find({})
      .then((Workout) => {
        res.json(Workout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts", function ({ body, params }, res) {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercise: body } },
      { new: true }
    )
      .then((Workout) => {
        res.json(Workout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // Stores the exercises into the Mongo database
  app.post("/api/workouts", function (req, res) {
    Workout.create({})
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });
};
