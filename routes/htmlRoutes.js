const path = require("path");

module.exports = function (app) {
  // Index Route
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

  // Exercise Route
  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  // Stats Route
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
