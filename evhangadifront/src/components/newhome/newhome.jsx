import React, { useEffect, useState, useContext } from "react";
import "./home.css";
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
// import { AppState } from "../../App";
import  axiosUrl from "../../axiosConfig";
import { context } from "../../App";

function QuestionList() {
   const { user }=useContext(context)
   console.log(user.userid);
     
    
  const [questions, setQuestions] = useState([]);
  const token=localStorage.getItem("token");
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const { data } = await axiosUrl.get("/question/all", {headers: {
          Authorization: `Bearer ${token}`,
        }});
        setQuestions(data.questions);
        console.log(data.username);
        console.log(data.questions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    }

    fetchQuestions();
  }, []);

 
  return (
    <div className="hol">
      <div className="outer">
        <Link to="/askquestion">
          <button>Ask Question</button>
        </Link>
      </div>
      <div className="question">
        <h2>welcome:</h2>
        <h2>{user.username}</h2>
      </div>
      <ul>
        {questions.length > 0 &&
          questions.map((question, index) => (
            <div key={index} className="questionlist">
              {/* <Link to={{pathname:'/questions/myanswers',state:{ questionId: question.questionid}}}> */}
              <Link
      to="/questions/myanswers"
        state={{ questionId:question.questionid}}
    >
                <div className="icon">
                  <div className="profile">
                    <CgProfile size="70" />
                    <h3>{question.username}</h3>
                    {/* <h2>{data1.username}</h2> */}
                  </div>
                  <h4>Title: {question.title}</h4>
                </div>
                <h5 className="arrows">
                  <RiArrowRightDoubleFill size={35} />
                </h5>
              </Link>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default QuestionList;
