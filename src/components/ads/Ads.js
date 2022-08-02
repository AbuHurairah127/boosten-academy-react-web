import React from "react";
import Button from "../button/Button";
import "./Ads.css";
const Ads = () => {
  return (
    <div className="ads-container max-w-screen h-[300px] flex flex-wrap justify-center md:justify-evenly items-center">
      <div className="flex flex-col">
        <h1 className="text-white text-center md:text-left opacity text-3xl font-bold">
          Free consultation with exceptional quality.
        </h1>

        <span className="text-center md:text-left ads-text">
          Foreign Scholarships <br />
          PSF(Pakistan Science Foundation) Scholarships
          <br />
          <br />
          <hr />
          <br />
          <p className="text-2xl"> Just one text away</p>
        </span>
      </div>
      <a href="https://wa.me/923338384071" className="btn-container">
        <Button label="Get Your Consultation" />
      </a>
    </div>
  );
};

export default Ads;
