
const jwt    = require('jsonwebtoken');
const users = require('../models').users;
const user = require('../models').groups;
const groups = require('../models').groups;
const groupMembers = require('../models').groupMembers;
const groupnames = require('../models').groups;




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
    
    const user_id = req.decoded.users.id;
    const name = req.decoded.users.username;
    groupnames.create({
      groupname: req.body.groupname,
      users_id: user_id
    })
     .then(groupnames => res.status(201).send({message: 'group successfully created', "groupname": groupnames.groupname, "Admin_id": groupnames.users_id, Admin_name: name}));
    
  }
});

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
   /*else{
    user.findOne({
    where: {
      groupname: req.body.groupname,
    },
  })
  .then((user) => {
    if(!user){
      res.status(400).send({ status: false, message:'groupname not found'});
    }
*/
  else {
    
    const Admin = req.decoded.users.username;
    //const group = req.decoded.groups.groupname;
    groupMembers.create({
        groupname: req.params.groupname,
        username: req.body.username
      
   })

  .then(groupMembers => res.status(200).send({status: true, message: "User added succefully", data: groupMembers, Admin}));
  }
 }); 
 //} 
//});

};



