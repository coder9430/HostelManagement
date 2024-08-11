const mongoose=require("mongoose");
const validate=require("validater");
const leaveSchema=new mongoose.Schema(
    {
        studentId:
        {
            type:Number,
            require:true,
        },
        leaveId:
        {
              type:Number,
              require:true,
              unique:true
        },
        date:
        {
             fromDate:
             {
                type:Date,
                require:true,
             },
             toDate:
             {
                type:Date,
                require:true
             }
        },
        destination:
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
const leaveModel=new mongoose.model('Leave',leaveSchema)
module.exports=leaveModel;