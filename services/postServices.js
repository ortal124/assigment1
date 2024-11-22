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

  module.exports = {
    createPost,
    getPosts
  };