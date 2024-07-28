const { createFolder, getFolder, deleteFolder,getFolderById } = require('../controllers/folder');

const express = require('express');
const router = express.Router();
const authmiddleware = require('../middlewares/authMiddleware');

router.post('/create',authmiddleware, createFolder);
router.get('/get',authmiddleware, getFolder);
router.delete('/delete/:folderId',authmiddleware, deleteFolder);
router.get('/get/:folderId',authmiddleware, getFolderById);

module.exports = router;