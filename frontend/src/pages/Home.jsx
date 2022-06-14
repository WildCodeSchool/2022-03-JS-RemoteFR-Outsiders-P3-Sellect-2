import React from "react";
import "@assets/common.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import HomeBlock3 from "@components/HomeBlock3";
import Bloc1 from "@components/Bloc1";

function Home() {
  return (
    <div>
      <Navbar />
      <Bloc1 />
      <HomeBlock3 />
      <Footer />
    </div>
  );
}

export default Home;
