import React from "react";
import "./ProjectTwo.css";
import crypto from "./crypto.png";
import cryptoDesktop from "./cryptoDesktop.png";

const ProjectTwo = () => {
  return (
    <>
      <div className="projectTwoContainer">
          <div>
        <h1 className="projectTwoHeader">Project2</h1>
        </div>
        <div>
        <p className ="projectTwoDesc">Test tehsdjfhsdfjhsdfjhsdfhsdlfhsldfhsdkfhasdfkj</p>
        </div>
        <div>
        <img className="projectTwoImage_two" src={cryptoDesktop} alt="project2" />
        </div>
        <div>
        <img className="projectTwoImage" src={crypto} alt="project2" />
        </div>
      </div>
    </>
  );
};

export default ProjectTwo;
