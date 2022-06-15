import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import logosellect from "../assets/img/logosellect.svg";
import "../assets/Slider.css";

export default function Slider() {
  return (
    <div className="slider-div">
      <Carousel>
        <div className="carousel-div">
          <img src={logosellect} alt="sellectlogo" />
          <div className="overlay">
            <h2 className="overlay_title"> Immobilier</h2>
            <p className="overlay_text"> Bien immobiler </p>
          </div>
        </div>
        <div className="carousel-div">
          <img src={logosellect} alt="sellectlogo" />
          <div className="overlay">
            <h2 className="overlay_title"> Immobilier</h2>
            <p className="overlay_text"> Immobilier moins cher</p>
          </div>
        </div>
        <div className="carousel-div">
          <img src={logosellect} alt="sellectlogo" />
          <div className="overlay">
            <h2 className="overlay_title"> Immobilier</h2>
            <p className="overlay_text"> Bien immobiler </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
