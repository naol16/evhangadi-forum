import { Routes, Route, useNavigate, Await } from "react-router-dom";
import Landing from "./pages/landing/landing";
import SignUppage from "./pages/signuppage/signuppage";
import Home from "./pages/home/home";
import One from "./pages/one/one";
import Askquestion1 from "./pages/askquestion/askquestion";
import axiosUrl from "./axiosConfig";
import React from "react";
import { useEffect, useState,createContext} from "react";
 export const context=createContext();

function App() {
   
  const [user,setuser]=useState([]);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  async function checker() {
  try {
   const { data}=await axiosUrl.get("/user/checker", {
       headers: {
          Authorization: "Bearer "+token,
        },
      });
      setuser(data);
      console.log(data);


    } catch (err) {
      console.log(err.response);
      navigate("/");
    }
  }

  useEffect(() => {
    checker();
   }, []);

  return (
    <>   

      <context.Provider value={{user,setuser}}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/SignUp" element={<SignUppage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/askquestion" element={<Askquestion1 />} />
        <Route path="/questions/myanswers" element={<One />} />
      
      </Routes>
      </context.Provider>
    </>
  );
}

export default App;

