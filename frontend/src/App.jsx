import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeUser from "./pages/HomeUser";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import LegalNotices from "./pages/LegalNotices";
import Wilders from "./pages/Wilders";
import { MainContextProvider } from "./contexts/MainContext";

function App() {
  return (
    <div className="App">
      <MainContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<SignUp />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/mon-compte" element={<HomeUser />} />
          <Route path="/mentionslegales" element={<LegalNotices />} />
          <Route path="/wilders" element={<Wilders />} />
        </Routes>
      </MainContextProvider>
    </div>
  );
}

export default App;
