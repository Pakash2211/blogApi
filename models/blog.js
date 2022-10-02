const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
      
    user_id : mongoose.Types.ObjectId,
    title : String,
    body : String,
    category : [String]

})

const blogModel = mongoose.model("blog", blogSchema);

module.exports = blogModel;