const User = require("../models/Users")
const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")

// @desc Create user
// @route POST api/user
// @access Private
const CreateUser = asyncHandler(async(req,res)=>{
  const { username, password, roles, firstName, lastName, address, contactNo, email } = req.body

  // Confirm data
  if(!username || !password || !Array.isArray(roles) || !roles.length || !firstName || !lastName || !address || !contactNo ||!email){
     return res.status(400).json({ messege:'All fields are required'})
  }

  // Check for duplicate
  const duplicate = await User.findOne({ username }).lean().exec()

  if(duplicate){
     return res.status(409).json({ messege: 'Dulicate username'})
  }

  // Hash password
  const hashedPwd = await bcrypt.hash(password, 10) // salt rounds

  const userObject = { username, "password": hashedPwd, roles, firstName, lastName, email, contactNo, address}

  const user = await User.create(userObject)

  if(user){
    res.status(201).json({ messege: `New user ${username} created` })
  }else{
    res.status(400).json({ messege: 'Invalid user data recieved'})
  }

  
})

// @desc Get all User
// @route GET api/user
// @access Private
const getAllUser = asyncHandler(async(req,res)=>{
  
  const users = await User.find().select('-password').lean() // Don't return password
  if(!users){
    return res.status(400).json({ messege: "No users found!"})
  }

  res.json(users)
})

// @desc Update User
// @route PATCH api/user
// @access Private
const updateUser = asyncHandler(async(req,res)=>{
  const {id, username, password, roles, firstName, lastName, address, contactNo, email } = req.body

  // Confirm data
  // if(!id || !username || !password || !Array.isArray(roles) || !roles.length ){
  //     return res.status(400).json({ messege:'Required fields are not filled'})
  // }
  
  const user = await User.findById(id).exec()

  if(!user){
    return res.status(400).json({ messege: 'User not found'})
  }

  const duplicate = await User.findOne({ username }).lean().exec()
  if(duplicate && duplicate?._id.toString() !== id){
    return res.status(409).json({ messege: 'Duplicate username' })
  }

  user.username = username
  user.roles = roles
  user.firstName = firstName
  user.lastName = lastName
  user.address = address
  user.contactNo = contactNo
  user.email = email

  if(password){
    user.password = await bcrypt.hash(password, 10)
  }
  
  const updatedUser = await user.save()
  
  res.json({ messege: `${updatedUser.username} updated`})
 

})

// @desc Delete User
// @route DELETE api/user
// @access Private
const deleteUser = asyncHandler(async(req,res)=>{
  
  const { id } = req.body

  if(!id){
    return res.status(400).json({ messege: 'User ID Required'})
  }

  const user = await User.findById(id).exec()

  if(!user){
    return res.status(400).json({ messege: 'User Not Found'})
  }

  await user.deleteOne()
  const reply = `Username ${user.username} with ID ${user._id}`

  res.json(reply)
})
  
module.exports = {
    CreateUser,
    getAllUser,
    updateUser,
    deleteUser
}