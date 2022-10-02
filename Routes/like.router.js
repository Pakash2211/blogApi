const { Router} = require('express');
const { default: mongoose } = require('mongoose');
const likModel = require('../models/like')
const blogModel = require('../models/blog');


const likRouter = Router();

likRouter.get('/:id',async(req,res)=>{
    const {id} = req.params;
    const blog = await likModel.find({blog_id : mongoose.Types.ObjectId(id)});
    res.send(blog);
})

likRouter.post('/:id',async(req,res)=>{
    try {
        const{id} = req.params;
        let obj = req.body;
       const blog = await blogModel.findOne({_id : mongoose.Types.ObjectId(id)});
       obj.blog_id = blog._id;
       obj.user_id = blog.user_id;
       const com = await likModel.create(obj);
       res.send(com);
    } catch (error) {
        res.send(error);
    }
   
})

module.exports = likRouter;