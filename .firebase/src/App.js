import Header from "./components/Header";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./styles.css";
import Footer from "./components/Footer";
import HowItWorks from "./pages/HowItWorks";
import HomePage from "./pages/home";
import Spinner from "./components/Spineer";
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
  const [isLoading, setLoading] = useState(false);
  return (
    <div className="App ">
      <BrowserRouter>
        <HeaderWithLocationCheck />
        {isLoading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage isLoading={setLoading} />} />
            <Route
              path="/how-it-work"
              element={<HowItWorks isLoading={setLoading} />}
            />
          </Routes>
        )}
        <FooterWithLocationCheck />
      </BrowserRouter>
    </div>
  );
}

export default App;
