import React from "react";
import Button from "../../components/button/Button";
import { useDispatch } from "react-redux";
import { userLogin } from "./../../store/actions/authActions";
import { Link } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const loginUser = () => {
    dispatch(userLogin());
  };
  return (
    <div
      className="max-w-screen flex flex-col justify-center h-[80vh]"
      style={{
        fontFamily: "work sans",
      }}
    >
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
            <Link to="/">
              <Button label="Login" textCol="black" event={loginUser} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
