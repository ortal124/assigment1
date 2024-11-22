const Post = require('../models/postModel');

const createPost = async (content, senderId) => {
    const newPost = new Post({
      content,
      senderId,
    });
    return await newPost.save();
  };

const getPosts = async () => {
  return await Post.find();
};

const getPostsBySender = async (senderId) => {
  try {
    const posts = await Post.find({ senderId });
    return posts;
  } catch (error) {
    throw new Error('Error retrieving posts');
  }
};

  module.exports = {
    createPost,
    getPosts,
    getPostsBySender
  };