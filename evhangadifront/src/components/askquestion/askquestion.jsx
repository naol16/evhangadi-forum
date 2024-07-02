import React, { useState, useRef, useEffect } from "react";
import "./askquestion.css"
// import Layout from "../../Components/Layout/Layout";
import axiosUrl from "../../axiosConfig";
import { useNavigate } from "react-router-dom";
function Askquestion() {
  const navigate = useNavigate();
  const title = useRef();
  const description = useRef();
  async function submitQuestion(e) {
    e.preventDefault();
    const titlevalue = title.current.value;
    const descriptionvalue = description.current.value;
    if (!titlevalue || !descriptionvalue) {
      alert("Question title or Discrtiption can not be empty");
      return;
    }
    
    try {
      const askload = {
        title: titlevalue,
        description: descriptionvalue,
      };
      await axiosUrl.post("/question/askquestion", askload);
      alert("Question asked");
      navigate("/Home", { msg: "you have poste new queston" });
    } catch (error) {}
  }
  return (
    <>
      
        <div className="container">
          <div className="steps">
            <h1>Steps to write a good question</h1>
            <li>Summerize your problem in a one-line title.</li>
            <li>Describe your problem in more detail.</li>
            <li>Describe what you tried and what you expected to happen.</li>
            <li>Review your Question and post it to the site.</li>
          </div>
          <div className="box">
            <div className="title">
              <h2>Ask a public question</h2>
              <h3>Go to Question page</h3>
            </div>
            <div className="input">
              <form onSubmit={submitQuestion}>
                <input ref={title} type="title" placeholder="title" />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="description"
                  ref={description}
                ></textarea>

                <br />
                <button type="submit">Post your Question</button>
              </form>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default Askquestion;