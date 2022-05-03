// Imports
const express = require( 'express' );
const router = express.Router();
const postCtrl = require( '../controllers/post' );
const auth = require( '../middleware/auth' );
const multer = require( '../middleware/multer-config');

//Routes posts
router.post( '/', auth,multer, postCtrl.createPost );
router.get( '/post', auth, postCtrl.listPost );
router.put( '/post/:id', auth, multer, postCtrl.updatePost )
router.delete( '/post/:id', auth, postCtrl.deletePost );

module.exports = router;
