import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ResultTable from "../../components/resultTable/ResultTable";
import { Link } from "react-router-dom";
const Result = () => {
  return (
    <div className="flex flex-col justify-between overflow-x-hidden h-[100vh]">
      <div className="min-w-screen  flex flex-col">
        <Navbar />
        <Link
          to="/change-password"
          className="text-blue-600 text-right hover:underline hover:underline-offset-2 mr-6"
        >
          <span className="text-right">Change Password?</span>
        </Link>
      </div>
      <ResultTable />

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Result;
