const mongoose = require("mongoose");
const PostSchema = require("../db/schemas/PostSchema");

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
