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

module.exports = {
    createComment,
    updateComment
};
