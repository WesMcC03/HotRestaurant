const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;




app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/home", function(req, res) {
    // res.send("Welcome to friend finder home")
    res.sendFile(path.join(__dirname, "app/public/home.html"));
  });
  
  app.get("/makereservations", function(req, res) {
    // res.send("Welcome to friend finder survey")
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
  });









app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });