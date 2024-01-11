const mongoose = require('mongoose')

const inventorySchema = mongoose.Schema(
{
    
    Category:String,
    brand:String,
    // ProductDetails:{
        productName :String,
        type :String,//tshirt,shirt
        price :String,
        Img :String,
        quantity:Number,  
    // }
},
{
    timestamps :true,
})

module.exports = mongoose.model("Inventory",inventorySchema)