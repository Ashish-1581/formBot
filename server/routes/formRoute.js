const express = require('express');
const router = express.Router();
const { createForm, getFormByFolder, getFormNotInFolder, getSingleForm, updateForm, deleteForm } = require('../controllers/form');
const authMiddleware = require('../middlewares/authMiddleware'); 


router.post('/create', authMiddleware, createForm);


router.get('/get/by-folder/:folderId', authMiddleware, getFormByFolder);

router.get('/get/no-folder', authMiddleware, getFormNotInFolder);


router.get('/get/:id', getSingleForm);


router.put('/update/:id', authMiddleware, updateForm);


router.delete('/delete/:id', authMiddleware, deleteForm);

module.exports = router;