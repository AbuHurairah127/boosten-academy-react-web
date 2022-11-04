import React from "react";
import companyCEO from "./../../assets/companyCEO.png";

const AboutUs = () => {
  return (
    <div className="max-w-screen " id="aboutUs">
      <div className="flex items-center py-8 md:p-10 lg:px-20 lg:py-12 xl:p-24">
        <div
          className="bg-[#1d3557] shadow-xl shadow-[#1d3557] rounded-md w-screen md:min-w-[350px] h-5/6 "
          style={{
            boxShadow:
              "0px 20px 24px -4px rgba(17, 24, 39, 0.1), 0px 8px 8px -4px rgba(17, 24, 39, 0.04)",
          }}
        >
          <h1 className="text-white text-2xl font-bold p-5">
            30 Years of Experience
          </h1>
          <p
            className="px-5 text-white leading-5"
            style={{
              fontFamily: "work sans",
            }}
          >
            We not only teach students the syllabus books but also work on the
            self development of students in terms of knowledge, skill,
            competence, attitude, professional growth, value inculcation and
            social cohesion.
          </p>
          {/* <p
            className="px-5 text-white leading-5 pt-3"
            style={{
              fontFamily: "work sans",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            veritatis omnis consequuntur adipisci obcaecati natus ducimus, a
            dolores nostrum itaque, amet ratione quis. Rem, magnam?
          </p> */}
          <div className="mx-5 my-10"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
