const users = require('../models').users;

module.exports = {
  
  create(req, res) {
    users.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    .then(users => res.status(201).send(users))
  }

};



/*module.exports = {
  findOne(req, res) {
  users.findOne({ where:{
    username: req.body.username
  },
  }, function(err, users) {

    if (err) throw err;

    if (!users) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (users) {

       check if password matches
      if (users.password !== req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        if user is found and password is right
        create a token
        var token = jwt.sign(users, app.get('1103'), {
          expiresInMinutes: 1440 
        });

        return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }   

    }

  });
};

*/



