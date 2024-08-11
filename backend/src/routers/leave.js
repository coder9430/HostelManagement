const express=require("express");
const leaveRoute=express.Router();
const leaveController=require("../controllers/leave-controller")
    leaveRoute.post("/leave",leaveController.applyLeave)
    leaveRoute.get("/leave:id",leaveController.getAllLeaveOfStudent)
    leaveRoute.delete("/leave/:id",leaveController.deleteLeaveOfStudent)
    leaveRoute.patch("/leave/:id",leaveController.updateLeaveOfStudent)
module.exports=leaveRoute;