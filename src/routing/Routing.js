import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Result from "../pages/result/Result";

const Routing = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Routing;
