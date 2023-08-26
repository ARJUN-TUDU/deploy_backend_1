const express = require("express");

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

const User = mongoose.model("employees",{
  name : String,
  age : Number , 
  value : Number
})

app.get("/details", async (req, res, next) => {
  
  
  

  try {
      const data = await User.find();
      res.json(data);
      
  }catch(e){
      res.json("error");
  }



});






// connection
const port = process.env.PORT ;
app.listen(port, () => console.log(`Listening to port ${port}`));