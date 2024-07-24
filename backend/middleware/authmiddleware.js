const jwt=require( "jsonwebtoken")
async function authMiddle(req,res,next){
    const file=req.headers.authorization
    if (!file || !file.startsWith('Bearer')){
        return res.status(400).json({msg:"error"})
    }
    const token=file.split(' ')[1]
    // console.log(file);
    // console.log(token);
    
    try{
        const {user_name,user_id}=jwt.verify(token,"webifay")
        req.user={user_name,user_id}
        next()

        

    }
    catch(error){
        return res.status(400).json({msg:error.message})

    }
}

module.exports=authMiddle