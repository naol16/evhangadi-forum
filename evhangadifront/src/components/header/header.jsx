import React from "react";
import Evangadilogo from "../../assets/newlogo2.png"
import "./header.css";

function Header() {
  return (
    <>
    <header>
      <div class="headerwarpper">
        <div class="image">
            <img src={Evangadilogo}  width="100px"/>
        </div>
        <div  class="text">
            <div class="texts">
          <div ><p>home</p></div>
          <div ><p>how it works</p></div>
          </div>
          <div class="signin"><button>sign in</button></div>
        </div>
      </div>
      </header>
    </>
  );
}

export default Header;
