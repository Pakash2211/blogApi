const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    social_profile :{
        linkedIn:String,
        facebook:String,
        Twiter:String,
        Github:String,
        Instagram:String
    },
    Addresses: 
        {
            City:String,
            State:String,
            PinCode:String,
            Line1:  String
        }
        ,
      blogs: [mongoose.Schema.Types.ObjectId]  

})

const usermodel = mongoose.model('user',userSchema)

module.exports = usermodel;
