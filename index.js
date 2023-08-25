


const express = require("express");
const home = require("./routes/home");
const app =express();
const DATABAE = process.env.DATABASE



// Middlewares

app.use(express.json());

//database 
try {
    await mongoose.connet(DATABAE)
}catch(err){
    
}

// Routes
app.use("/home", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));