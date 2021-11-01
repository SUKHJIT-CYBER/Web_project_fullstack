const express = require("express");
const { ListAllUsers } = require("../../helpers/Users");
// Create a Router App.
const app = express.Router();

// All users without password!
const AllUsers = () => {
  const AllUsersObject = ListAllUsers();
  const AllUsersArray = Object.keys(AllUsersObject).map(Username => {
    const CurUser = {
      Username,
      ...AllUsersObject[Username]
    };
    delete CurUser.Password;
    if (CurUser.VerifyHash) {
      CurUser.VerifyHash = true;
    }
    return CurUser;
  });
  return AllUsersArray;
};




// Export the Router.
module.exports = app;
