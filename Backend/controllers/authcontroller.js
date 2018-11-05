const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.post('/', async (req, res)=>{
    console.log("GOT HERE")
    try{
        const createUser = await User.create(req.body);
        // res.session.logged = true;
        // res.session.username = req.body.username;
        console.log("GOT HERE")
        res.json({
            status: 200,
            data: createUser
        });
    }catch(err){
        console.log(err);
        res.json({
            status: 500,
            data: err
        })
    }
})

module.exports = router;