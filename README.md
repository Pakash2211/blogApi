# blogApi



<h2>for user</h2>
        <p> ----->    localhost:8086/user/login       POST </P>
         <p> ----->    localhost:8086/user/:userId      GET user </P>
          
<h2>for blog</h2>   <p>----->    localhost:8086/blog/view       GET all blog</P>
         <p>  ----->     localhost:8086/blog/create/:userId     POST  creatBlog </P>
          <p> ----->     localhost:8086/blog/:blogId     PUT changeblog     </P>
          <p> ----->     localhost:8086/blog/:blogId     DELETE deleteBlog</P>


<h2>for comment</h2> <p> -----> localhost:8086/comment/:blogId       POST comment</P>
           <p>  -----> localhost:8086/comment/:commentId       DELETE comment  </P>        
           <p>  ----->  localhost:8086/comment/:blogId      GET all comment for particular blog</P>

<h2>for like</h2>  <p>  -----> localhost:8086/like/:blogId       POST like</P>
            <p>-----> localhost:8086/like/:blogId       GET  all like for particular blog</P>
