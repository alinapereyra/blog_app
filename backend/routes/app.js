const express = require('express');
const router = express.Router();

// const { addBlog, getBlog } = require('../controls/app');

// router.post('/addBlog', addBlog); // Add Blog POST Route //
// router.get('/getBlog', getBlog); // Get Blog GET Route //

// module.exports = router;

// Get All Posts
router.get('/api/post', (req, res) => {
    Post.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

// Save Post
router.post('/api/post/add', (req, res) => {
    const pst = new Post({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content
    });
    pst.save((err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Post Added Successfully', addPost: data})
        } else {
           console.log(err);
        }
    });
});

// Get Single Post 

router.get('/api/post/:id', (req, res) => {
    Post.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
});

// Update Employee

router.put('/api/post/edit/:id', (req, res) => {
    const emp = {
        title: req.body.title,
        author: req.body.author,
        content: req.body.content
    };
    Post.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Post Updated Successfully', updatePost: data})
        } else {
            console.log(err);
        }
    });
});

module.exports = router;