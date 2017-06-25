//const express = require('express');
const jwt    = require('jsonwebtoken');
const users = require('../models').users;
const groups = require('../models').groups;
//const middle = require('../middlewares').middlewares;



module.exports = {
 // const users_id = req.decoded.groups_id; 
  create(req, res) { 
  	const users_id = req.decoded;
    groups.create({
        groupname: req.body.groupname,
        users_id: users_id
      
    })
    .then((groups) => {
    res.status(200).send({
    message:"Group created successfully", groupname:groups.groupname, Admin:groups.user_id
    })

});
;
}
};


