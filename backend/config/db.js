if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

const mongoose = require('mongoose')


const connectDB = async()=>{

    try {

        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB connected : ${conn.connection.host}`);
        
    } catch (error) {
        
        console.log("Connection Error :",error);

        process.exit(1);
    }
}


module.exports = connectDB

