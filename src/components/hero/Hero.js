import React from "react";
import Typewriter from "typewriter-effect";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import hero from "./../../assets/hero.jpg";
const Hero = (props) => {
  const isUserLoggined = useSelector(
    (store) => store.authReducer.isAuthenticated
  );
  return (
    <div
      id="hero"
      className="w-full h-[70vh] flex flex-col items-center bg-top justify-center md:bg-cover"
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(2, 48, 71, 0.95),rgba(0, 180, 216, 0.15)),url(${hero})`,
        objectFit: "contain",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-wrap justify-center -items-center w-[80vw]">
        <h1
          className="text-6xl text-[#F9995D]"
          style={{ fontFamily: "work sans" }}
        >
          Gulberg&nbsp;
        </h1>
        <h1
          className="text-6xl text-[#F9995D]"
          style={{ fontFamily: "work sans" }}
        >
          Boston&nbsp;
        </h1>
        <h1 className="text-6xl text-white" style={{ fontFamily: "work sans" }}>
          Academy
        </h1>
      </div>
      {!props.modalOpen && (
        <div className="text-3xl text-white pt-5 hidden md:block text-center w-[80vw]">
          <Typewriter
            options={{
              strings: [
                "The Academy of Science and Commerce",
                "Leading Students Towards Excellence",
                "Under the Supervision of the Teachers from Renowned Universities,Colleges & Schools",
                "An Excellent Test System for all Classes",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      )}

      <div className="mt-8">
        {isUserLoggined ? (
          <Link to="/result">
            <Button label="See Result" />
          </Link>
        ) : (
          <Link to="/login">
            <Button label="Login" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
