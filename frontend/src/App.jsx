import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "@pages/AdminDashboard";
import Page404 from "@pages/Page404";
import Faq from "./pages/Faq";
import UserHome from "./pages/UserHome";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import LegalNotices from "./pages/LegalNotices";
import Wilders from "./pages/Wilders";
import Sponsorship from "./pages/Sponsorship";
import Calendar from "./pages/Calendar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<SignUp />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/mon-compte" element={<UserHome />} />
        <Route path="/mentions-legales" element={<LegalNotices />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/wilders" element={<Wilders />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/parrainage" element={<Sponsorship />} />
        <Route path="/calendrier" element={<Calendar />} />
      </Routes>
    </div>
  );
}

export default App;
