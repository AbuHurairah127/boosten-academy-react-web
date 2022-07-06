import "./App.css";
import "@fontsource/work-sans";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import AboutUs from "./components/aboutUs/AboutUs";
import Classes from "./components/classes/Classes";
import Ads from "./components/ads/Ads";
function App() {
  return (
    <div className="container-fluid">
      <div className="headerContainer z-50">
        <Navbar />
      </div>
      <div className="heroContainer z-0">
        <Hero />
      </div>
      <div className="aboutUsContainer">
        <AboutUs />
      </div>
      <div className="classesContainer">
        <Classes />
      </div>
      <div className="adsContainer">
        <Ads />
      </div>
    </div>
  );
}

export default App;
