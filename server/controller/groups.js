const groups = require('../models').groups;

module.exports = {
  
  create(req, res) {
    groups.create({
      username: req.body.username,
      groupname: req.body.groupname
      
    })
    .then(groups => res.status(201).send(groups))
  }
};



