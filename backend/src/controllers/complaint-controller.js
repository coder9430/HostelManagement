const complaintSchema=require('../models/complaint');
const addComplaint=async(req,res)=>
{
    try
    {
    console.log(req.body)
    const complaint=new complaintSchema(req.body);
    const createcomplaint=await complaint.save();
    res.status(201).send(createcomplaint);
        
    }catch(e)
    {
    res.status(400).send(e);
    }
}
const getComplaintOfStudent=async(req,res)=>
{
        try{
         const _id=req.params;//url se id agal  kr ke denga
         const complaintData=complaintSchema.findById(_id);
         if(!complaintData)
         {
            return res.status(404).send();
         }
         else{
            res.send(complaintData);
         }
         
        }catch(e)
        {
          res.status(500).send(e);
        }
}
const deleteComplaintOfStudent=async(req,res)=>
{
        try{
          const deletecomplaint = await complaint.findByIdAndDelete(req.params.id)
          if(!req.params.id)
          {
            return res.status(400).send();
          }res.send(deletecomplaint);
          
        }catch(e)
        {
            res.status(500).send(e);
        }
}
const updateComplaintOfStudent=async(req,res)=>
{
        try
        {
            const_id = req.params.id;
            const updatecomplaint=await complaintSchema.findByIdAndUpdate(_id,req.body,{new:true});
            res.send(updatecomplaint);
        }catch(e)
        {
            res.status(404).send(e);
        }
}
module.exports={addComplaint,getComplaintOfStudent,deleteComplaintOfStudent,updateComplaintOfStudent}