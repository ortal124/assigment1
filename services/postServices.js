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

const getPostById = async (postId) => {
    return await Post.findById(postId);
  };

  module.exports = {
    createPost,
    getPosts,
    getPostById
  };