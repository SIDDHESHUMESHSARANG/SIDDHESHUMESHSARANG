const Post = require("../models/Post.js"); 
module.exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find(); 
    res.status(200).json(posts); 
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Cannot fetch posts right now." }); 
  }
};

module.exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params; 
    const updatedData = req.body; 

    const updatedPost = await Post.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found." }); 
    }

    res.status(200).json(updatedPost); 
  } catch (error) {
    console.error("Error updating post:", error);
    if (error.name === "CastError") {
      
      return res.status(400).json({ error: "Invalid post ID." });
    }
    res.status(500).json({ error: "Cannot update post right now." });
  }
};


module.exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params; 

    
    const deletedPost = await Post.findByIdAndDelete(id); 

    if (!deletedPost) {
      return res.status(404).json({ error: "Post not found." }); 
    }

    res
      .status(200)
      .json({ message: "Post deleted successfully.", deletedPost }); 
  } catch (error) {
    console.error("Error deleting post:", error);
    if (error.name === "CastError") {
      
      return res.status(400).json({ error: "Invalid post ID." });
    }
    res.status(500).json({ error: "Cannot delete post right now." });
  }
};


module.exports.createPost = async (req, res) => {
  try {
    const { title, content, likes } = req.body;
    const newPost = new Post({
      title,
      content,
      uploadedAt: new Date(), 
      likes: likes || 0, 
    });
    const savedPost = await newPost.save(); 
    res.status(201).json(savedPost); 
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Cannot create post right now." });
  }
};

// Increment like count
module.exports.likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndUpdate(
      id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ error: "Post not found." });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error("Error liking post:", error);
    res.status(500).json({ error: "Cannot like post right now." });
  }
};

// Decrement like count
module.exports.unlikePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndUpdate(
      id,
      { $inc: { likes: -1 } },
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ error: "Post not found." });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error("Error unliking post:", error);
    res.status(500).json({ error: "Cannot unlike post right now." });
  }
};
