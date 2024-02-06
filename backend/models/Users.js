const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        userToken : mongoose.Schema.ObjectId,
        username : {
            type:String,
            required: true
        },
        password :  {
            type:String,
            required: true
        },
        roles :  [{
            type:String,
            required: true
        }],
        firstName : String,
        lastName : String,
        email : String,
        contactNo : Number,
        address : String,

    },
)

module.exports = mongoose.model("User",userSchema)