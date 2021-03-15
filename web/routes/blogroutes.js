const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const path = require('path');

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.json({ title: 'All Blogs', blogs: result })
        })
        .catch((err) => {
            console.log(err);
        })
}

router.get('/blogs', blog_index);

module.exports = router;