const express = require('express');
const router = express.Router();
const { setSubmissions, getSubmissions } = require('../controllers/analytics');
const authmiddleware = require('../middlewares/authMiddleware');

router.post('/set/:formId',setSubmissions);
router.get('/get/:formId',authmiddleware, getSubmissions);

module.exports = router;