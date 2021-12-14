// Imports
const express = require('express');
const router = express.Router();
const limiter = require('../middleware/limiter');
const password = require('../middleware/password')
const validator = require('../middleware/emailValidator');
const userCtrl = require('../controllers/user');

// Routes users
router.post('/signup', password, validator,userCtrl.signup);
router.post('/login', limiter, userCtrl.login);

module.exports = router;
