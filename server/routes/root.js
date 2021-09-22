//import exp library
const express = require("express");

//cretae a route app
const app = express.Router();


// create a get request handler
app.get("/", (req, res) => {
    res.json('Welcome  to my Land');
});

//export the root
module.exports = app;