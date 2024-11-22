const Comment = require('../models/commentModel');

const createComment = async (content, senderId, postId) => {
    const newComment = new Comment({
      content,
      senderId,
      postId
    });
    return await newComment.save();
};

module.exports = {
    createComment
};
