const express=require("express")
const authmiddle=require("../middleware/authmiddleware")
const router=express.Router()
const{register ,login ,checked}=require('../controller/usercontroller')
router.post('/login',login)
router.post('/register',register
)
router.get('/checker',authmiddle,checked)
module.exports=router;

// http://localhost:6214/api/user/login