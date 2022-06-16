import React from "react";
import "../assets/common.css";
import Bloc2 from "@components/Bloc2";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import HomeBlock3 from "../components/HomeBlock3";
import Bloc1 from "../components/Bloc1";

function Home() {
  return (
    <div className="content_container">
      <Navbar />
      <div className="content">
        <Bloc1 />
        <Bloc2 />
        <HomeBlock3 />
        <Slider />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
