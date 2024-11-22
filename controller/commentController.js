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

const getAllComments = async (req, res) => {
    try {
        const comments = await commentService.getAllComments();
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching comments', error: error.message });
    }
};

const getCommentsByPostId = async (req, res) => {
  try {
      const postId = req.query.postId;
      const comments = await commentService.getCommentsByPostId(postId);
      res.json(comments);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching comments by post id', error: error.message });
  }
}
  
const deleteComment = async (req, res) => {
  try {
    const commentId = req.params.commentId; 
    await commentService.deleteComment(commentId); 
    res.status(200).json({ message: 'Comment deleted successfully' }); 
  } catch (error) {
    res.status(404).json({ message: 'Error deleting comment', error: error.message });
  }
};

module.exports = {
    createComment,
    updateComment,
    getAllComments,
    getCommentsByPostId,
    deleteComment
};