
// show from data 
const showFromData = (req, res) => {
    const {name, email, phone} = req.body;

    res.status(200).send(`
    
    <h1>Name : ${name}  </h1>
    <h1>Email : ${email}  </h1>
    <h1>Phone : ${phone}  </h1>

    <h1>Hello ${name} . How are you ? You are Wellcome Our World </h1>

    `)
}

module.exports = {showFromData}