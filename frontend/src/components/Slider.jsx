import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import tips from "../assets/img/tips.svg";
import hosman from "../assets/img/hosman.svg";
import cteasy from "../assets/img/cteasy.svg";
import "../assets/Slider.css";

export default function Slider() {
  return (
    <div className="carousel-div" id="partenariat">
      <h1>PARTENARIATS</h1>
      <img className="img1" src={tips} alt="tips" />
      <Carousel autoPlay interval={3000} infiniteLoop>
        <div className="img-carousel-div">
          <img src={cteasy} alt="logo cteasy" />
          <div className="overlay">
            <h2 className="overlay_title">
              {" "}
              <a
                href="https://www.cteasy.com/fr/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Cteasy{" "}
              </a>{" "}
            </h2>
            <p className="overlay_text"> Contrôle technique </p>
          </div>
        </div>
        <div className="img-carousel-div">
          <img src={hosman} alt="logo hosman" />
          <div className="overlay">
            <h2 className="overlay_title">
              {" "}
              <a href="https://www.hosman.co/" target="_blank" rel="noreferrer">
                {" "}
                Hosman{" "}
              </a>{" "}
            </h2>
            <p className="overlay_text"> Immobilier moins cher </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
