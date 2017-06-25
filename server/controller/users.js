const express = require('express');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const jwt    = require('jsonwebtoken');
const users = require('../models').users;
const email = require('../models').users;
const ewa = require('../models').users;


exports.create = (req, res) => {
	users.findOne({
    where: {
      username: req.body.username,
    },
  })
  .then((users) => {
    if(users){
      res.status(400).send({ status: false, message:'Username already exist'});
    }
    else{
    email.findOne({
    where: {
    email: req.body.email,
    },
  })
    .then((email) => {
      if(email){
      res.status(400).send({ status: false, message:'email already exist'});
    }

   else {
      ewa.create({
      username: req.body.username,
      email: req.body.email,
      password : bcrypt.hashSync((req.body.password), salt)
      })
      .then((ewa) => {
        res.status(200).send({ status: true, message:'Successful', data: ewa});
        }); 
      } 
    });
  
    }

   });


};


exports.login = (req, res) => {
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

