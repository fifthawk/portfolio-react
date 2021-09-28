import React from "react";
import "./Header.css"
import "animate.css"

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <h1 className="nameHeader animate__animated animate__backInUp">Jack Allen</h1>
        <p className="descHeader animate__animated animate__backInUp animate__delay-1s">Front-End Developer</p>
      </div>
    </>
  );
};

export default Header;
