const User=require('../models/user')
const bcrypt=require("bcryptjs");
const home=async (req,res)=>
{
    try{
        res.status(200).send("hello")
    }catch(e)
    {
        console.log(e);
    }
}
const register=async(req,res)=>
{
    try
    {
        const {email,password}=req.body;
        console.log(req.body)
        const userExist= await User.findOne({email:email});
        if(userExist)
        {
            return req.status(400).json({msg:"email already exist"});
        }
        const saltRound=10;
        const hash_password=await bcrypt.hash(password,saltRound);
        console.log(hash_password)
        const userCreated=await User.create({email,password:hash_password});
        console.log(userCreated)
        res.status(201).json({msg:"registration successful",token:await userCreated.generatToken(),user:userCreated._id.toString()});
        //the id must be conveted to the string for the compactibility and the jwt token is also reperesnt as the string
    }catch(e)
    {
        console.log(e)
    }
}
const login=async(req,res)=>
{
    try{
        const {email,password}=res.body;
        const userExist=await User.findOne({email});
        if(!userExist)
        {
            return res.status(400).json({message:"Invalid Creadentials"});
        }
        const user=await bcrypt.compare(password,userExist.password);
        if(user)
        {
            res.status(200).json(
                {
                    msg:"Login Successful",
                    token:await userExist.generateToken(),
                    userId:userExist._id.toString()
                }
            );
        }
        else{
            res.status(401).json({message:"Invalid email or password"});
        }

    }catch(e)
    {
      res.status(500).json("internal server error");
    }


}
//to send the user data
const user =async(req,res)=>
{
    try{
        const userData=req.user;
        console.log(userData);
        return res.status(200).json({userData});
    }catch(e)
    {
        console.log(`error from the user route ${error}`)
    }

}
module.exports={home,register,login,user};