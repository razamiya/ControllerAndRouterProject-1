// Require all module
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const path = require('path');
const pageRout = require('./routes/pageRout');
const fromRout = require('./routes/fromRout');

// Init Express 
let app = express();

// json and from data manaege
app.use(express.json());
app.use(express.urlencoded( { extended : false } ));

// Envirentment variable
dotenv.config();
const PORT = process.env.PORT;

// Static folder 
app.use(express.static('public'));


// Router
app.use( '/', pageRout )

// Get From all data
app.use( fromRout )  


// Create express server
app.listen(PORT, () => {
    console.log(`Your Server Is Running On Port ${PORT}`.bgYellow.black);
})




