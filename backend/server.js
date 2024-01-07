const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");

//db connection
connectDB();
 
const app = express();

app.use("/api/goals", require("./routes/routes"));

//set up connection to database
app.listen(port, () => console.log(`Server running on port ${port}`));

