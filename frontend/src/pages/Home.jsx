import React from "react";
import "@assets/common.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import HomeBlock3 from "@components/HomeBlock3";

function Home() {
  return (
    <div>
      <Navbar />
      <HomeBlock3 />
      <Footer />
    </div>
  );
}

export default Home;
