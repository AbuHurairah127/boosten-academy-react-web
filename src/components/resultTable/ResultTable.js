import React from "react";
import { marks } from "./../../constantData/Data";

const ResultTable = () => {
  return (
    <div className="w-screen min-h-96 flex flex-col items-center justify-evenly overflow-auto my-12">
      <h1 className="text-4xl font-bold py-5">Result</h1>
      {/* Tablet and big screen result */}
      <table className="hidden md:table md:w-[90vw] ">
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
          <tr className="py-2 bg-gray-200 border-y-2 border-gray-900">
            <td className="text-center py-2">Test No. {1}</td>
            {marks.map((item) => (
              <td className="text-center py-2">{item.marks}</td>
            ))}
          </tr>
          <tr>
            <td className="text-center py-2">Test No. {2}</td>
            {marks.map((item) => (
              <td className="text-center py-2">{item.marks}</td>
            ))}
          </tr>
          <tr className="py-2 bg-gray-200 border-y-2 border-gray-900">
            <td className="text-center py-2">Test No. {3}</td>
            {marks.map((item) => (
              <td className="text-center py-2">{item.marks}</td>
            ))}
          </tr>
        </tbody>
      </table>
      {/* mobile screen result */}
      <div className="grid grid-cols-1 gap-4 md:hidden w-full overflow-auto">
        <div className=" m-2 p-3 rounded-2xl shadow-lg">
          <div className="resultCardHeader text-center text-xl bg-gray-300">
            <p>Test no. 1</p>
          </div>
          <div className="resultCardmain flex-flex-col">
            <div className="flex justify-between">
              <p>English</p>
              <p>20</p>
            </div>
            <div className="flex justify-between">
              <p>Mathematics</p>
              <p>29</p>
            </div>
            <div className="flex justify-between">
              <p>Physics</p>
              <p>30</p>
            </div>
            <div className="flex justify-between">
              <p>Chemistry</p>
              <p>25</p>
            </div>
            <div className="flex justify-between">
              <p>Urdu</p>
              <p>26</p>
            </div>
            <div className="flex justify-between">
              <p>Biology</p>
              <p>28</p>
            </div>
            <div className="flex justify-between">
              <p>Islamiat</p>
              <p>30</p>
            </div>
            <div className="flex justify-between">
              <p>Pakistan Studies</p>
              <p>29</p>
            </div>
          </div>
        </div>
        <div className=" m-2 p-3 rounded-2xl shadow-lg">
          <div className="resultCardHeader text-center text-xl bg-gray-300">
            <p>Test no. 2</p>
          </div>
          <div className="resultCardmain flex-flex-col">
            <div className="flex justify-between">
              <p>English</p>
              <p>20</p>
            </div>
            <div className="flex justify-between">
              <p>Mathematics</p>
              <p>29</p>
            </div>
            <div className="flex justify-between">
              <p>Physics</p>
              <p>30</p>
            </div>
            <div className="flex justify-between">
              <p>Chemistry</p>
              <p>25</p>
            </div>
            <div className="flex justify-between">
              <p>Urdu</p>
              <p>26</p>
            </div>
            <div className="flex justify-between">
              <p>Biology</p>
              <p>28</p>
            </div>
            <div className="flex justify-between">
              <p>Islamiat</p>
              <p>30</p>
            </div>
            <div className="flex justify-between">
              <p>Pakistan Studies</p>
              <p>29</p>
            </div>
          </div>
        </div>
        <div className=" m-2 p-3 rounded-2xl shadow-lg">
          <div className="resultCardHeader text-center text-xl bg-gray-300">
            <p>Test no. 3</p>
          </div>
          <div className="resultCardmain flex-flex-col">
            <div className="flex justify-between">
              <p>English</p>
              <p>20</p>
            </div>
            <div className="flex justify-between">
              <p>Mathematics</p>
              <p>29</p>
            </div>
            <div className="flex justify-between">
              <p>Physics</p>
              <p>30</p>
            </div>
            <div className="flex justify-between">
              <p>Chemistry</p>
              <p>25</p>
            </div>
            <div className="flex justify-between">
              <p>Urdu</p>
              <p>26</p>
            </div>
            <div className="flex justify-between">
              <p>Biology</p>
              <p>28</p>
            </div>
            <div className="flex justify-between">
              <p>Islamiat</p>
              <p>30</p>
            </div>
            <div className="flex justify-between">
              <p>Pakistan Studies</p>
              <p>29</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultTable;
