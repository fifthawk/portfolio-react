import React from "react";
import "./ProjectOne.css";
import movie from "./movie.png"
import movieDesktop from "./movieDesktop.png"

const ProjectOne = () => {
  return (
    <>
      <div className="projectOneContainer">
        <div>
        <h1>Project1</h1>
        </div>
        <div>
        <p className ="projectOneDesc">sdasdasdasdasdasdasdasdasd assdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasda sdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasd asdasdasdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasda sdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasda sdasdasdasdassdasdasdasdasdasdasdasdasdassdasda sdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasdasda sdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasda ssdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdas</p>
        </div>
        <div>
      
       <img className ="projectOneImage_two"src ={movieDesktop} alt ="project1"/>
       </div>
       <div>
       <img className ="projectOneImage"src ={movie} alt ="project1"/>
       </div>
      </div>
    </>
  );
};

export default ProjectOne;
