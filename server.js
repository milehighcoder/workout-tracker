const express = require("express");
const mongoose = require("mongoose");
// const logger = require("morgan");
// const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

// const db = require("./models");

// Express Connections
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Mongoose Connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workoutTracker",
  { useNewUrlParser: true }
);

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes.js")(app);

// Server Listener
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
