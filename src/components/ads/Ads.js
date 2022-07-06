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
        <p className="text-center md:text-left ads-text">
          Just one text away: +92 320 7443537
        </p>
      </div>
      <div className="btn-container">
        <Button label="Get Your Consultation" />
      </div>
    </div>
  );
};

export default Ads;
