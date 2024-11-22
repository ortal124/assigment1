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

const updateComment = async (req, res) => {
    try {
      const commentId = req.params.commentId; 
      const { content, senderId } = req.body; 
  
      if (!content || !senderId) {
        return res.status(400).json({ message: 'Content and sender are required for update' });
      }
  
      const updatedComment = await commentService.updateComment(commentId, content, senderId);
  
      res.json(updatedComment);
    } catch (error) {
      res.status(404).json({ message: 'Error comment not found with this ID', error: error.message });
    }
  };
module.exports = {
    createComment,
    updateComment
}; 