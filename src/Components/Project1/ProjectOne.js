import React from "react";
import "./ProjectOne.css";
import movie from "./movie.png";
import movieDesktop from "./movieDesktop.png";
import * as Icon from "react-bootstrap-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectOne = () => {
  AOS.init();
  return (
    <>
      <div
        data-aos="flip-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div>
          <h1 className="projectOneTitle">Movie Search</h1>
        </div>
        <div className="projectOneContainer">
          <div className="projectOneDesc">
            <p>Basic movie search app using React and TheMovieDB </p>
            <a
              className="siteLink"
              href="https://vigorous-ardinghelli-36d706.netlify.app/"
            >
              <Icon.Film className="icon" />
            </a>
            <p>
              <a href="https://github.com/fifthawk/movie-search-app">
                <Icon.Github className="icon" />
              </a>
            </p>
          </div>
          <div>
            <img
              className="projectOneImage_two"
              src={movieDesktop}
              alt="project1"
            />
          </div>
          <div>
            <img className="projectOneImage" src={movie} alt="project1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectOne;
