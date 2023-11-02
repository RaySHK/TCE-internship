const mongoose = require('mongoose');
const courseSchema = mongoose.Schema({
    corname : {
        type: String
    },
    corcode : {
        type: String
    },
    hours : {
        type: String,
    },
    
}, 
{timestamps: true});

module.exports = mongoose.model('Course', courseSchema);