//Importing express, mongoose, dotenv
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Reading the dotenv file
dotenv.config ();

// Creating the application
const app = express();
//Port location
const port = 3001

// Connecting to the database
mongoose.connect(`${process.env.MONGO_URL}`);

app.listen(port, () => {console.log ("application running")})