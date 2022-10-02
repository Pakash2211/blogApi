const { Router} = require('express');
const { default: mongoose } = require('mongoose');
const comModel = require('../models/comment')
const blogModel = require('../models/blog');


const comRouter = Router();

comRouter.get('/:id',async(req,res)=>{
    const {id} = req.params;
    const blog = await comModel.find({blog_id : mongoose.Types.ObjectId(id)});
    res.send(blog);
})

comRouter.post('/:id',async(req,res)=>{
    try {
        const{id} = req.params;
        let obj = req.body;
       const blog = await blogModel.findOne({_id : mongoose.Types.ObjectId(id)});
       obj.blog_id = blog._id;
       obj.user_id = blog.user_id;
       const com = await comModel.create(obj);
       res.send(com);
    } catch (error) {
        res.send(error);
    }
   
})



comRouter.delete('/:id',async(req,res)=>{

    try {
        const {id} = req.params;
        await comModel.deleteOne({_id : mongoose.Types.ObjectId(id)});
        res.send("delete comment")
    } catch (error) {
        res.send(error);
    }
   
})
module.exports = comRouter;