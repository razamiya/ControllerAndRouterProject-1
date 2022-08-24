// Require module
const express = require('express');
const {showHomePage, showAboutPage, showContactPage, showServicePage} = require('../controller/pageController')


// Init Express route
const route = express.Router();

// Create Router 
route.get('/', showHomePage)
route.get('/about', showAboutPage)
route.get('/contact', showContactPage)
route.get('/service', showServicePage)


module.exports = route;