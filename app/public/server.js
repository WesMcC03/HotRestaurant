const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

// const server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//     var path = req.url;
//     switch (path) {
//         case "/thanks":
//           return renderThankYouPage(req, res);
//         default:
//           return renderWelcomePage(req, res);
//         }
// }

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/home.html", function(req, res) {
    // res.send("Welcome to Hot Restaurant home page")
    res.sendFile(path.join(__dirname, "./home.html"));
  });
  
app.get("/makesreservations.html", function(req, res) {
    // res.send("Welcome to Hot Restaurant make reservations page")
    res.sendFile(path.join(__dirname, "./makereservations.html"));
  });

app.get("/viewtables.html", function(req, res) {
    // res.send("Welcome to Hot Restaurant view tables page")
    res.sendFile(path.join(__dirname, "./viewtables.html"));
  });









app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });