import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slidepartner from "../assets/img/slidepartner.svg";
import tips from "../assets/img/tips.svg";
import "../assets/Slider.css";

export default function Slider() {
  return (
    <div className="carousel-div">
      <img className="img1" src={tips} alt="tips" />
      <Carousel>
        <div className="img-carousel-div">
          <img src={slidepartner} alt="sellectlogo" />
          <div className="overlay">
            <h2> CTEASY</h2>
            <p>
              {" "}
              <a
                href="https://www.cteasy.com/fr/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Contrôle technique{" "}
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="img-carousel-div">
          <img src={slidepartner} alt="sellectlogo" />
          <div className="overlay">
            <h2 className="overlay_title"> Hosman </h2>
            <p className="overlay_text">
              {" "}
              <a href="https://www.hosman.co/" target="_blank" rel="noreferrer">
                {" "}
                Immobilier moins cher{" "}
              </a>
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
