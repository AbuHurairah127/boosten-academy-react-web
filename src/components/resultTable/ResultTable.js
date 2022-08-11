import React from "react";
import { useSelector } from "react-redux";
import { marks } from "./../../constantData/Data";
import Attendance from "../attendance/Attendance";

const ResultTable = () => {
  const isAuthenticated = useSelector(
    (store) => store.authReducer.isAuthenticated
  );
  const user = useSelector((store) => store.authReducer.cUser);
  return (
    <div className="w-screen flex flex-col items-center justify-evenly overflow-none">
      <div className="w-screen min-h-max">
        {isAuthenticated && (
          <div className="w-[90vw] text-center">
            <span className="font-bold text-lg block md:inline ">
              Name: <span className="font-normal ">{user.name}</span>
            </span>
            <span className="font-bold text-lg md:pl-4 block md:inline ">
              Father's Name:{" "}
              <span className="font-normal ">{user.fatherName}</span>
            </span>
            <span className="font-bold text-lg md:pl-4 block md:inline">
              Roll No.: <span className="font-normal ">{user.rollNo}</span>
            </span>
            <span className="font-bold text-lg md:pl-4 block md:inline">
              Class: <span className="font-normal ">{user.class}</span>
            </span>
          </div>
        )}
      </div>
      <h1 className="text-4xl font-bold py-5">Attendance</h1>
      <div className="max-w-[100vw]">
        <Attendance />
      </div>
      <h1 className="text-4xl font-bold py-5">Result</h1>
      {/* Tablet and big screen result */}
      <table className="hidden md:table md:w-[90vw] my-8">
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
            {marks.map((item, i) => (
              <td className="text-center py-2" key={i}>
                {item.marks}
              </td>
            ))}
          </tr>
          <tr>
            <td className="text-center py-2">Test No. {2}</td>
            {marks.map((item, i) => (
              <td className="text-center py-2" key={i}>
                {item.marks}
              </td>
            ))}
          </tr>
          <tr className="py-2 bg-gray-200 border-y-2 border-gray-900">
            <td className="text-center py-2">Test No. {3}</td>
            {marks.map((item, i) => (
              <td className="text-center py-2" key={i}>
                {item.marks}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      {/* mobile screen result */}
      <div className="grid grid-cols-1 gap-4 md:hidden w-full overflow-auto my-8">
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
