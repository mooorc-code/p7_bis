// Imports
const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/comment');
const auth = require ('../middleware/auth');

//Routes comments
router.post('/:post_id', auth, commentCtrl.createComment);
router.get('/:post_id', auth, commentCtrl.listComment);
router.put('/:post_id/:id', auth, commentCtrl.updateComment)
router.delete('/:post_id/:id', auth, commentCtrl.deleteComment);


module.exports = router;
