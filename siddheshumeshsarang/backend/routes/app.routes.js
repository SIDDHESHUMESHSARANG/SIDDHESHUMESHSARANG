const express = require('express');
const PostController = require('../controllers/post.controller.js');
const router = express.Router();

router.get('/', PostController.getAllPosts);
router.post("/", PostController.createPost);
router.post("/:id", PostController.updatePost);
router.delete('/:id', PostController.deletePost);
router.post('/:id/like', PostController.likePost);
router.post('/:id/unlike', PostController.unlikePost);

module.exports = router;