//Importing express, mongoose, dotenv
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./routes/api');

// Reading the dotenv file
dotenv.config ();

// Creating the application
const app = express();
//Port location
const port = 3001
app.use(express.json())
app.use(router)

// Connecting to the database
mongoose.connect(`${process.env.MONGO_URL}`);

app.listen(port, () => {console.log ("application running")})