import React, { useState } from "react";
import { Sling as Humburger } from "hamburger-react";
import MobileNavigation from "./MobileNavigation";
import { navLinks } from "../../constantData/Data";
import NavLinks from "./navLinks/NavLinks";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { userLogout } from "./../../store/actions/authActions";
const Navbar = () => {
  const dispatch = useDispatch();
  const isUserLoggined = useSelector(
    (store) => store.authReducer.isAuthenticated
  );
  const [clicked, setClicked] = useState(false);
  const logoutUser = () => {
    dispatch(userLogout());
  };
  return (
    <div className="max-w-screen flex flex-col h-16 bg-[#1d3557] z-50">
      <div className="flex w-full justify-between items-center h-full px-3 md:px-6 lg:px-8 xl:px-12">
        <div
          className="left text-white w-fit whitespace-normal text-xl"
          style={{
            fontFamily: "work sans",
          }}
        >
          <Link to="/">
            <span className="text-[#F9995D]">Gulberg</span>{" "}
            <span className="text-[#F9995D]">Boston</span> Acadmey
          </Link>
        </div>
        <div className="right w-fit">
          {/* Desktop Navgation */}
          <div
            className="desktopNavigation hidden lg:flex space-x-5 lg:items-center"
            style={{ fontFamily: "work sans" }}
          >
            {navLinks.map((item, index) => (
              <NavLinks data={item} key={index} />
            ))}
            {isUserLoggined && (
              <Link to="/">
                {" "}
                <Button label="logout" event={logoutUser} />
              </Link>
            )}
          </div>
          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <button
              onClick={() => {
                setClicked(!clicked);
              }}
            >
              <Humburger color="white" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          clicked
            ? "lg:hidden transition-all duration-500 ease-out translate-y-2"
            : "lg:hidden transition-all duration-500 ease-out -translate-y-80"
        }
      >
        <MobileNavigation />
        {isUserLoggined && (
          <div className="w-screen h-max flex justify-center items-center bg-[#1D3557] ">
            <Link to="/">
              {" "}
              <Button label="logout" event={logoutUser} />
            </Link>{" "}
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
