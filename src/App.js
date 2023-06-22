import Header from "./components/Header";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./styles.css";
import Footer from "./components/Footer";
import HowItWorks from "./pages/HowItWorks";
import HomePage from "./pages/home";
import Scrollbar from "smooth-scrollbar";
import Scroll from "./components/SmoothScrool";
function HeaderWithLocationCheck() {
  const location = useLocation();

  if (location.pathname === "/how-it-work") {
    return (
      <div className="pt-10">
        <Header />
      </div>
    );
  }

  return null;
}
function FooterWithLocationCheck() {
  const location = useLocation();

  if (location.pathname === "/how-it-work") {
    return <Footer />;
  }

  return null;
}
function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <HeaderWithLocationCheck />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-work" element={<HowItWorks />} />
        </Routes>
        <FooterWithLocationCheck />
      </BrowserRouter>
    </div>
  );
}

export default App;
