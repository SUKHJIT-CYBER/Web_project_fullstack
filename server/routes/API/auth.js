//import exp library
const express = require("express");

//cretae a route app
const app = express.Router();

//endpont to verigy user
app.get("/verify/:Username", (req, res) => {
  const Username = req.params.Username;
  const Code = req.query.Code;
  switch (VerifyUser(Username, Code)) {
    case -1:
      res.status(404).json({
        Error: "User not found."
      });
      break;
    case 0:
      res.status(400).json({
        Error: "Invalid code or user has already been verified."
      });
      break;
    case 1:
      res.json({
        Message: "User successfully verified."
      });
      break;
  }
});


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
