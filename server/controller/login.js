const users = require('../models').users;
module.exports = {
login (req, res) {
  users.findOne({
    where: {
      username: req.body.username
    },
  })
  .then(users => res.status(201).send(users));
}
};




