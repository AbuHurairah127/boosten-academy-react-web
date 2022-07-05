import React, { useState } from "react";
import { Sling as Humburger } from "hamburger-react";
import MobileNavigation from "./MobileNavigation";
import { navLinks } from "../../constantData/Data";
import NavLinks from "./navLinks/NavLinks";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="max-w-screen flex flex-col h-16 bg-[#1d3557] z-50">
      <div className="flex w-full justify-between items-center h-full px-3 md:px-6 lg:px-8 xl:px-12">
        <div
          className="left text-white w-fit whitespace-normal text-xl"
          style={{
            fontFamily: "work sans",
          }}
        >
          <button>
            <span className="text-[#F9995D]">Boosten</span> Academy
          </button>
        </div>
        <div className="right w-fit">
          {/* Desktop Navgation */}
          <div
            className="desktopNavigation hidden lg:flex space-x-5"
            style={{ fontFamily: "work sans" }}
          >
            {navLinks.map((item, index) => (
              <NavLinks label={item} key={index} />
            ))}
          </div>
          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <button
              onClick={() => {
                setClicked(!clicked);
                console.log(clicked);
              }}
            >
              <Humburger color="white" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          +clicked
            ? "lg:hidden transition-all duration-500 ease-out translate-y-2"
            : "lg:hidden transition-all duration-500 ease-out -translate-y-80"
        }
      >
        <MobileNavigation />
      </div>
    </div>
  );
};
export default Navbar;
