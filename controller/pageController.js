
const path = require('path');

// create page controllers 

const showHomePage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
}

const showAboutPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/about.html'))
}

const showContactPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/contact.html'))
}

const showServicePage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/service.html'))
}




// export our module element 
module.exports = {
    showHomePage,
    showAboutPage,
    showContactPage,
    showServicePage
}