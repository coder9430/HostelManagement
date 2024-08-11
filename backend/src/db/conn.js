const mongoose = require("mongoose");
const URI=process.env.MONGODB_URI;
const connectDb=async()=>
{
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
         });
        console.log("connection to database is successfully done");

    }catch(e)
    {
        console.error("database conncection failed",e);
        process.exit(0);
    }
}
module.exports=connectDb;
