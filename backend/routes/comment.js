// Imports
const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/comment');
const auth = require ('../middleware/auth');

//Routes comments
router.post('/:postId', auth, commentCtrl.createComment);
router.get('/:postId', auth, commentCtrl.listComment);
router.put('/:id/:userId', auth, commentCtrl.updateComment)
router.delete('/:id', auth, commentCtrl.deleteComment);


module.exports = router;
