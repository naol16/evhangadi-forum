import React from "react";
import "./footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import Evangadilogo from "../../assets/newlogo.png"

function Footer() {
  return (
    <>
      <div class="footer">
        <div class="allwarper">
          <div class="logo">
            <img  src={Evangadilogo}  width="100px"></img>
            <div class="icon">
              <div><FacebookIcon/></div>
              <div><InstagramIcon/></div>
              <div><YouTubeIcon/></div>
            </div>
            
          </div>
          <div>

          </div>
          <div class="usefull">
            <p class="title">
                useful Link
            </p>
            <li><a href="#">how it works</a></li>
            <li><a href="#">terms of services</a></li>
            <li><a href="#">privacy policy</a></li>
          </div>
          <div class="info">
            <p  class="title">
                contact info
            </p>
            <p class="small">
                evhangadi networks
            </p>
            <p class="small">
                support@evhangadi.com
            </p>
            <p class="small">
                +1-202-386-2702
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
