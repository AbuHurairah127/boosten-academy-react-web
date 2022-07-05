import "./App.css";
import "@fontsource/work-sans";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import AboutUs from "./components/aboutUs/AboutUs";
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
    </div>
  );
}

export default App;
