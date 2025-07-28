const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    image: String,
    content: String,
    uploadedAt: Date,
    likes: { type: Number, default: 0}
})

module.exports = PostSchema;