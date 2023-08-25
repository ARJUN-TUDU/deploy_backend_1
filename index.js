


const express = require("express");
const home = require("./routes/home");

dotenv.config();
// Middlewares

app.use(express.json());

// Routes
app.use("/home", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));