//import exp library
const express = require("express");

//cretae a route app
const app = express.Router();


const users = {
    SUKHJIT: {
        Name: "Sukhjit singh",
        Password: "Sukhjit",
        personal: {
            Email: "sukhjit@gmail.com",
            Phone: "4864687764",
            Country: "India",

        },
        Type: "     Admin", // student , mentor , admin ,unverified , disabled
        Createdat: new Date(),
        Confirmed: true

    }
}

//export the root
module.exports = app;