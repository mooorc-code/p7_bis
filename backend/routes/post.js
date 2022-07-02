// Imports
const express = require( 'express' );
const router = express.Router();
const postCtrl = require( '../controllers/post' );
const likesCtrl = require('../controllers/likes');
const auth = require( '../middleware/auth' );
const multer = require( '../middleware/multer-config');

//Routes posts
router.post( '/', auth, multer, postCtrl.createPost );
router.get( '/post', auth, postCtrl.listPost );
router.put( '/post/update/', auth, multer, postCtrl.updatePost )
router.delete( '/post/delete/:id', auth, postCtrl.deletePost );
router.post('/post/likes/:id', auth, likesCtrl.likePost);
router.delete('/post/likes/:postId', auth, likesCtrl.dislikePost);



module.exports = router;
