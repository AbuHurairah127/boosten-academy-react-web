import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/button/Button";

const Login = () => {
  return (
    <div
      className="max-w-screen min-h-[100vh] flex flex-col justify-between"
      style={{
        fontFamily: "work sans",
      }}
    >
      <div className="headerContainer">
        <Navbar />
      </div>
      <div className="mx-auto">
        <div
          className="loginForm w-[80vw] flex flex-col items-center justify-evenly min-h-[60vh]"
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        >
          <h1 className="text-4xl font-bold">Login Form</h1>
          <div className=" flex flex-col space-y-5 justify-center">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="border-2 border-gray-300 px-3 py-1 w-[60vw] rounded outline-0"
              required
            />
            <input
              type="password"
              placeholder="Enter Your password"
              className="border-2 border-gray-300 px-3 py-1 w-[60vw] rounded outline-0"
              required
            />
          </div>
          <div className="">
            <Button label="Login" textCol="black" />
          </div>
        </div>
      </div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
