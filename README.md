# blogApi



for user ----->    localhost:8086/user/login       POST 
         ----->    localhost:8086/user/:userId      GET user 
          
for blog  ----->    localhost:8086/blog/view       GET all blog
          ----->     localhost:8086/blog/create/:userId     POST  creatBlog 
          ----->     localhost:8086/blog/:blogId     PUT changeblog     
          ----->     localhost:8086/blog/:blogId     DELETE deleteBlog


for comment -----> localhost:8086/comment/:blogId       POST comment
            -----> localhost:8086/comment/:commentId       DELETE comment          
            ----->  localhost:8086/comment/:blogId      GET all comment for particular blog

for like   -----> localhost:8086/like/:blogId       POST like
           -----> localhost:8086/like/:blogId       GET  all like for particular blog
