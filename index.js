const express = require("express");
const home = require("./routes/home");
const app =express();

const mongoose = require("mongoose")
const path = require("path")


const dotenv = require("dotenv");
dotenv.config();

const MONGODB_URI  = process.env.MONGODB_URI 
// Middlewares

app.use(express.json());

//database 
try {
      mongoose.connect(MONGODB_URI,
        { useNewUrlParser: true,useUnifiedTopology: true  } )
}catch(err){
    console.log("error handeled")
    
}

// Routes
app.use("/home", home);

// connection
const port = process.env.PORT ;
app.listen(port, () => console.log(`Listening to port ${port}`));