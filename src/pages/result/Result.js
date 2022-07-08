import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ResultTable from "../../components/resultTable/ResultTable";

const Result = () => {
  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <div>
        <Navbar />
      </div>
      <ResultTable />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Result;
