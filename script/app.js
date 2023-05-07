const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const https = require("https");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/recipeWebDB");

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
    res.redirect("/" + req.body.submitBtn);
  });

app
  .route("/register")
  .get((req, res) => {
    res.render("register");
  })
  .post((req, res) => {
    console.log(req.body.email);
    console.log(req.body.password);
  });

app
  .route("/login")
  .get((req, res) => {
    res.render("login");
  })
  .post((req, res) => {
    console.log(req.body.email);
    console.log(req.body.password);
  });

app
  .route("/recipe")
  .get((req, res) => {
    res.render("recipeListing");
  })
  .post((req, res) => {
    if (req.body.viewRecipe) {
      res.redirect("/recipe/" + req.body.viewRecipe);
    }
  });

app.route("/recipe/:recipeID").get((req, res) => {
  res.render("recipe");
});

app.route("/post").get((req, res) => {
  res.render("post");
}).post((req, res) => {
  console.log(req.body);
})

app.route("/ingredients").post((req, res) => {
  const {inregredients} = req.body;
  console.log(inregredients);

  res.sendStatus(200);
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
