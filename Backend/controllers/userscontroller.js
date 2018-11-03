const express = require ('express');
const router = express.Router();
const User = require('../models/user')

router.get('/', async (res, req)=>{
    console.log("omae o korosu")
    try{
        res.render("What")
        const allUsers = await User.find();
        res.json({
            status: 200,
            data: allUsers
        })

    }catch(err){
        res.json(err)
    }

});
router.post('/', async (res, req)=>{
    try{
        console.log(req.body, " is this it?")
        const createUser = await User.create(req.body)

        res.json({
            status: 200,
            data: createUser
        })

    }catch(err){
        console.log(err);
        res.send(err);
    }
});

router.get('/:id', async (res, req)=>{
    try{
        const findUser = await User.findById(req.params.id);
        res.json({
            status: 200,
            data: findUser
        })
    }catch(err){
        res.send(err)
    }

 });
 
 
 router.put('/:id', async (req, res)=>{
     try{
         const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
      res.json({
            status: 200,
            data: updateUser
        })
     }catch(err){
         res.send(err)
     }
 });
 
 router.delete('/:id', async (req, res)=>{
     try{
         const deleteUser = await User.findByIdAndRemove(req.params.id);
               res.json({
            status: 200,
            data: deleteUser
        })
     }catch(err){
         res.send(err)
     }
 })
 
 
 



module.exports = router;