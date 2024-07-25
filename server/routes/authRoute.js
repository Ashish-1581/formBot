const express = require('express');
const { register, login, updateUserDetails }= require('../controllers/auth');
const router = express.Router();


router.post('/register', register);
router.post('/login', login);
router.post('/update-user', updateUserDetails);

module.exports = router;