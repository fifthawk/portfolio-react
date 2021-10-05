import React from "react";
import "./ProjectTwo.css";
import crypto from "./crypto.png";
import cryptoDesktop from "./cryptoDesktop.png";
import * as Icon from "react-bootstrap-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectTwo = () => {
  AOS.init({
    disable: "phone",
  });
  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div>
          <h1 className="projectTwoTitle animate__animated animate__bounceInRight">
            Cryptocurrency Search
          </h1>
        </div>
        <div className="projectTwoContainer animate__animated animate__bounceInRight">
          <div className="projectTwoDesc">
            <p>
              Cryptocurrency search app that shows the current prices and other
              basic information for coins.
            </p>
            <a
              className="siteLink"
              href="https://vigorous-ardinghelli-36d706.netlify.app/"
            >
              <Icon.CurrencyBitcoin className="icon" />
            </a>
            <p>
              <a href="https://github.com/fifthawk/crypto-search">
                <Icon.Github className="icon" />
              </a>
            </p>
          </div>
          <div>
            <img
              className="projectTwoImage_two"
              src={cryptoDesktop}
              alt="project2"
            />
          </div>
          <div>
            <img className="projectTwoImage" src={crypto} alt="project2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectTwo;
