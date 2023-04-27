const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const https = require("https");
const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/dbName");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app
  .route("/")
  .get((req, res) => {
    res.render("home");
  })
  .post((req, res) => {
    console.log(req.body.submitBtn);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
