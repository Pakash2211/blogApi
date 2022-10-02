const express = require('express');
const userRouter = require('./Routes/user.router');
const blogRouter = require('./Routes/blog.router');
const comRouter = require('./Routes/comment.router');
const connection = require('./configs/connect');
const likRouter = require('./Routes/like.router');
const app = express();

app.use(express.json())
app.use('/user',userRouter);
app.use('/blog' ,blogRouter);
app.use('/comment',comRouter);
app.use('/like',likRouter);


app.listen(8086,async()=>{
    await connection();
    console.log("server Start");
})