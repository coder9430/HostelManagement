const mongoose=require("mongoose");
const validate=require("validater");
const noticeSchema=new mongoose.Schema(
    {
        noticeId:
        {
            type:Number,
            required:true
        },
        date:
        {
            type:Date,
            required:true
        },
        by:
        {
            type:String,
            require:true
        },
        description:
        {
            type:String,
            require:true
        }
    }
)
const noticeModel=new mongoose.model('Notice',noticeSchema)
module.exports=noticeModel;