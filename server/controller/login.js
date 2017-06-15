const users = require('../models').users;

module.exports = {
  
  findOne(req, res) {
    users.findOne({
    where:{
      username: req.body.username,
      password: req.body.password
  }
     .then(users => res.status(201).send(users))
     }) 
  }
};




