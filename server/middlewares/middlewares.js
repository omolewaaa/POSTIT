const users = require('../models').users;
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
 const token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, 'Secret', (err, decoded) => {      
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });

  }

}
// process.env.TOKEN_SECRET