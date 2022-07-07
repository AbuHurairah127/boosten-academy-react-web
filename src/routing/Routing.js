import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./../components/navbar/Navbar";
import Footer from "./../components/footer/Footer";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Result from "../pages/result/Result";

const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
