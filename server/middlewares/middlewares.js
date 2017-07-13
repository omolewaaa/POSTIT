const users = require('../models').users;
const jwt = require('jsonwebtoken');
const groups = require('../models').groups;

module.exports = (req, res, next) => {
 const token = (req.body['x-access-token'] ) || (req.headers['x-access-token'] ) || (req.query['x-access-token'] )
  
    if (token) {
      jwt.verify(token, 'omolewa', (err, decoded)=> {
        if (err) {
          return res.send(err);
        } 
        else {
          req.decoded = decoded;
          next();
      
          }
      
        });
      }
    else {
      return res.status(403).send({ 
       success: false, 
       message: 'No token provided.' 
      });
    }
  }
