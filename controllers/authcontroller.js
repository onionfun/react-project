const express = require('express');
const router = express.Router();
const User = require('../models/user')
const session        = require('express-session')

//login
router.post('/login', async (req, res)=>{
    try{
       const createUser = await User.findOne({username: req.body.username});
        console.log(createUser)
        req.session.logged = true;
        req.session.username = req.body.username;
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
});

//registration
router.post('/register', async (req, res)=>{
    try{
        const newUser = await User.create(req.body);
        req.session.logged = true;
        req.session.username = req.body.username;
        console.log("GOT NEWUSER")
        res.json({
            status: 200,
            data: newUser
        });
    }catch(err){
        console.log(err);
        res.json({
            status: 500,
            data: err
        })
    }
});

// logout
router.get('/logout', (req, res, next) => {
  if(req.session) {
    // delete session object
    req.session.destroy((err) => {
      if(err) {
        return next(err);
      } else {
        return res.json({
          status: 200,
          data: 'logout succesful'
        });
      }
    });
  }
});



module.exports = router;