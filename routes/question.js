const express=require("express")
const authmiddle=require("../middleware/authmiddleware")
const {allquestion,questions}=require("../controller/questioncontroller")
const router=express.Router()
router.get('/all',
allquestion)
router.post('/askqustion',questions)
module.exports=router