import React from "react";

const NavLinks = (props) => {
  return (
    <div>
      <li className="text-white list-none hover:text-[#F9995D] active:text-[#F9995D]  cursor-pointer xl:text-xl 2xl:text-2xl border-t-2 border-[#457B9D] py-2.5 text-center lg:text-left lg:border-none lg:py-0">
        <a href="/">{props.label}</a>
      </li>
    </div>
  );
};

export default NavLinks;