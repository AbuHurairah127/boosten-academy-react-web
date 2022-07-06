import React from "react";
import Navbar from "./../../components/navbar/Navbar";
import Hero from "./../../components/hero/Hero";
import AboutUs from "./../../components/aboutUs/AboutUs";
import Classes from "./../../components/classes/Classes";
import Ads from "./../../components/ads/Ads";
import ContactForm from "./../../components/constactUs/ContactForm";
import Footer from "./../../components/footer/Footer";
import Bottom from "../../components/bottom/Bottom";

const Home = () => {
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
      <div className="contactFormContainer">
        <ContactForm />
      </div>
      <div className="footerCContainer">
        <Bottom />
        <Footer />
      </div>
    </div>
  );
};

export default Home;