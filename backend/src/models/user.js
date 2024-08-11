const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const userSchema=new mongoose.Schema(
    {
        email:
        {
            type:String,
            required:true,
            unique:[true,"Email id already present"],
            validate(value)
            {
                if(!validator.isEmail(value))
                {
                    throw new Error("Invalid Email");
                }
            }
        },
        password:
        {
            type:String,
            required:true
        }
    }
)
userSchema.methods.generateToken= async function(){
    //here we are creating token and the return the to the controller
    try{
       return jwt.sign({
        userId:this._id.toString(),
        email:this.email,
        //on geting the token we find get only these field
       
       },process.env.JWT_KEY,
    {
        expiresIn:'30d'
    })
    }catch(e)
    {
        console.log(e);
    }

}
const User=new mongoose.model("User",userSchema);
module.export=User;