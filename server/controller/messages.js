const jwt    = require('jsonwebtoken');

const messages = require('../models').messages;
const Message = require('../models').messages;
const users = require('../models').users;

// code to post messages to group
exports.create = (req, res) => {
  const name = req.decoded.users.username;
    messages.create({
      message: req.body.message,
      groupname: req.body.groupname
      
    })
      .then(messages => res.status(201).send({messages, name}));
  };

// code to get messages
exports.messages = (req, res) => {
  messages.findAll({
    //where: {
      groupname: req.body.groupname,
    //},
  })
  .then((messages) => {
    res.status(200).send({message:'Successful', data: messages});
  });
};


