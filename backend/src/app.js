require("dotenv").config();
const express= require("express");
const cors=require("cors");
const auth_router=require('./routers/auth-router')
const complaintRoute=require('./routers/complaint');
const leaveRoute=require('./routers/leave');
const noticeRoute=require("./routers/notice");
const connectDb=require("./db/conn");
const errorMiddleware = require("./middleware/error-middleware");
const app=express();
require("./db/conn");
const port =process.env.PORT||3000;
//let's handel the cors policy
const corsOptions=
{
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true
}
app.use(cors(corsOptions));
app.use(express.json());//middlewire
app.use("/",auth_router);
app.use("/complaint",complaintRoute);
app.use("/leave",leaveRoute);
app.use("/notice",noticeRoute);
app.use(errorMiddleware);

connectDb().then(()=>
{
    app.listen(port,()=>
    {
            console.log(`connection is setup at ${port}`);
    })//without any collection a database is not visible
}
)
