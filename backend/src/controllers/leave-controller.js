const leaveSchema=require("../models/leaves")
const applyLeave=async(req,res)=>
{
        try
        {
        console.log(req.body)
        const leave=new leaveSchema(req.body);
        const createleave=await leave.save();
        res.status(201).send(createleave);
    
        }catch(e)
        {
            res.status(400).send(e);
        }
}
const getAllLeaveOfStudent=async(req,res)=>
{
        try{
         const _id=req.params;//url se id agal  kr ke denga
         const leaveData=leaveSchema.findById(_id);
         if(!leaveData)
         {
            return res.status(404).send();
         }
         else{
            res.send(leaveData);
         }
         
        }catch(e)
        {
          res.status(500).send(e);
        }
}
const deleteLeaveOfStudent=async(req,res)=>
{
        try{
          const deleteleave = await leave.findByIdAndDelete(req.params.id)
          if(!req.params.id)
          {
            return res.status(400).send();
          }res.send(deleteleave);
          
        }catch(e)
        {
            res.status(500).send(e);
        }
}
const updateLeaveOfStudent=async(req,res)=>
{
        try
        {
            const_id = req.params.id;
            const updateleave=await leaveSchema.findByIdAndUpdate(_id,req.body,{new:true});
            res.send(updateleave);
        }catch(e)
        {
            res.status(404).send(e);
        }
}
module.exports={applyLeave,getAllLeaveOfStudent,deleteLeaveOfStudent,updateLeaveOfStudent}
