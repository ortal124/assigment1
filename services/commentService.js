const Comment = require('../models/commentModel');

const createComment = async (content, senderId, postId) => {
    const newComment = new Comment({
      content,
      senderId,
      postId
    });
    return await newComment.save();
};

const getAllComments = async () => {
  try {
    return await Comment.find(); 
  } catch (error) {
    throw new Error('Error fetching comments: ' + error.message);
  }
};


module.exports = {
    createComment,
    getAllComments
};
