import React from "react";
import "./Footer.css";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import Button from "../button/Button";
import UseFooter from "./UseFooter";

const Footer = () => {
  const { year } = UseFooter();
  return (
    <div className="max-w-screen bg-[#1d3557] text-white flex flex-col justify-around min-h-[50vh]">
      <div className="w-full flex justify-between">
        <div className="left flex flex-col justify-between ml-5 min-h-[35vh] w-1/2">
          <div className="leftHeader flex flex-col">
            <h1 className="text-4xl inline" style={{ fontFamily: "work sans" }}>
              <h1 className="text-4xl text-[#F9995D] inline">Boosten&nbsp;</h1>
              Academy
            </h1>
            <p className="text-lg">The academy of science</p>
          </div>
          <div className="leftBottom flex pb-5">
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
          <div className="rightHeader flex flex-col">
            <h1 className="text-white pb-5 text-xl">Newsletter :</h1>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email Here"
                required
                className="md:w-[28vw] outline-0 px-4 py-1 rounded-sm border-2 text-black z-10"
              />
              <div className="relative right-2 z-0">
                <Button label="Subscribe" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <div className="w-full text-center text-[#628dc5]">
          <span className=" px-2">
            &copy; {year} All rights reserved by{" "}
            <a href="/">
              <span className="text-[#F9995D]"> Boosten Academy</span>
            </a>
          </span>
          <p>
            Created by{" "}
            <a href={"/"} className="underline underline-offset-2">
              {" "}
              Abu Hurairah
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
