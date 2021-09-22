//import exp library
const express = require("express");

//cretae a route app
const app = express.Router();


const auth = require("./API/auth");


// create a get request handler
app.get("/", (req, res) => {
    res.json('Welcome  to my Land  with API');
});

app.use("/auth ", auth);
//export the root
module.exports = app;