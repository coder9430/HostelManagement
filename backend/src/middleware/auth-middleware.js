const jwt=require("jsonwebtoken")
const userModel=require("../models/user")
const authMiddleware=async(req,res,next)=>
{
   const token =req.header('Authorization');
   if(!token)
   {
    return res.status(401).json({message:"Unauthorized HTTP,token not provided"})
   }
   //we have to remove the Bearer and the space form the token
   const jwtToken=token.replace("Bearer","").trim();
   try{

    const isVerified=jwt.verify(jwtToken,process.env.JWT_KEY)
    const userData=await User.findOne({email:isVerified.email}).select({password:0})
    req.user=userData;
    req.token=token;
    req.userId=userData._id;
    req.userID=userData._id;
    next();
   }catch(e)
   {
      res.status(400).json({message:"Unauthorized .Invalid token"})
   }

}
module.exports=authMiddleware;