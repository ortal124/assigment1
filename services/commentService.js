const Comment = require('../models/commentModel');

const createComment = async (content, senderId, postId) => {
    const newComment = new Comment({
      content,
      senderId,
      postId
    });
    return await newComment.save();
};

const updateComment = async (commentId, content, senderId) => {
    try {
      const comment = await Comment.findById(commentId);
  
      if (!comment) {
        throw new Error('Comment not found');
      }
  
      comment.content = content;
      comment.senderId = senderId;
  
      return await comment.save();
    } catch (error) {
      throw new Error(error.message);
    }
};

const getAllComments = async () => {
  try {
    return await Comment.find(); 
  } catch (error) {
    throw new Error('Error fetching comments: ' + error.message);
  }
};

const deleteComment = async (commentId) => {
  await Comment.findByIdAndDelete(commentId); 
};


module.exports = {
    createComment,
    updateComment,
    getAllComments,
    deleteComment
};
