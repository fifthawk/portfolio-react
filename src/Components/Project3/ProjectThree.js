import React from "react";
import "./ProjectThree.css";
import shop from "./shop.png";
import shopDesktop from "./shopDesktop.png";
import * as Icon from "react-bootstrap-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectThree = () => {
  AOS.init({
    disable: "phone",
  });
  return (
    <>
      <div
        data-aos="zoom-out"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-back"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div>
          <h1 className="projectThreeTitle">E-Shop Website</h1>
        </div>
        <div className="projectThreeContainer">
          <div className="projectThreeDesc">
            <p>E-Shop using Commerce.js and Stripe for payments.</p>
            <a
              className="siteLink"
              href="https://alexandrias-shop.netlify.app/"
            >
              {" "}
              <Icon.Bag className="icon" />
            </a>
            <p>
              <a href="https://github.com/fifthawk/eshop-app">
                <Icon.Github className="icon" />{" "}
              </a>
            </p>
          </div>
          <div>
            <img
              className="projectThreeImage_two"
              src={shopDesktop}
              alt="project3"
            />
          </div>
          <div>
            <img className="projectThreeImage" src={shop} alt="project3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectThree;
