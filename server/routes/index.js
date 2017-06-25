const usersController = require('../controller').users;
const groupController = require('../controller').groups;
const messageBoxesController = require('../controller').messageBoxes;
//let verifyToken = require('../middlewares/middlewares');
//const loginController = require('../controller').login;


module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the users API!',
  }));

  app.post('/api/users/signup', usersController.create);
  app.post('/api/users/signin', usersController.login);
  app.post('/api/group', groupController.create);
  app.post('/api/group/groupid/message', messageBoxesController.create);
};



