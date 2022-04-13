const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    name: String,
    message: String
})

const blogSchema = new mongoose.Schema({
    title: String,
    body: String,
    comments: [commentSchema]
})

const Blogs = mongoose.model('Blog', blogSchema)

module.exports = Blogs