
const mongoose=require('mongoose');


const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const User=mongoose.model('user',UserSchema);// bydefault gives two parameters 1-name 2-Schema
module.exports=User;