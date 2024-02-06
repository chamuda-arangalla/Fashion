const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");
const cors = require("cors");

//db connection
connectDB();

const app = express();

//use cors()
app.use(cors())

//middlware for post request
app.use(express.json())
app.use(express.urlencoded({ extended:false }))

app.use("/api/items", require("./routes/inventoryRoutes"))
app.use("/api/user", require("./routes/userRoutes"))

//set up server connection 
app.listen(port, () => console.log(`Server running on port ${port}`));

