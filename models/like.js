const mongoose = require('mongoose');
const likSchema = new mongoose.Schema({
blog_id: mongoose.Types.ObjectId,
user_id: mongoose.Types.ObjectId,
emoji : String
})


const likModel = mongoose.model('like', likSchema);


module.exports = likModel;