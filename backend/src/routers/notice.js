const express=require("express");
const noticeRoute=express.Router();
const noticeController=require("../controllers/notice-controller")

noticeRoute.get('/notice',noticeController.getNotice)
   
module.exports=noticeRoute;