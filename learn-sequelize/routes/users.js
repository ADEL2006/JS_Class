const express = require('express');
const User = require('../models/user')
const router = express.Router();

router.route('/')
    .get(async (req,res,next) =>{
        try{
            const users = await User.findAll();
            console.log(users);
            res.json(users);
        } catch(err){
            console.log(err);
            next(err);
        }
    })
    .post(async (req,res,next)=>{
        try {
            const users = User.create({
                name : req.body.name,
                age : req.body.age,
                married : req.body.married
            });
            console.log(users);
            res.status(201).json(users);
        } catch(err){
            console.log(err);
            next(err);
        }
    })

    module.exports = router;