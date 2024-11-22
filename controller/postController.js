const postService = require('../services/postServices');

const createPost = async (req, res) => {
    try {
      const { content, senderId } = req.body;
      const newPost = await postService.createPost(content, senderId);
      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ message: 'Error creating post', error: error.message });
    }
  };

const getPosts = async (req, res) => {
  try {
    const posts = await postService.getPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error getting all posts', error: error.message });
  }
};
  module.exports = {
    createPost,
    getPosts
  }; 