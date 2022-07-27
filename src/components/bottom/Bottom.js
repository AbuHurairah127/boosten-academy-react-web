import React from "react";
import "./Bottom.css";
import { AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";
import Button from "../button/Button";
import { HashLink } from "react-router-hash-link";

const Bottom = () => {
  return (
    <div className="max-w-screen bg-[#1d3557] text-white flex flex-col justify-around  lg:min-h-[50vh] flex-wrap border-b-2 border-b-[#fff]">
      <div className="w-full flex justify-between flex-wrap flex-col items-center lg:flex-row lg:items-start">
        <div className="left flex flex-col justify-between ml-5 lg:min-h-[35vh] lg:w-1/2">
          <div className="leftHeader flex flex-col items-center lg:items-start pt-5 lg:pt-0">
            <HashLink smooth to="/#top">
              <span
                className="text-4xl block sm:inline text-center md:text-left"
                style={{ fontFamily: "work sans" }}
              >
                <span className="text-4xl text-[#F9995D] block sm:inline text-center md:text-left">
                  Gulberg&nbsp;
                </span>
                <span className="text-4xl text-[#F9995D] block sm:inline text-center md:text-left">
                  Boston&nbsp;
                </span>
                Academy
              </span>
            </HashLink>
            <p className="text-lg">The Academy of Science and Commerce</p>
          </div>
          <div className="leftBottom flex pb-5 items-center lg:items-start justify-center lg:justify-start w-full py-5 lg:py-0">
            <a
              href="https://www.instagram.com/gulbergbostonacademy/"
              className="transition-all delay-75 duration-700 ease-in-out footerIcon mr-3 "
            >
              <AiOutlineInstagram
                size={30}
                className="transition-color delay-75 duration-200 ease-in-out  hover:fill-pink-700 hover:bg-white rounded-full hover:p-0.5"
              />
            </a>
            <a
              href="https://www.facebook.com/gulbergbostonacademy"
              target="blank"
              className="transition-all delay-75 duration-700 ease-in-out footerIcon mr-3"
            >
              <AiFillFacebook
                size={30}
                className="transition-color delay-75 duration-200 ease-in-out  hover:fill-blue-700 hover:bg-white rounded-full hover:p-1"
              />
            </a>
            <a
              href="https://wa.me/923336584571"
              target="blank"
              className="transition-all delay-75 duration-700 ease-in-out footerIcon mr-3"
            >
              <ImWhatsapp
                size={30}
                className="transition-color delay-75 duration-200 ease-in-out p-0.5 hover:fill-green-500 hover:bg-white rounded-lg hover:p-1"
              />
            </a>
          </div>
        </div>
        <div className="right lg:mr-5">
          <div className="rightHeader flex flex-col  lg:justify-between h-full items-center lg:items-start">
            <div>
              <h1 className="text-white pb-5 text-xl">Newsletter :</h1>
              <div className="flex flex-col lg:flex-row items-center lg:items-start">
                <input
                  type="email"
                  placeholder="Your Email Here"
                  required
                  className="md:w-[60vw] lg:w-auto outline-0 px-4 py-1.5 rounded-sm border-2 text-black z-10"
                />
                <div className="lg:relative lg:right-2 z-0">
                  <Button label="Subscribe" />
                </div>
              </div>
            </div>
            <div className="py-5 lg:py-0">
              <p className="text-[#628dc5]">
                Address:{" "}
                <span className="text-white pl-3">
                  127/C Gulberg Faisalabad
                </span>
              </p>
              <a href="tel:03336584571" className="text-[#628dc5] block">
                Phone: <span className="text-white pl-3">0333-6584571</span>
              </a>
              <a href="tel:0412628626" className="text-[#628dc5] lock">
                Tel: <span className="text-white pl-3">041-2628626</span>
              </a>
              <a
                href="mailto:gbacademy127@gmail.com"
                className="text-[#628dc5] block"
              >
                Mail:{" "}
                <span className="text-white pl-3">gbacademy127@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
