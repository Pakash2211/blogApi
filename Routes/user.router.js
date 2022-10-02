const {Router} = require('express');
const mongoose  = require('mongoose');
const usermodel = require('../models/user');
const userRouter = Router();

userRouter.post('/login',async(req,res)=>{
  await usermodel.create(req.body);
   res.send('added')
})

userRouter.get('/:id' ,async(req,res)=>{
    const{id} = req.params;
    console.log(typeof id);
     const data = await usermodel.find({_id : mongoose.Types.ObjectId(id)});
     res.send(data);
})

module.exports = userRouter;