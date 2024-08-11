const mongoose=require("mongoose");
const validate=require("validater");
const complaintSchema=new mongoose.Schema(
    {
        studentId:
        {
            type:Number,
            require:true
        },
        complaintId:
        {
            type:Number,
            require:true,
            unique:true
        },
        date:
        {
            type:Date,
            require:true,
        },
        roomNo:
        {
            type:Number,
            require:true
        },
        complaintCat:
        {
            type:String,
            require:true
        },
        description:
        {
            type:String,
            require:true
        },
        status:
        {
            type:String,
            require:true
        }

    }
)
const complaintModel=new mongoose.model('Complaint',complaintSchema)
module.exports=complaintModel;

//pahle backend dekho
// database connect nhi ho raha he