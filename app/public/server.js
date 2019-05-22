const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;




app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/home", function(req, res) {
    // res.send("Welcome to Hot Restaurant home page")
    res.sendFile(path.join(__dirname, "./home.html"));
  });
  
  app.get("/reservations", function(req, res) {
    // res.send("Welcome to Hot Restaurant make reservations page")
    res.sendFile(path.join(__dirname, "./makereservations.html"));
  });

  app.get("/viewtables", function(req, res) {
    // res.send("Welcome to Hot Restaurant view tables page")
    res.sendFile(path.join(__dirname, "./viewtables.html"));
  });









app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });