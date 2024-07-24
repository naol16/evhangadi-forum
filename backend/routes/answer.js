// const express=require("express")
// const router=express.Router()
// const {answerall,answer,allanswers}=require("../controller/answercontroller")
// // it is the router for showing all the answers
// router.get('/allanswer/:questionid',allanswers)
// //this one is for answering
// router.post('/answer/:questionid',answer)
// //this one to get the answer with in specific username and question
// router.get('/questionanswer/:questionid',answerall)
// module.exports=router;
const express = require("express");
const router = express.Router();
const { answerall, answer, allanswers } = require("../controller/answercontroller");

// Correctly defining the route with URL parameters
router.get('/allanswer/:questionid', allanswers);
router.post('/answer/:questionid', answer);
router.get('/questionanswer/:questionid', answerall);



module.exports = router;
