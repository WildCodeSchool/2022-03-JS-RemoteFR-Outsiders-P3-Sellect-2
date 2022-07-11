import React from "react";
import "@assets/common.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import HomeGoals from "@components/HomeGoals";
import Bloc2 from "@components/Bloc2";
import Slider from "../components/Slider";
import Bloc1 from "../components/Bloc1";
import Faq from "./Faq";
import Sponsorship from "./Sponsorship";

function Home() {
  return (
    <div className="content_container">
      <Navbar />
      <div className="content">
        <Bloc1 />
        <Bloc2 />
        <HomeGoals />
        <Sponsorship />
        <Slider />
        <Faq />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
