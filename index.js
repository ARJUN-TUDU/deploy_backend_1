


const express = require("express");
const home = require("./routes/home");
const app =express();
const MONGODB_URI  = process.env.MONGODB_URI 
const mongoose = require("mongoose")

const dotenv = require("dotenv");

require('dotenv').config({ path: path.resolve(__dirname, './.env') });

// Middlewares

app.use(express.json());

//database 
try {
     mongoose.connect(MONGODB_URI )
}catch(err){
    
}

// Routes
app.use("/home", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));