const{setTheme,getTheme}=require('../controllers/theme');

const express=require('express');
const router=express.Router();
router.post('/set',setTheme);
router.get('/get',getTheme);

module.exports=router;
