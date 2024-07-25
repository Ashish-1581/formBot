const express = require('express');
const router = express.Router();
const { setSubmissions, getSubmissions } = require('../controllers/analytics');

router.post('/set/:formId', setSubmissions);
router.get('/get/:formId', getSubmissions);

module.exports = router;