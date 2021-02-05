const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

// Express Connections
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Mongoose Connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workoutTracker",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// Routes
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// Server Listener
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
