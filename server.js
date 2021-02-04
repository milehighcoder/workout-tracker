const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const PORT = process.env.PORT || 3000;

// const db = require("./models");

const app = express();

// Express Connections
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Mongoose Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
});

// routes
// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes.js")(app);

// Server Listener
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
