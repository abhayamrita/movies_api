/*
 File Name: user.js
 Description: This model us used for fetching,adding,updating,deleting the user data in the user collections
 Author: Abhay
*/

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  userid:{
    type: String,
    required: true
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  email: {
    type: String
  },
  contact_no: {
    type: String
  },
  createdAt: {
      type: String
  }
});

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);
