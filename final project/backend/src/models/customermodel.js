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
    mobile : {
        type: Number,
        require: true, 
        unique: true
    },
}, 
{timestamps: true});

module.exports = mongoose.model('Customer', customerSchema);