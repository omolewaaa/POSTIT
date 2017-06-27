const jwt    = require('jsonwebtoken');

const messages = require('../models').messages;
const Message = require('../models').messages;

exports.create = (req, res) => {
    messages.create({
      message: req.body.message,
      groupname: req.params.groupname
      
    })
    .then(messages => res.status(201).send(messages));
  

};


exports.messages = (req, res) => {
  Message.findOne({
    where: {
      groupname: req.params.groupname,
    },
  })
  .then((messages) => {
    res.status(200).send({ status: true, message:'Successful', data: messages});
  });
};


/*if(req.body.message == "") {
	.then(res.send({message: "message cant be empty"}))
	}
	else{
		*/