const mongoose = require('mongoose');

const Registration = mongoose.model('Registration', {
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    encryptedPassword:{
        type:String,
        required:true
    }
});

module.exports = Registration;
