import React from "react";
import "./footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import Evangadilogo from "../../assets/newlogo.png"

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="allwarper">
          <div className="logo">
            <img  src={Evangadilogo}  width="100px"></img>
            <div className="icon">
              <div><FacebookIcon/></div>
              <div><InstagramIcon/></div>
              <div><YouTubeIcon/></div>
            </div>
            
          </div>
          <div>

          </div>
          <div className="usefull">
            <p className="title">
                useful Link
            </p>
            <li><a href="#">how it works</a></li>
            <li><a href="#">terms of services</a></li>
            <li><a href="#">privacy policy</a></li>
          </div>
          <div className="info">
            <p  className="title">
                contact info
            </p>
            <p className="small">
                evhangadi networks
            </p>
            <p className="small">
                support@evhangadi.com
            </p>
            <p className="small">
                +1-202-386-2702
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
