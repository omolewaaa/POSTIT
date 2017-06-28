const jwt    = require('jsonwebtoken');

const messages = require('../models').messages;
const Message = require('../models').messages;
const users = require('../models').users;

exports.create = (req, res) => {
  const name = req.decoded.users.username;
    messages.create({
      message: req.body.message,
      groupname: req.body.groupname
      
    })
    .then(messages => res.status(201).send({messages, name}));
  

};


exports.messages = (req, res) => {
  messages.findAll({
    //where: {
      groupname: req.body.groupname,
    //},
  })
  .then((messages) => {
    res.status(200).send(messages);
  });
};


