
const express=require("express")
const router=express.Router()
const{register ,login ,checked}=require('../controller/usercontroller')
router.post('/login',login)
router.post('/register',register
)
router.get('/checker',checked
)
module.exports=router;