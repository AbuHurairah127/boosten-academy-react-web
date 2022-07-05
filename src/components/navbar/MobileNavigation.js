import React from "react";
import { navLinks } from "./../../constantData/Data";
import NavLinks from "./navLinks/NavLinks";
const MobileNavigation = () => {
  return (
    <div className="w-screen h-56 ">
      {navLinks.map((item, index) => (
        <NavLinks label={item} key={index} />
      ))}
    </div>
  );
};

export default MobileNavigation;
