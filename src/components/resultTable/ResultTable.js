import React from "react";
import { marks } from "./../../constantData/Data";

const ResultTable = () => {
  console.log(marks.testNo);
  return (
    <div className="w-screen h-96 flex  justify-center items-start">
      <table className="w-[90vw]">
        <thead>
          <tr className="bg-gray-800">
            <td
              className="text-[#F9995D] py-2 text-center text-xl"
              style={{ fontFamily: "work sans" }}
            >
              Subjects
            </td>
            {marks.map((item, index) => (
              <td
                key={index}
                className="text-white py-2 text-center text-xl"
                style={{ fontFamily: "work sans" }}
              >
                {item.sub}
              </td>
            ))}
          </tr>
        </thead>
        <tbody className="w-full">
          <tr>
            <td className="text-center">Test No. {marks[0].testNo}</td>
            {marks.map((item) => (
              <td className="text-center">{item.marks}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
