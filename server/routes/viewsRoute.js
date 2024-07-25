const{getViews,setViews}=require('../controllers/views');
const express=require('express');
const router=express.Router();
router.get('/get',getViews);
router.post('/set',setViews);

module.exports=router;