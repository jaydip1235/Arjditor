const router=require('express').Router();
const {uploadCode,getCode}=require('../controllers/code');

router.post('/uploadcode',uploadCode);

router.get('/getcode/:codeId',getCode);

module.exports=router;