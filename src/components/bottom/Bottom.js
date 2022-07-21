import React from "react";
import "./Bottom.css";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
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
                className="text-4xl block sm:inline"
                style={{ fontFamily: "work sans" }}
              >
                <span className="text-4xl text-[#F9995D] block sm:inline">
                  Boosten&nbsp;
                </span>
                Academy
              </span>
            </HashLink>
            <p className="text-lg">The academy of science</p>
          </div>
          <div className="leftBottom flex pb-5 items-center lg:items-start justify-center lg:justify-start w-full py-5 lg:py-0">
            <a
              href="/"
              className="transition-all delay-75 duration-700 ease-in-out footerIcon mr-3 "
            >
              <AiOutlineInstagram
                size={30}
                className="transition-color delay-75 duration-200 ease-in-out  hover:fill-pink-700 hover:bg-white rounded-full hover:p-0.5"
              />
            </a>
            <a
              href="/"
              className="transition-all delay-75 duration-700 ease-in-out footerIcon mr-3"
            >
              <AiFillFacebook
                size={30}
                className="transition-color delay-75 duration-200 ease-in-out  hover:fill-blue-700 hover:bg-white rounded-full hover:p-1"
              />
            </a>
            <a
              href="/"
              className="transition-all delay-75 duration-700 ease-in-out footerIcon mr-3"
            >
              <AiOutlineTwitter
                size={30}
                className="transition-color delay-75 duration-200 ease-in-out  hover:fill-blue-500 hover:bg-white rounded-full hover:p-0.5"
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
                  6391 Elgin St. Celina, Delaware 10299
                </span>
              </p>
              <p className="text-[#628dc5]">
                Phone: <span className="text-white pl-3">+92 333 8384071</span>
              </p>
              <p className="text-[#628dc5]">
                Mail:{" "}
                <span className="text-white pl-3">ghiyasanwar@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
