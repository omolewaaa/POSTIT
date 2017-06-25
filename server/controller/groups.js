//const express = require('express');
const jwt    = require('jsonwebtoken');
const users = require('../models').users;
const user = require('../models').groups;
const groups = require('../models').groups;
//const middle = require('../middlewares').middlewares;
const groupMembers = require('../models').groupMembers;
const groupnames = require('../models').groups;
//const Members = require('../models').groups;



exports.create = (req, res) => {

    groups.findOne({
    where: {
      groupname: req.body.groupname,
    },
 })
   .then((groups)=> {
      if(groups){
        res.send({status: false, message:'groupname already exist'});
      }

    else {
      //const decoded = req.decoded;
   const users_id = req.decoded.data;
    groupnames.create({
      groupname: req.body.groupname,
      users_id: users_id
    })
     .then(groupnames => res.status(201).send({message: 'group successfully created', data: groupnames}));
    
  }
});
   //res.send(res.decoded.users_id)

};


exports.add = (req, res) => {
   users.findOne({
   where: {
    username: req.body.username,
     // groupname: req.body.groupname
   },
 })
  .then((users) => {
  if(!users){   
 res.status(404).send({status: false, message:'User not found'});
  }
   else{
    user.findOne({
    where: {
      groupname: req.body.groupname,
    },
  })
  .then((user) => {
    if(!user){
      res.status(400).send({ status: false, message:'groupname not found'});
    }

  else{
    groupMembers.create({
        groupname: req.body.groupname,
        username: req.body.username
      
   })

  .then(groupMembers => res.status(200).send({status: true, message: "User added succefully", data: groupMembers}));
  }
 }); 
 } 
});

};



/*exports.login = (req, res) => {
  users.findOne({
    where: {
      username: req.body.username,
    },
  })
  .then((users) => {
    if(!users){
      res.status(404).send({message:'User not found'});
      }
      else{
   //res.status(201).send({ status: true, message:'logged in successfully'});

   const token = jwt.sign({users
   },
    "omolewa", {
          expiresIn: '3 days'
        });

         res.status(201).send({message:'logged in successfully', token:token});
          
}
});
};



module.exports = {
  Members (req, res) {
    users.findOne({
    where: {
      groupname: req.body.groupname,
    },
 })
  .then((users) => {
   if(!users){   
 groupMembers.create({
        groupname: req.params.groupname,
        username: req.params.username
      
   })
  res.status(200).send({status: true, message: "User added succefully"});
  }
   else{
    res.status(404).send({status: false, message:'User not found'});
  
}
});
}
};
*/
