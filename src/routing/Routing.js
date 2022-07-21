import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux/";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Result from "../pages/result/Result";
import PrivateRoutes from "./PrivateRoutes";

const Routing = () => {
  const isUserLoggined = useSelector(
    (store) => store.authReducer.isAuthenticated
  );
  console.log(isUserLoggined);
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={!isUserLoggined ? <Login /> : <Navigate to="/result" />}
          />
          <Route
            path="/result"
            element={<PrivateRoutes Component={Result} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Routing;
