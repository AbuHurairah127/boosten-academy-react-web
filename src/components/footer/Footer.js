import React from "react";
import UseFooter from "./UseFooter";
const Footer = () => {
  const { year } = UseFooter();
  return (
    <div className="w-full text-center text-[#628dc5] bg-[#1d3557] py-1">
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
  );
};

export default Footer;
