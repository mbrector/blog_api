const express = require('express')
const router = express.Router()
const Blog = require('../models/blog.js');

//Index
router.get('/', (req, res)=>{
    Blog.find({}, (err, foundBlogs)=>{
        res.json(foundBlogs)
    })
})
//Delete
router.delete('/:id', (req, res)=>{
    Blog.findByIdAndRemove(req.params.id, (err, deletedBlog)=>{
        res.json(deletedBlog)
    })
})
//Update
router.put('/:id', (req, res)=>{
    Blog.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedBlog)=>{
        res.json(updatedBlog)
    })
})
//Create
router.post('/', (req, res)=>{
    Blog.create(req.body, (err, createdBlog)=>{
        res.json(createdBlog)
    })
})
//Show
router.get('/:id', (req, res)=>{
    Blog.findById(req.params.id, (err, foundBlog)=>{
        res.json(foundBlog);
    });
});


module.exports = router