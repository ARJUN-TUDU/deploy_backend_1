const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const NewsAPI = require('newsapi');
dotenv.config();

const DATABASE = process.env.DATABASE

try{

    mongoose.connect(DATABASE);

}catch(e){

    console.log("database connection error");

}

const User = mongoose.model("employees",{
     name : String , 
     age : Number,
     value : Number
})

app.get("/news",async (req,res)=>{

    try{
        
        const data = await User.find();
        res.json(data);
        console.log(data);

    }catch(err){

        console.log("sending data failed");

    }


})



app.listen(4000,(err)=>{
    if(err){
        console.log("error")
    }else{
        console.log("app started")
    }
})


