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
  const { sender } = req.query;

  try {
    let posts;

    if (sender) {
      posts = await postService.getPostsBySender(sender)
    } else {
      posts = await postService.getPosts();
    }

    return res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error." });
  }
};

const getPostById = async (req, res) => {
    try {
      const { postId } = req.params;
      const post = await postService.getPostById(postId);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching post', error: error.message });
    }
};

module.exports = {
  createPost,
  getPosts,
  getPostById
};