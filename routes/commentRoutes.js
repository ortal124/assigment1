const express = require('express');
const router = express.Router();
const commentController = require('../controller/commentController');

router.post('/', commentController.createComment);
router.get('/', commentController.getAllComments);

module.exports = router;

