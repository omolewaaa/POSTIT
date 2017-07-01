const express = require('express');
const usersController = require('../controller').users;
const groupController = require('../controller').groups;
const groupMembersController = require('../controller').groupMembers;
const messageController = require('../controller').messages;
let verifyToken = require('../middlewares/middlewares');
//const loginController = require('../controller').login;


module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the users API!',
  }));

  app.post('/api/users/signup', usersController.create);
  app.post('/api/users/signin', usersController.login);
  app.post('/api/group', verifyToken, groupController.create);
  app.post('/api/group/users',verifyToken, groupController.add);
  app.post('/api/group/groupid/message', verifyToken, messageController.create);
  app.get('/api/group/groupid/messages', verifyToken, messageController.messages);
};


