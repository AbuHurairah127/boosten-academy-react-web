import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux/";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Result from "../pages/result/Result";
import PrivateRoutes from "./PrivateRoutes";
import ChangePassword from "../pages/changePassword/ChangePassword";

const Routing = (props) => {
  const isUserLoggined = useSelector(
    (store) => store.authReducer.isAuthenticated
  );
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home modalOpen={props.modalOpen} />} />
          <Route
            path="/login"
            element={!isUserLoggined ? <Login /> : <Navigate to="/result" />}
          />
          <Route
            path="/result"
            element={<PrivateRoutes Component={Result} />}
          />
          <Route
            path="/change-password"
            element={<PrivateRoutes Component={ChangePassword} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Routing;
