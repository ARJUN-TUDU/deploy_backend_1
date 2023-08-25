const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const NewsAPI = require('newsapi');
dotenv.config();

const express = require("express");
const home = require("./routes/home");

// Middlewares

app.use(express.json());

// Routes
app.use("/home", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));