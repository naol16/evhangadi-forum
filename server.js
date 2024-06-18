const express=require("express")
const app=new express()
const port= process.env.port || 6214
const user=require("./routes/user")
const question=require("./routes/question")
const authmiddle=require("./middleware/authmiddleware")
const answer= require("./routes/answer")
app.use(express.json())
app.use('/api/user',user)
app.use('/api/question',question)

app.use('/api/answer',answer)
app.listen(port,(err)=>{
    if(err){
        console.log(err.message)
    }
   else{
    console.log("sucessfully done");
   }
})