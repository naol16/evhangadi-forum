const jwt=require( "jsonwebtoken")
async function authMiddle(req,res,next){
    const file=req.headers.authorization
    if (!file){
        return res.status(400).json({msg:"error"})
    }
    try{
        const {user_name,user_id}=jwt.verify(file,"webifay")
        req.user={user_name,user_id}
        next()
        return res.status(200).json({data})
        

    }
    catch(error){
        return res.status(400).json({msg:error.message})

    }
}

module.exports=authMiddle