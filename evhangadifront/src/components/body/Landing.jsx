import React from 'react'
import "./landingpage.css"
import { useState ,useRef,use} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axiosUrl from '../../axiosConfig'


function Signin() {
  const navigate=useNavigate()
 const useemail=useRef()
 const  usepassword=useRef();
  async function handlesubmit(e) {
    e.preventDefault();
    const email=useemail.current.value;
    const password=usepassword.current.value;
    console.log(email);
    console.log(password);
    try {
      const { data } = await axiosUrl.post("/user/login", {
        email: email,
        password: password,
      });

      alert("login succesfull. please Home");
      console.log(data);

      // localStorage.setItem("token", data.token);

        navigate("/Home");
    } catch (error) {
      console.log(error);
      alert("some thing wrong");
    }


    } 

  
  return (
    
    <div className="mainwarpper">
        <div className="card">
           <h1>Login to your account</h1>
            <p>Don't have an account?<Link to="/SignUp">create a new account</Link></p>
            <div>
            <form className="form1" onSubmit={handlesubmit}>
              <input placeholder='your email' name="email" id="email" className="input1" ref={useemail} ></input><br/>
              <input placeholder='your password' name="password" id="password" className="input1" ref={usepassword}></input>
              <input className="input2" value="submit" type="submit"/><br/>
              <p className="newaccount"><Link to="/SignUp">create an account?</Link></p>
            </form>
            </div>
          
        </div>
        <div className="description">
          <a href="#">about</a>
          <h1>evangadi Networks Q&A</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi risus, molestie in risus nec, tincidunt consectetur nisl.</p>
         <p>Sed dignissim sapien in auctor fringilla. Fusce ut purus mauris. Ut et tristique purus, nec hendrerit tellus. Praesent in dignissim ante. Fusce hendrerit augue sed facilisis cursusx, feugiat vel nisl ut, aliquam finibus massa.</p>
          <p>Vivamus sodales lacus ut lacus mollis, sit amet vehicula eros malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt erat.</p>
          <button className="btn3">how it works</button>
        </div>
    </div>
    
  )

}
export default Signin;