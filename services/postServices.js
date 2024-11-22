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
const getPostById = async (postId) => {
    return await Post.findById(postId);
  };

  const updatePost = async (postId, content, senderId) => {
    try {
      const post = await Post.findById(postId);
  
      if (!post) {
        throw new Error('Post not found');
      }
  
      post.content = content;
      post.senderId = senderId;
  
      return await post.save();
    } catch (error) {
      throw new Error(error.message);
    }
  };


  module.exports = {
    createPost,
    getPosts,
    getPostsBySender,
    getPostById,
    updatePost
  };