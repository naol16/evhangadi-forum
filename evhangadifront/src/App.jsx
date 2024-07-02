import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/landing";
import SignUppage from "./pages/signuppage/signuppage";
// import Signup from "./Components/SignUp/Signup";
// import Register from "./Components/register/Register";
import Home from "./pages/home/home";
// import Singlequetion from "./page/singleQuestion/Singlequetion";
import Askquestion1 from "./pages/askquestion/askquestion";
// import Answer from "./page/answerEntry/Answer";
import React from "react";
import { useEffect, useState, createContext } from "react";
// import { useNavigate } from "react-router-dom";
// import axiosUrl from './axiosConfig'

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Landing />} />
         <Route path="/SignUp" element={<SignUppage/>} />
  
         <Route path="/Home" element={<Home/>} />
         <Route path="/askquestion" element={<Askquestion1 />}/>
         {/* <Route path="/answerpage" element={<Answer />} /> */}
        {/* // <Route */}
        {/* //   path="/questions/myanswers/:questionId"
        //   element={<Singlequetion />}
        // />  */}
      </Routes>
    
    </>
  );
}

export default App;
