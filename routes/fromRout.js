
// require module
const express = require('express');
const {showFromData} = require('../controller/fromControlle');


// Init route
const route = express.Router();

route.post('/contactFrom', showFromData )


module.exports = route;