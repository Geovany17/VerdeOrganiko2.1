const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const axios = require("axios");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

//Connet to mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/verdeorganiko",
  {
    useNewUrlParser: true,
  }
);


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on http://localhost:${PORT}`);
});
