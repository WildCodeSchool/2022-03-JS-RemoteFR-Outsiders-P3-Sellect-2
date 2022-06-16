import React from "react";
import "@assets/common.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import HomeGoals from "@components/HomeGoals";
import Bloc1 from "@components/Bloc1";

function Home() {
  return (
    <div>
      <Navbar />
      <Bloc1 />
      <HomeGoals />
      <Footer />
    </div>
  );
}

export default Home;
