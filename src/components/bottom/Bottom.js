import React from "react";
import "./Bottom.css";
import { AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";
import { HashLink } from "react-router-hash-link";

const Bottom = () => {
  return (
    <div className="max-w-screen bg-[#1d3557] text-white flex flex-col justify-around  lg:min-h-[30vh] flex-wrap border-b-2 border-b-[#fff]">
      <div className="w-full flex justify-between flex-wrap flex-col items-center lg:flex-row lg:items-start">
        <div className="left flex flex-col justify-between ml-5 lg:min-h-[20vh] lg:w-1/2">
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
                className="transition-color delay-75 duration-200 ease-in-out  fill-pink-700 bg-white rounded-sm hover:p-0.5"
              />
            </a>
            <a
              href="https://www.facebook.com/gulbergbostonacademy"
              target="blank"
              className="transition-all delay-75 duration-700 ease-in-out footerIcon mr-3"
            >
              <AiFillFacebook
                size={30}
                className="transition-color delay-75 duration-200 ease-in-out  fill-blue-700 bg-white rounded-sm hover:p-1"
              />
            </a>
            <a
              href="https://wa.me/923336584571"
              target="blank"
              className="transition-all delay-75 duration-700 ease-in-out footerIcon mr-3"
            >
              <ImWhatsapp
                size={30}
                className="transition-color delay-75 duration-200 ease-in-out p-0.5 fill-green-500 bg-white rounded-sm hover:p-1"
              />
            </a>
          </div>
        </div>

        <div className="right lg:mr-5">
          <div className="rightHeader flex flex-col  lg:justify-center h-full items-center lg:items-start">
            <div className="flex">
              <div className="py-5 lg:py-0">
                <p className="text-[#628dc5]">Address: </p>
                <a
                  href="mailto:gbacademy127@gmail.com"
                  className="text-[#628dc5] block"
                >
                  Mail:
                </a>
                <a href="tel:03336584571" className="text-[#628dc5] block">
                  Phone:
                </a>
                <a href="tel:0412628626" className="text-[#628dc5] lock">
                  Tel:
                </a>
              </div>
              <div className="py-5 lg:py-0">
                <p className="text-[#628dc5]">
                  <span className="text-white pl-3">
                    127/C Gulberg Faisalabad
                  </span>
                </p>
                <a
                  href="mailto:gbacademy127@gmail.com"
                  className="text-[#628dc5] block"
                >
                  <span className="text-white pl-3">
                    gbacademy127@gmail.com
                  </span>
                </a>
                <a href="tel:03336584571" className="text-[#628dc5] block">
                  <span className="text-white pl-3">0333-6584571</span>
                </a>
                <a href="tel:0412628626" className="text-[#628dc5] lock">
                  <span className="text-white pl-3">041-2628626</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
