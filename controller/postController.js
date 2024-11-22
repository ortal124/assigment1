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

const getPostsBySender = async (req, res) => {
  try {
    const senderId = req.query.sender;
    if (!senderId) {
      return res.status(400).json({ message: 'Sender ID is required' });
    }
    const posts = await postService.getPostsBySender(senderId);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while retrieving posts' });
  }
};

  module.exports = {
    createPost,
    getPosts,
    getPostsBySender
  }; 