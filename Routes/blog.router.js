const {Router} = require('express');
const { default: mongoose } = require('mongoose');
const blogModel = require('../models/blog');
const usermodel = require('../models/user');
const comModel = require('../models/comment')
const likModel = require('../models/like');

const blogRouter = Router();


blogRouter.get('/view' ,async (req,res)=>{
    
    const data = await blogModel.find();

 res.send(data);
})

blogRouter.post('/create/:id',async(req,res)=>{
    try {
        

        const {id} = req.params;
        let obj = req.body;
        obj.user_id = mongoose.Types.ObjectId(id);
       const data = await blogModel.create(obj);
       const user = await usermodel.findOne({_id : data.user_id});
       const data2 = await usermodel.updateOne({_id : user._id},{blogs : [...user.blogs,data._id]});
   
       res.send(data);


    } catch (error) {
        res.send(error);
    }
   

})

blogRouter.put('/:id',async(req,res)=>{
    
    try {
        const {id} = req.params;
         let obj = req.body;
        //  const data = await blogModel.findOne({_id : mongoose.Types.ObjectId(id)});
        const blog = await blogModel.updateOne({_id : mongoose.Types.ObjectId(id)},{...obj})
        res.send(blog);
    } catch (error) {
        res.send(error)
    }
       

})

blogRouter.delete('/:id',async(req,res)=>{
    
try {
      const { id} = req.params;
   const blog =  await blogModel.findOne({_id : mongoose.Types.ObjectId(id)})
   await blogModel.findByIdAndDelete({_id : mongoose.Types.ObjectId(id)});
    const user = await usermodel.findOne({_id :blog.user_id});

    const usersblog = user.blogs.filter((res)=>{
       return res != id;
    })
     await usermodel.updateOne({_id : user._id }, {blogs : usersblog});
     await comModel.deleteMany({_id :blog._id });
     await likModel.deleteMany({_id :blog_id});

 res.send("delete sucess");

} catch (error) {
    res.send(error);
}

})


module.exports = blogRouter;