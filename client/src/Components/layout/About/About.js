import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import instagram from "../../../images/instagram.png";
import github from "../../../images/github.svg";
import facebook from "../../../images/facebook.png";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.facebook.com/aymen.chatti/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/desire-clothing/image/upload/v1639482731/Photos_GoMyCode_Gabes_01.10.2021_516_s4itcq.jpg"
              alt="Founder"
            />
            <Typography>Chatti Aymen</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a Commercial Website made by me @ChattiAymen, for the
              purpose of commercialising the products of Desire Clothing company
              which is specialized on male Clothes.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <img className="social" src={instagram} alt="instagram" />
            <a href="https://www.instagram.com/desireclothingtunisia/">
              Instagram
            </a>
            <img className="social" src={github} alt="github" />
            <a href="https://github.com/ChattiAymen">Github</a>
            <img className="social" src={facebook} alt="facebook" />
            <a href="https://www.facebook.com/aymen.chatti/">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
