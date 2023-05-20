/*
 File Name: movie.js
 Description: This file is used for routing all the movies action
 Author: Abhay
*/

const express = require("express");
const router = express.Router();
const json = require("../utils/movies.json")

/* Get All movies list using below api */
router.get("/movieslist", async(req, res) => {
    try{
        const result = json
        res.status(200).send({rows:result})
    } catch(e){
      res.status(503).send({message:"Error Fetching Data"})
    }

})

module.exports = router;