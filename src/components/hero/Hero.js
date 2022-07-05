import React from "react";
import video from "./../../assets/video.mp4";
import Typewriter from "typewriter-effect";
import Button from "../button/Button";

const Hero = () => {
  return (
    <div
      className="w-full h-[93vh] flex flex-col items-center justify-center"
      style={{ background: "rgba(29, 53, 87,0.85)", objectFit: "contain" }}
    >
      <video
        loop
        muted
        autoPlay
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",

          position: "fixed",
          zIndex: -1,
        }}
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="flex flex-wrap justify-center -items-center w-[80vw]">
        <h1
          className="text-6xl text-[#F9995D]"
          style={{ fontFamily: "work sans" }}
        >
          Boosten&nbsp;
        </h1>
        <h1 className="text-6xl text-white" style={{ fontFamily: "work sans" }}>
          Academy
        </h1>
      </div>
      <div className="text-3xl text-white pt-5 text-center w-[80vw]">
        <Typewriter
          onInit={(typewriter) =>
            typewriter
              .typeString("The Academy of Science")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Leading students towards excellence")
              .start()
          }
        />
      </div>
      <div className="mt-8">
        <Button label="Login" />
      </div>
    </div>
  );
};

export default Hero;
