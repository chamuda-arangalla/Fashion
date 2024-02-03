const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        userToken : mongoose.Schema.ObjectId,
        role : String,
        username : String,
        password : String,
        firstName : String,
        lastName : String,
        email : String,
        contactNo : Number,
        address : String,

    },{
        timestamps :true,
    }
)

module.exports = mongoose.model("Users",userSchema)