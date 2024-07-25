const { createFolder, getFolder, deleteFolder } = require('../controllers/folder');

const express = require('express');
const router = express.Router();
const authmiddleware = require('../middlewares/authMiddleware');

router.post('/create',authmiddleware, createFolder);
router.get('/get',authmiddleware, getFolder);
router.delete('/delete/:folderId',authmiddleware, deleteFolder);

module.exports = router;