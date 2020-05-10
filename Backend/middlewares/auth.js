const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');

const accessTokenSecret = 'youraccesstokensecret';


module.exports = (req, res, next) => {

    try {
       console.log(req.headers.authorization.split(' '))
        const req_jwt = req.headers.authorization.split(' ')[1];
        const decoded_id = jwt.verify(req_jwt, "my_secret_key").userId;
        if (req.body.id && req.body.id !== decoded_id)
            throw new Error("Invalid Request!");
        next();
    } catch(err) {
        res.status(400).json({
            error: err.message
        });
        console.log(req.headers.authorization.split(' '));
    }
};

