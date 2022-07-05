import React from "react";
import Button from "./../button/Button";
import companyCEO from "./../../assets/companyCEO.png";

const AboutUs = () => {
  return (
    <div className="max-w-screen min-h-[600px] xl:h-[945px]">
      <div className="flex items-center py-8 md:p-10 lg:p-20 xl:p-24">
        <img
          src={companyCEO}
          alt="Company CEO Image"
          className="w-5/6 h-full shadow-2xl hidden lg:inline"
        />
        <div
          className="bg-[#1d3557] shadow-xl shadow-[#1d3557] rounded-md w-screen md:min-w-[350px] h-5/6 lg:relative lg:right-40"
          style={{
            boxShadow:
              "0px 20px 24px -4px rgba(17, 24, 39, 0.1), 0px 8px 8px -4px rgba(17, 24, 39, 0.04)",
          }}
        >
          <h1 className="text-white text-2xl font-bold p-5">About Us</h1>
          <p
            className="px-5 text-white leading-5"
            style={{
              fontFamily: "work sans",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            veritatis omnis consequuntur adipisci obcaecati natus ducimus, a
            dolores nostrum itaque, amet ratione quis. Rem, magnam? Architecto
            cumque odit quibusdam possimus?
          </p>
          <p
            className="px-5 text-white leading-5 pt-3"
            style={{
              fontFamily: "work sans",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            veritatis omnis consequuntur adipisci obcaecati natus ducimus, a
            dolores nostrum itaque, amet ratione quis. Rem, magnam?
          </p>
          <div className="mx-5 my-10">
            <Button label="More About Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
