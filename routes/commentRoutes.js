const express = require('express');
const router = express.Router();
const commentController = require('../controller/commentController');

router.post('/', commentController.createComment);
router.put('/:commentId', commentController.updateComment);
router.get('/', commentController.getAllComments);
router.get('/post/', commentController.getCommentsByPostId);

module.exports = router;

