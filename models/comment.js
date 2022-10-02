const mongoose = require('mongoose');
const comSchema = new mongoose.Schema({
blog_id: mongoose.Types.ObjectId,
user_id: mongoose.Types.ObjectId,
message:String,
rating : Number,
})


const comModel = mongoose.model('comment', comSchema);


module.exports = comModel;