// const express = require("express");
// //creating a new studentRouter
// const studentRouter =new express.Router();
// const Student =require('../models/students');
// //2.we need to define the studentRouter
// studentRouter.post("/students",async(req,res)=>
//     {
//         try
//         {
//         console.log(req.body)
//         const user=new Student(req.body);
//         const createUser=await user.save();
//         res.status(201).send(createUser);
    
//         }catch(e)
//         {
//             res.status(400).send(e);
//         }
//     })
//     studentRouter.get("/students",async(req,res)=>
//     {
//         try{
//            const studentsData=await Student.find();
//            res.send(studentsData);
//         }catch(e)
//         {
//              res.send(e);
//         }
//     })
//     studentRouter.get("/student:id",async(req,res)=>
//     {
//         try{
//          const _id=req.params;//url se id agal  kr ke denga
//          const studentData=Student.findById(_id);
//          if(!studentData)
//          {
//             return res.status(404).send();
//          }
//          else{
//             res.send(studentData);
//          }
         
//         }catch(e)
//         {
//           res.status(500).send(e);
//         }
//     })
//     //you do not need expess.json( and express.urlencoded())
//     //for get Requests or delete requests .we only need it foe 
//     //post and put req.
//     //express.json() is mathod inbuilt in express to recognize the incoming 
//     //request object as a json object the method is called as the middleware 
//     //in your studentRouterlication using code :studentRouter.use(expess.json())
//     studentRouter.delete("/students/:id",async(req,res)=>
//     {
//         try{
//           const deleteStudent = await Student.findByIdAndDelete(req.params.id)
//           if(!req.params.id)
//           {
//             return res.status(400).send();
//           }res.send(deleteStudent);
          
//         }catch(e)
//         {
//             res.status(500).send(e);
//         }
//     })
//     studentRouter.patch("/students/:id",async(req,res)=>
//     {
//         try
//         {
//             const_id = req.params.id;
//             const updateStudent=await Student.findByIdAndUpdate(_id,req.body,{new:true});
//             res.send(updateStudent);
//         }catch(e)
//         {
//             res.status(404).send(e);
//         }
//     })
// module.exports=studentRouter;
