import { CgProfile } from "react-icons/cg";
import React, { useState, useEffect, useRef, useContext } from "react";
import "./onequestion.css";
import { Link, useParams, useLocation } from "react-router-dom";
import axiosUrl from "../../axiosConfig";
import { SlLike, SlDislike } from "react-icons/sl";
import { context } from "../../App";

function Onequestion() {
  const { user } = useContext(context);
  const [questions, setQuestions] = useState([]);
  const location = useLocation();
  const questionId = location.state.questionId;

  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchAnswers() {
      try {
        const token=localStorage.getItem("token");
        const { data } = await axiosUrl.get(`/answer/allanswer/${questionId}`, {headers: {
          Authorization: `Bearer ${token}`,
        }});
        setAnswers(data.answer);
        console.log(data.answer);
      } catch (error) {
        console.error("Error fetching answers:", error);
      }
    }
    fetchAnswers();
  }, [questionId]);

  useEffect(() => {
    async function fetchQuestion() {
      
      try {
        const token=localStorage.getItem("token");
        const { data } = await axiosUrl.get(
          `/answer/questionanswer/${questionId}`, {headers: {
            Authorization: `Bearer ${token}`}
          },
        );
        setQuestion(data.question);
        console.log(data.question);
      } catch (error) {
        console.error("Error fetching question:", error);
      }
    }
    fetchQuestion();
  }, [questionId]);

  const answerText = useRef();
  const token=localStorage.getItem("token");

  async function handleAnswerSubmit() {
    const answerTextValue = answerText.current.value;
    try {
      const askload = { answer: answerTextValue, userid: user.userid };
      const response = await axiosUrl.post(
        `/answer/answer/${questionId}`,
        askload, {headers: {
          Authorization: `Bearer ${token}`,
        }}
      );
      alert("Posted answer");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to submit answer. Please try again later.");
    }
  }

  return (
    <div className="hol">
      <div className="generaly">
        <div className="both">
          <div className="question">
            <h2>Questions</h2>
          </div>
        </div>
        <div className="siglequestion">
          <div className="questionlist">
            <div className="icon">
              <div className="profile">
                <CgProfile size={60} />
                <h4>{question.username}</h4>
              </div>
              <div>
                <h3>Title: {question.title}</h3>
                <p>Description: {question.description}</p>
              </div>
            </div>
            <h5>Answers {answers.length}</h5>
          </div>
        </div>
        <div className="student">
          <h2> Answers from the Students</h2>
        </div>
        {answers.length > 0 ? (
          answers.map((answer, index) => (
            <div key={index}>
              <div className="answerlist">
                <div className="profile">
                  <CgProfile size={60} />
                  <h4>{answer.username}</h4>
                </div>
                <div className="answer">
                  <p>{answer.answer}</p>
                </div>
              </div>
              <div className="like">
                <h5 style={{ paddingRight: "80px" }}>
                  <SlLike />
                </h5>
                <h5>
                  <SlDislike />
                </h5>
              </div>
            </div>
          ))
        ) : (
          <div className="no">
            <p> There are no answers posted for this question.</p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOBDRDTfHCXXs5jivqdf3raoMQLXpWrPKoig1eLA1Z0rH7Yhrxsz4AM9FFNyHnhsbWnKI&usqp=CAU"
              alt="No answers"
            />
          </div>
        )}
        <div className="your">
          <h2>Your Answer Post Here</h2>
        </div>
        <form
          className="answer__form"
          onSubmit={(e) => {
            e.preventDefault();
            handleAnswerSubmit(questionId);
          }}
        >
          <textarea
            ref={answerText}
            cols="30"
            rows="10"
            placeholder="Answer"
          ></textarea>
          <br />
          <button type="submit">Post your Answer</button>
        </form>
      </div>
    </div>
  );
}

export default Onequestion;
