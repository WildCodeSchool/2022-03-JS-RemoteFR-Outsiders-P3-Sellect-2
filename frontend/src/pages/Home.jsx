import React from "react";
import "@assets/common.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Bloc1 from "@components/Bloc1";

function Home() {
  return (
    <div>
      <Navbar />
      <Bloc1 />
      <Footer />
    </div>
  );
}

export default Home;
