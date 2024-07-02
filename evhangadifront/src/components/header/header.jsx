import React from "react";
import Evangadilogo from "../../assets/newlogo2.png"
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <>
    <header>
      <div className="headerwarpper">
        <div className="image">
            <img src={Evangadilogo}  width="100px"/>
        </div>
        <div  className="text">
            <div className="texts">
          <div ><p>home</p></div>
          <div ><p>how it works</p></div>
          </div>
          <div className="signin"><button>sign in</button></div>
        </div>
      </div>
      </header>
    </>
  );
}

export default Header;
