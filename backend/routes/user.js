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
router.post('/signup',multer, password, validator,userCtrl.signup);
router.post('/login', limiter, userCtrl.login);
router.post('/user', auth, userCtrl.getUserInfosById );
router.put('/user/update', multer, userCtrl.updateUser);
router.delete('/user/delete/:id',auth, userCtrl.deleteUser);
router.post('/user/:id', auth, userCtrl.updateUser);
router.put('/userPassword', userCtrl.updatePW)

module.exports = router;
