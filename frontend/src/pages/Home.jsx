import React from "react";
import "@assets/common.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Bloc2 from "@components/Bloc2";
import HomeBlock3 from "@components/HomeBlock3";
import Bloc1 from "@components/Bloc1";


function Home() {
  return (
    <div className="content_container">
      <Navbar />
      <Bloc2 />
      <div className="content">
        <Bloc1 />
        <HomeBlock3 />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
