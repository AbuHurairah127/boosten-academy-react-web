import React from "react";

const NavLinks = (props) => {
  return (
    <div>
      <li className="text-white list-none hover:text-[#F9995D] active:text-[#F9995D]  cursor-pointer xl:text-xl 2xl:text-2xl bg-[#1d3557] py-2.5 text-center lg:text-left lg:py-0">
        <a href="#">{props.label}</a>
      </li>
    </div>
  );
};

export default NavLinks;
