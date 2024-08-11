const validate=(schema)=>async(req,res,next)=>
{
    try{
        const parseBody=await schema.parseAsync(req.body);
        req.body=parseBody;
        next();
    }catch(e)
    {
        const status=422;
        const message="Fill the inputs properly"
        const extraDetails=e.errors[0].message;  
        const error={
            status,
            message,
            extraDetails
        };
        next(error);
    }
}
module.exports=validate;