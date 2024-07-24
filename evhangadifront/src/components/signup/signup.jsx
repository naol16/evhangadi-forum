import React, { useContext } from "react";
import "./signup.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axiosUrl from "../../axiosConfig";
import { context } from "../../App";

function Signup() {
  useContext(context)
  const navigate=useNavigate();
  const username = useRef();
  const firstname = useRef();
  const lastname = useRef();
  const useremail = useRef();
  const userpassword = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const usernameValue = username.current.value;
    const firstnameValue = firstname.current.value;
    const lastnameValue = lastname.current.value;
    const useremailValue = useremail.current.value;
    const userpasswordValue = userpassword.current.value;

    if (
      !usernameValue ||
      !firstnameValue ||
      !lastnameValue ||
      !useremailValue ||
      !userpasswordValue
    ) {
      alert("Please provide all information");

      return;
    } 
    else {

    try{
      const data=await axiosUrl.post('/user/register',{ username:usernameValue,
        
        firstname:firstnameValue,
        lastname:lastnameValue,
        email:useremailValue,
        password:userpasswordValue
})
    console.log(data);
    alert("successfully registered");
    navigate("/");
    }
    catch(err){
      console.log(err);
      alert("some thing went wrong");
    }

      
      console.log(usernameValue);
      console.log(firstnameValue);
      console.log(lastnameValue);
      console.log(useremailValue);
      console.log(userpasswordValue);
      
    }
  }

  return (
    <div className="mainwarpper">
      <div className="card">
        <h1>join the network</h1>
        <p>
          already have account ?<Link to="/"> sign in</Link>
        </p>
        <div>
          <form className="form1" onSubmit={handleSubmit}>
            <input
              placeholder="Your email"
              name="email"
              type="email"
              id="email"
              className="input1"
              ref={useremail}
            ></input>
            <br />
            <div className="twoside">
              <div>
                <input
                  placeholder="First name"
                  name="firstname"
                  id="firstname"
                  className="input3"
                  type="text"
                  ref={firstname}
                ></input>
              </div>
              <div>
                <input
                  placeholder="Last name"
                  name="lastname"
                  id="lastname"
                  className="input3"
                  ref={lastname}
                ></input>
              </div>
            </div>
            <input
              placeholder="Username"
              name="username"
              id="username"
              className="input1"
              ref={username}
            ></input>
            <input
              placeholder="Your password"
              name="password"
              id="password"
              className="input1"
              ref={userpassword}
            ></input>
            <button className="input3" type="submit">
              Agree and Join
            </button>
            <br />
            <p>
              I agree <a href="#">to the privacy</a> and{" "}
              <a href="#">terms and services</a>
            </p>
            <p>
              <Link to="/">Already have an account</Link>
            </p>
          </form>
        </div>
      </div>
      <div className="description">
        <a href="#">About</a>
        <h1>Evangadi Networks Q&A</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi
          risus, molestie in risus nec, tincidunt consectetur nisl.
        </p>
        <p>
          Sed dignissim sapien in auctor fringilla. Fusce ut purus mauris. Ut et
          tristique purus, nec hendrerit tellus. Praesent in dignissim ante.
          Fusce hendrerit augue sed facilisis cursus, feugiat vel nisl ut,
          aliquam finibus massa.
        </p>
        <p>
          Vivamus sodales lacus ut lacus mollis, sit amet vehicula eros
          malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum tincidunt erat.
        </p>
        <button className="btn3">How it works</button>
      </div>
    </div>
  );
}

export default Signup;
