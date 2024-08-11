const express=require("express")
const auth_router=express.Router();
const authController=require('../controllers/auth-controller')
const signupSchema=require("../validators/auth-validator")
const validate=require("../middleware/validate-middleware")
const authMiddleware=require('../middleware/auth-middleware')
console.log("dfd")
auth_router.route("/").get(authController.home)
console.log("b")
auth_router.route("register").post(validate(signupSchema ),authController.register)
auth_router.route("/login").post(validate(signupSchema),authController.login)
//for the authentiction 
auth_router('/user').get(authMiddleware,authController.user)
module.exports=auth_router;
