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


  module.exports = {
    createPost
  }; 