const express=require("express");
const complaintRoute=express.Router();
const complaintController=require("../controllers/complaint-controller")
    complaintRoute.post("/complaint",complaintController.addComplaint)
    complaintRoute.get("/complaint:id",complaintController.getComplaintOfStudent)
    complaintRoute.delete("/complaint/:id",complaintController.deleteComplaintOfStudent)
    complaintRoute.patch("/complaint/:id",complaintController.updateComplaintOfStudent)
module.exports=complaintRoute;