import React from "react";
import Hero from "./../../components/hero/Hero";
import AboutUs from "./../../components/aboutUs/AboutUs";
import Classes from "./../../components/classes/Classes";
import Ads from "./../../components/ads/Ads";
import ContactForm from "./../../components/constactUs/ContactForm";
import Bottom from "../../components/bottom/Bottom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="navbarContainer z-0">
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
      <div className="contactFormContainer">
        <ContactForm />
      </div>
      <div className="footerCContainer">
        <Bottom />
      </div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
