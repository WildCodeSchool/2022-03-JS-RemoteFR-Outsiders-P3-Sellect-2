import React from "react";
import "@assets/common.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import HomeGoals from "@components/HomeGoals";
import "../assets/common.css";
import Bloc2 from "@components/Bloc2";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Bloc1 from "../components/Bloc1";

function Home() {
  return (
    <div className="content_container">
      <Navbar />
      <div className="content">
          <Bloc1 />
        <Bloc2 />
    <HomeGoals />
        <Slider />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
