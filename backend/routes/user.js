// Imports
const express = require('express');
const router = express.Router();
const limiter = require('../middleware/limiter');
const password = require('../middleware/password')
const validator = require('../middleware/emailValidator');
const auth = require( '../middleware/auth' );
const userCtrl = require('../controllers/user');
const multer = require( '../middleware/multer-config');

// Routes users
router.post('/signup', password, validator,userCtrl.signup);
router.post('/login', limiter, userCtrl.login);
router.post('/user', userCtrl.getUserInfosById );
router.put('/user/:id',auth, multer, userCtrl.updateUser);
router.delete('/user/:id',auth, userCtrl.deleteUser);

module.exports = router;
