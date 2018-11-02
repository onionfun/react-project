const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.post('/', async (req, res)=>{
    try{

        const createUser = User.create(req.body)
        res.session.logged = true;
        res.session.username = req.body.username;

         res.json({
        status: 200,
        data: "login successful"
    })
    }catch(err){
        console.log(err)
        res.send(err)
    }
   
    
})