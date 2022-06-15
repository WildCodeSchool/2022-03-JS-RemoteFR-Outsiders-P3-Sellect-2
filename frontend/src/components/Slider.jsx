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
            <h2 className="overlay_title"> Partenaire N°1</h2>
            <p className="overlay_text"> Contrôle technique </p>
          </div>
        </div>
        <div className="img-carousel-div">
          <img src={slidepartner} alt="sellectlogo" />
          <div className="overlay">
            <h2 className="overlay_title"> Partenaire N°2</h2>
            <p className="overlay_text"> Immobilier moins cher</p>
          </div>
        </div>
        <div className="img-carousel-div">
          <img src={slidepartner} alt="sellectlogo" />
          <div className="overlay">
            <h2 className="overlay_title"> Immobilier</h2>
            <p className="overlay_text"> Bien immobiler </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
