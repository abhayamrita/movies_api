/*
 File Name: user.js
 Description: This file is used for routing the all user action
 Author: Abhay
*/


const express = require("express");
const User = require('../models/user');
const router = express.Router();

/* Get All the user list using below API */
router.get("/userdetails/:userid", async(req, res) => {

    try{
      var user = req.params.userid
      const result = await User.find({});
      res.status(200).send({rows:result})

    } catch(e){
      res.status(503).send({message:"Error Fetching Data"})
    }

})

/* Add user using below api */
router.post("/postuser", async (req,res) => {

    try{
      const {userid,firstname,lastname,email,contact_no} = req.body
      const user = new User({
        userid,
        firstname,
        lastname,
        email,
        contact_no
      })
      await user.save()
      res.status(200).send({message:"User has been added successfully"})

    } catch(e){
      res.status(503).send({message: "Error in Inserting data"})
    }

  })

  /* Edit User using below api */
  router.post("/updateuser", async (req,res) => {

    try{
      const {userid} = req.body
      var userqry = { userid: userid };
      qry = {"firstname":req.body.firstname,"lastname":req.body.lastname,"email":req.body.email,"contact_no":req.body.contact_no}
      await User.updateOne(userqry, qry);
      res.status(200).send({message:"User detail has been updated successfully"})

    } catch(e){
      res.status(503).send({message: "Error in Updating data"})
    }

  })

  /* Delete user using below api */
  router.get("/deleteuser/:userid", async (req,res) => {
    try {

      var userid = req.params.userid;
      
      await User.deleteOne({"userid":userid})
      res.status(200).send({message: "Delete user successfully"})

    } catch (e){

      res.status(503).send({ message: "Error in Deleting user" });   
    }
})

module.exports = router;