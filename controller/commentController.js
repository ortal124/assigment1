const commentService = require('../services/commentService');

const createComment = async (req, res) => {
    try {
      const { content, senderId, postId} = req.body;
      const newComment = await commentService.createComment(content, senderId, postId);
      res.status(201).json(newComment);
    } catch (error) {
      res.status(500).json({ message: 'Error creating comment', error: error.message });
    }
  };

module.exports = {
    createComment
}; 