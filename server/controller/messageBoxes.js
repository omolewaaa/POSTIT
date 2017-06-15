const messageBoxes = require('../models').messageBoxes;

module.exports = {
  
  create(req, res) {
    messageBoxes.create({
      message: req.body.message,
      groupname: req.body.groupname
      
    })
    .then(messageBoxes => res.status(201).send(messageBoxes))
  }
};


