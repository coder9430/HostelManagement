const {z}=require("zod");

const signupSchema=z.object({
    email:z.string({required_error:"Email is required"}).trim().email({message:"Invalid email address"})
    .min(3,{message:"Email must be at least of 3 characters"})
    .max(255,{message:"Email must not be more than 255 characters"}),
    password:z.string({required_error:"Password is required"})
    .min(3,{message:"Password must be at least of 6 characters"})
    .max(1024,"Password can't be greater than 1024 chnaracters"),
})
module.exports= signupSchema