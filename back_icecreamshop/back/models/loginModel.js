const mongoose = require('mongoose');

const Login = mongoose.model('Login', {
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pwd:{
        type:String,
        required:true
    }
});

module.exports = Login;
