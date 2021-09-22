//import exp library
const express = require("express");

//cretae a route app
const app = express.Router();

// import the route
const API = require("./api");

// create a get request handler
app.get("/", (req, res) => {
    res.json('Welcome  to my Land');
});


// api route handler
app.use("/api", API);

//export the root
module.exports = app;