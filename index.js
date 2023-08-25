


const express = require("express");
const home = require("./routes/home");
const app =express();
const DATABASE = process.env.DATABASE
const mongoose = require("mongoose")



// Middlewares

app.use(express.json());

//database 
try {
     mongoose.connect(DATABASE)
}catch(err){
    
}

// Routes
app.use("/home", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));