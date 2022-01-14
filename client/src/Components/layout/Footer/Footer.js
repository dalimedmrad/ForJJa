import React from "react";
import googleplay from "../../../images/googleplay.png";
import appstore from "../../../images/appstore.svg";
import juliastyle from "../../../images/juliastyle.svg";
import rebels from "../../../images/rebels.svg";
import instagram from "../../../images/instagram.png";
import github from "../../../images/github.svg";
import facebook from "../../../images/facebook.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={googleplay} alt="Playstore" />
        <img src={appstore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Desire Clothing</h1>
        <h2>Partners</h2>
        <img className="partners" src={juliastyle} alt="juliastyle" />
        <img className="partners" src={rebels} alt="rebels" />

        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Chatti Aymen</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>

        <img className="social" src={instagram} alt="instagram" />
        <a href="https://www.instagram.com/chatti_ayymen/">Instagram</a>
        <img className="social" src={github} alt="github" />
        <a href="https://github.com/ChattiAymen">Github</a>
        <img className="social" src={facebook} alt="facebook" />
        <a href="https://www.facebook.com/aymen.chatti/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
