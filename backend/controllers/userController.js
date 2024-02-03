const Users = require("../models/Users")

// @desc SET USER
// @route POST api/user
// @access Private
const setUser = async(req,res)=>{

    try {
      const newUser = new Users(req.body);
      await newUser.save();
      res.status(201).json({ message: "Registered successfully", User : newUser });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  module.exports = {
    setUser
  }