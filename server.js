const express=require("express")
const app=new express()
const port= process.env.port || 4321
const user=require("./routes/user")

app.use('/api/user',user)
app.listen(port,(err)=>{
    if(err){
        console.log(err.message)
    }
   else{
    console.log("sucessfully done");
   }
})