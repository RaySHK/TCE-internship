const mongoose = require('mongoose');
const customerSchema = mongoose.Schema({
    fname : {
        type: String,
        require: true
    },
    lname : {
        type: String
    },
    username : {
        type: String,
        require: true,
        unique: true
    },
    age : { 
        type: Number
    },
    gender : {
        type: String
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