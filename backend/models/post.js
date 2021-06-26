const mongoose = require('mongoose');



// Blog Post Schema
const Post = mongoose.model('Post', {
    title: {
        type: String,
        required:true
    }, 
    author: {
        type: String,
        required:true
    },
    content: {
        type: String,
        required:true
    }
});

module.exports = { Post }