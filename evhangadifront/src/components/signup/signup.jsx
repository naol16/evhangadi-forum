import React from 'react'
import './signup.css'

function Signup() {
  return (
    <>
    <div class="mainwarpper">
        <div class="card">
  
            <h1>Login to your account</h1>
            <p>Don't have an account?<a href="#">create a new account</a></p>
            <div>
            <form class="form1">
              <input placeholder='your email' name="email" id="email" class="input1"></input><br/>
              <input placeholder='firstname'  name="firstname" id="firstname" class="input3"></input>
              <input placeholder='lastname'   name="lastname"  id="lastname"  class="input3"></input><br/>
              <input placeholder='username'   name="username"  id="username"  class="input1" ></input>
              <input placeholder='your password' name="password" id="password" class="input1"></input>
              <input class="input3" value="submit" type="submit"> agree and join</input><br/>
              <p>I agree <a href="#">to the privacy</a> and <a href="#">terms and services</a></p>
              <p><a href="#"> already have an account</a></p>
            </form>
            </div>
          
        </div>
        <div class="description">
          <a href="#">about</a>
          <h1>evangadi Networks Q&A</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi risus, molestie in risus nec, tincidunt consectetur nisl.</p>
         <p>Sed dignissim sapien in auctor fringilla. Fusce ut purus mauris. Ut et tristique purus, nec hendrerit tellus. Praesent in dignissim ante. Fusce hendrerit augue sed facilisis cursusx, feugiat vel nisl ut, aliquam finibus massa.</p>
          <p>Vivamus sodales lacus ut lacus mollis, sit amet vehicula eros malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt erat.</p>
          <button class="btn3">how it works</button>
        </div>
    </div>
    </>
  )
}

export default Signup