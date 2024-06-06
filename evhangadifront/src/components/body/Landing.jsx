import React from 'react'
import "./landingpage.css"

function Landing() {
  return (
    <>
    <div class="mainwarpper">
        <div class="card">
  
            <h1>Login to your account</h1>
            <p>Don't have an account?<a href="#">create a new account</a></p>
            <div>
            <form class="form1">
              <input placeholder='your email' name="email" id="email" class="input1"></input><br/>
              <input placeholder='your password' name="password" id="password" class="input1"></input>
              <input class="input2" value="submit" type="submit"/><br/>
              <p class="newaccount"><a href="#">create an account?</a></p>
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

export default Landing