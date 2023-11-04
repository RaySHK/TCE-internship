const mongoose = require('mongoose');
const customerSchema = mongoose.Schema({
    name : {
        type: String,
        require: true
    },
    email : {
        type: String,
        require: true,
        unique: true
    },
    password : {
        type: String,
        require: true
    },
    age : { 
        type: Number
    },
    gender : {
        type: String
    },
  
    mobile : {
        type: Number,
        require: true, 
        unique: true
    },
    address : {
        type: String,
        require: true
    },
}, 
{timestamps: true});

module.exports = mongoose.model('Customer', customerSchema);