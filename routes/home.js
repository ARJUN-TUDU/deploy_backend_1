const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");


const User = mongoose.model("employees",{
    name : String,
    age : Number , 
    value : Number
})

router.get("/", async (req, res, next) => {
    
    
    

    try {
        const data = await User.find();
        res.json(data);
        
    }catch(e){
        res.json("error");
    }


  
});

module.exports = router;