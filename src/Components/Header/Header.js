import React from "react";
import "./Header.css"
import "animate.css"
import * as Icon from "react-bootstrap-icons";

const Header = () => {
  return (
    <>
    <div data-aos="flip-left" 
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-top">
      
      <div className="headerContainer">
        <h1 className="nameHeader animate__animated animate__backInUp">Jack Allen</h1>
        <p className="descHeader animate__animated animate__backInUp animate__delay-1s">Front-End Developer</p>
        <p className="descHeader animate__animated animate__backInUp animate__delay-1s">jackaallen@protonmail.com</p>
        <p className ="descHeader">United States</p>
      </div>
      <Icon.ArrowDown className="iconHeader" height="100" width="75" />
      </div>
    </>
  );
};

export default Header;
