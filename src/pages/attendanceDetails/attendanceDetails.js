import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const attendanceDetails = () => {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <header>
        <Navbar />
      </header>
      <main></main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default attendanceDetails;
